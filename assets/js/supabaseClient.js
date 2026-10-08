// ============================================================
// عميل Supabase + طبقة الأمان المشتركة — مبتدأ من إتقان
// ملاحظة: مفتاح anon (publishable) علني بطبيعته؛ الحماية الفعلية في قاعدة البيانات (RLS + دوال RPC).
// ============================================================
const SUPABASE_URL = "https://fpjaupjwikaaxehcqprk.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_b_EiVWdAwTJDk-IGufOEBw_AzUMObDT";

// "تذكّرني": إن فُعّلت تُحفظ الجلسة في المتصفح (localStorage)، وإلا تنتهي بإغلاق التبويب (sessionStorage).
// لا نخزّن كلمة المرور أبداً؛ حفظها يتم عبر مدير كلمات المرور في المتصفح نفسه.
const __rememberOn = () => { try{ return localStorage.getItem('mub_remember') === '1'; }catch(e){ return false; } };
const __store = () => __rememberOn() ? localStorage : sessionStorage;
const __authStorage = {
  getItem: (k) => { try{ return __store().getItem(k); }catch(e){ return null; } },
  setItem: (k, v) => { try{ __store().setItem(k, v); }catch(e){} },
  removeItem: (k) => { try{ localStorage.removeItem(k); sessionStorage.removeItem(k); }catch(e){} }
};
window.setRememberMe = function(on){ try{ localStorage.setItem('mub_remember', on ? '1' : '0'); }catch(e){} };

window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { storage: __authStorage, persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'pkce' }
});

// مهلة الخمول (دقائق): الأدمن أقصر
const IDLE_MINUTES = { admin: 20, client: 45, provider: 30 };
window.__me = null;

async function getCurrentProfile(){
  const { data: { user } } = await supabase.auth.getUser();
  if(!user) return null;
  let { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle();
  if(!data){
    // حساب بلا ملف شخصي: تُنشأ بياناته الآمنة (الدور client دائماً) ثم نعيد المحاولة
    await supabase.rpc('ensure_my_profile', {
      p_full_name: user.user_metadata?.full_name || '', p_phone: user.user_metadata?.contact_phone || '',
      p_lang: user.user_metadata?.preferred_language || 'ar'
    });
    ({ data } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle());
  }
  window.__me = data || null;
  return window.__me;
}

// المصادقة الثنائية للأدمن (TOTP): تُفرض على واجهة الأدمن، وقاعدة البيانات تفرضها عند تفعيل الخيار (انظر 05_enforce_admin_mfa.sql)
async function adminMfaOk(){
  try{
    const { data } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
    return data && data.currentLevel === 'aal2';
  }catch(e){ return false; }
}

// صفحات معفاة من بوابة "الدولة ونوع التأسيس" — يجب أن يصلها العميل دائماً
// حتى لو لم يُكمل اختيار الدولة/المسار بعد (صفحات البوابة نفسها، وبياناتي لتغيير الاختيار لاحقاً).
const COUNTRY_GATE_EXEMPT = ['/client/country-select.html', '/client/path-select.html', '/client/coming-soon.html', '/client/profile.html', '/client/messages.html'];

async function requireRole(allowedRoles){
  const profile = await getCurrentProfile();
  const next = encodeURIComponent(location.pathname + location.search);
  if(!profile){ window.location.replace('/auth/login.html?next=' + next); return null; }
  if(!allowedRoles.includes(profile.role)){
    // الدور غير مسموح لهذه الصفحة → إلى لوحته الصحيحة
    window.location.replace(homeForRole(profile.role)); return null;
  }
  if(profile.role === 'provider'){ // مزوّد الخدمة موقوف حالياً (الأدمن = إتقان)
    await supabase.auth.signOut(); window.location.replace('/auth/login.html?e=disabled'); return null;
  }
  if(profile.role === 'admin' && !(await adminMfaOk())){
    window.location.replace('/auth/mfa.html?next=' + next); return null;
  }
  if(profile.role === 'client'){
    const passed = await enforceCountryGate(profile);
    if(!passed) return null;
  }
  // الأدمن: خروج تلقائي دائماً. العميل: خروج عند الخمول فقط إن لم يفعّل "تذكّرني".
  if(profile.role === 'admin' || !__rememberOn()) startIdleTimer(profile.role);
  return profile;
}

// بوابة إجبارية بعد الدخول: الدولة ثم (إن كانت السعودية) نوع التأسيس. غير نهائية — يمكن تغييرها لاحقاً من "بياناتي".
window.__clientMeta = null;
async function enforceCountryGate(profile){
  const { data: clientRow } = await supabase.from('clients').select('country, incorporation_path').eq('id', profile.id).maybeSingle();
  window.__clientMeta = clientRow || {};
  const path = location.pathname;
  const exempt = COUNTRY_GATE_EXEMPT.some(p => path.endsWith(p));
  if(exempt){ adaptSidebarForPath(window.__clientMeta.incorporation_path); return true; }
  if(!window.__clientMeta.country){ window.location.replace('/client/country-select.html'); return false; }
  if(window.__clientMeta.country === 'SA' && !window.__clientMeta.incorporation_path){ window.location.replace('/client/path-select.html'); return false; }
  if(window.__clientMeta.country !== 'SA'){ window.location.replace('/client/coming-soon.html'); return false; }
  adaptSidebarForPath(window.__clientMeta.incorporation_path);
  return true;
}

// يبدّل رابط "بوصلة الجاهزية" بالقائمة الجانبية إلى صفحة تقييم الوضع السعودي عند الحاجة، دون لمس كل صفحة يدوياً
function adaptSidebarForPath(path){
  if(path !== 'saudi_national') return;
  document.querySelectorAll('a.side-link[href="assessment.html"], a.side-link[href="../assessment.html"]').forEach(a => {
    a.setAttribute('href', a.getAttribute('href').replace('assessment.html', 'status-assessment.html'));
    const icon = a.querySelector('.ic');
    a.innerHTML = '';
    if(icon) a.appendChild(icon);
    a.appendChild(document.createTextNode(' تقييم الوضع'));
  });
}

function homeForRole(role){
  if(role === 'admin') return '/admin/dashboard.html';
  return '/client/dashboard.html';
}

async function signOut(){
  try{ await supabase.auth.signOut(); }catch(e){}
  try{ sessionStorage.clear(); }catch(e){}
  window.location.replace('/auth/login.html');
}

// ---------- الخروج التلقائي عند الخمول ----------
let __idleTimer = null;
function startIdleTimer(role){
  const ms = (IDLE_MINUTES[role] || 30) * 60 * 1000;
  const reset = () => { clearTimeout(__idleTimer); __idleTimer = setTimeout(async () => { await signOut(); }, ms); };
  ['click','keydown','mousemove','touchstart','scroll'].forEach(ev => window.addEventListener(ev, reset, { passive: true }));
  reset();
}

// ============================================================
// الإشعارات — الإنشاء عبر دوال خادم فقط (لا إدراج مباشر من المتصفح)
// ============================================================
async function createNotification(recipientId, title, body, link){
  const me = window.__me || await getCurrentProfile();
  if(!me) return;
  if(me.role === 'admin' && recipientId){
    await supabase.rpc('notify_user', { p_recipient: recipientId, p_title: title, p_body: body || null, p_link: link || null });
  } else {
    await supabase.rpc('notify_admins', { p_title: title, p_body: body || null, p_link: link || null });
  }
}
async function notifyAdmins(title, body, link){
  await supabase.rpc('notify_admins', { p_title: title, p_body: body || null, p_link: link || null });
}

async function initNotificationBell(profileId){
  const container = document.getElementById('notifBellContainer');
  if(container){
    container.innerHTML = `
    <div style="position:relative;">
      <button id="notifBellBtn" aria-label="الإشعارات" style="background:none;border:none;cursor:pointer;font-size:19px;position:relative;padding:6px;" onclick="toggleNotifPanel()">
        🔔<span id="notifBadge" style="display:none;position:absolute;top:0;left:0;background:var(--danger);color:#fff;font-size:10px;font-weight:700;border-radius:999px;padding:1px 5px;line-height:1.4;"></span>
      </button>
      <div id="notifPanel" style="display:none;position:absolute;left:0;top:38px;width:300px;max-height:360px;overflow-y:auto;background:var(--white);border:1px solid var(--line);border-radius:12px;box-shadow:var(--shadow);z-index:200;">
        <div id="notifList" style="padding:8px;"></div>
      </div>
    </div>`;
  }
  await refreshNotifBadge(profileId);
  subscribeNotifications(profileId);
}

// ---------- الإشعارات الفورية (Supabase Realtime) ----------
// تصل الإشعارات الجديدة لحظياً بدون تحديث الصفحة. يتطلب تفعيل Realtime على جدول notifications.
// احتياطاً: فحص دوري كل دقيقة لو كان Realtime غير مفعّل أو انقطع الاتصال.
let __notifChannel = null, __notifPoll = null, __lastNotifCount = null;
function subscribeNotifications(profileId){
  if(__notifChannel) return;
  try{
    __notifChannel = supabase.channel('notif-' + profileId)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notifications', filter: 'recipient_id=eq.' + profileId },
        (payload) => onNewNotification(profileId, payload.new))
      .subscribe();
  }catch(e){ __notifChannel = null; }
  clearInterval(__notifPoll);
  __notifPoll = setInterval(() => { if(document.visibilityState === 'visible') refreshNotifBadge(profileId, true); }, 60000);
  document.addEventListener('visibilitychange', () => { if(document.visibilityState === 'visible') refreshNotifBadge(profileId, true); });
}

async function onNewNotification(profileId, n){
  __lastNotifCount = null;
  await refreshNotifBadge(profileId);
  const panel = document.getElementById('notifPanel');
  if(panel && panel.style.display !== 'none') loadNotifList();
  if(n) showNotifToast(n);
}

function showNotifToast(n){
  let wrap = document.getElementById('notifToastWrap');
  if(!wrap){
    wrap = document.createElement('div');
    wrap.id = 'notifToastWrap';
    wrap.className = 'notif-toast-wrap';
    document.body.appendChild(wrap);
  }
  const el = document.createElement('div');
  el.className = 'notif-toast';
  el.setAttribute('role', 'status');
  el.innerHTML = `<p class="notif-toast-title">🔔 ${esc(n.title)}</p>${n.body ? `<p class="notif-toast-body">${esc(n.body)}</p>` : ''}`;
  el.addEventListener('click', () => { el.remove(); handleNotifClick(n.id, n.link); });
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 7000);
}

async function refreshNotifBadge(profileId, fromPoll){
  const { data } = await supabase.from('notifications').select('id').eq('recipient_id', profileId).eq('is_read', false);
  const badge = document.getElementById('notifBadge');
  if(!badge) return;
  const count = data ? data.length : 0;
  // الفحص الدوري: لو زاد العدد (Realtime غير مفعّل) نحدّث القائمة المفتوحة
  if(fromPoll && __lastNotifCount !== null && count > __lastNotifCount){
    const panel = document.getElementById('notifPanel');
    if(panel && panel.style.display !== 'none') loadNotifList();
  }
  __lastNotifCount = count;
  if(count > 0){ badge.style.display = 'block'; badge.textContent = count > 9 ? '9+' : String(count); }
  else { badge.style.display = 'none'; }
}

async function toggleNotifPanel(){
  const panel = document.getElementById('notifPanel');
  const isHidden = panel.style.display === 'none';
  panel.style.display = isHidden ? 'block' : 'none';
  if(isHidden) await loadNotifList();
}

async function loadNotifList(){
  const profile = window.__me || await getCurrentProfile();
  if(!profile) return;
  const { data } = await supabase.from('notifications').select('*').eq('recipient_id', profile.id).order('created_at', {ascending:false}).limit(20);
  const list = document.getElementById('notifList');
  if(!data || !data.length){ list.innerHTML = '<p style="font-size:12.5px;color:var(--ink-soft);padding:12px;text-align:center;">لا توجد إشعارات.</p>'; return; }
  list.innerHTML = data.map(n => `
    <div class="notif-item" data-id="${esc(n.id)}" data-link="${esc(n.link || '')}" style="padding:10px 12px;border-radius:8px;cursor:pointer;background:${n.is_read ? 'transparent' : 'var(--green-tint)'};margin-bottom:4px;">
      <p style="font-size:12.5px;font-weight:700;color:var(--ink);margin-bottom:2px;">${esc(n.title)}</p>
      ${n.body ? `<p style="font-size:11.5px;color:var(--ink-soft);">${esc(n.body)}</p>` : ''}
      <p style="font-size:10.5px;color:var(--ink-faint);margin-top:4px;">${esc(new Date(n.created_at).toLocaleString('ar-SA'))}</p>
    </div>`).join('');
  list.querySelectorAll('.notif-item').forEach(el => el.addEventListener('click', () => handleNotifClick(el.dataset.id, el.dataset.link)));
}

async function handleNotifClick(id, link){
  await supabase.from('notifications').update({ is_read: true }).eq('id', id);
  const profile = window.__me || await getCurrentProfile();
  if(profile) await refreshNotifBadge(profile.id);
  const clean = safeInternalPath(link || '');
  if(clean){ window.location.href = '/' + clean.replace(/^(\.\.\/|\.\/|\/)+/, ''); }
}

// تفعيل PWA
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(()=>{});
}

const SUPABASE_URL = "https://fpjaupjwikaaxehcqprk.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_b_EiVWdAwTJDk-IGufOEBw_AzUMObDT";

// تخزين مخصّص: يحترم اختيار العميل بـ"تذكرني" — لو ما فعّلها، الجلسة تنتهي بإغلاق المتصفح (sessionStorage)
const itqanAuthStorage = {
  getItem: (key) => {
    const remember = localStorage.getItem('itqan_remember_me') !== 'false';
    return remember ? window.localStorage.getItem(key) : window.sessionStorage.getItem(key);
  },
  setItem: (key, value) => {
    const remember = localStorage.getItem('itqan_remember_me') !== 'false';
    if (remember) window.localStorage.setItem(key, value);
    else window.sessionStorage.setItem(key, value);
  },
  removeItem: (key) => {
    window.localStorage.removeItem(key);
    window.sessionStorage.removeItem(key);
  }
};

window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { storage: itqanAuthStorage, persistSession: true, autoRefreshToken: true }
});

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  const showing = input.type === 'text';
  input.type = showing ? 'password' : 'text';
  btn.textContent = showing ? '👁️' : '🙈';
}

// تنقية أي نص حر (كتبه مستخدم) قبل عرضه بالصفحة — يمنع حقن أكواد (XSS)
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function getCurrentProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).single();
  if (error) { console.error(error); return null; }
  return data;
}

async function requireRole(allowedRoles) {
  const profile = await getCurrentProfile();
  if (!profile || !allowedRoles.includes(profile.role)) {
    window.location.href = '/auth/login.html';
    return null;
  }
  return profile;
}

async function signOut() {
  await supabase.auth.signOut();
  window.location.href = '/auth/login.html';
}

// ============================================================
// نظام الإشعارات الداخلي
// ============================================================
async function createNotification(recipientId, title, body, link){
  if(!recipientId) return;
  await supabase.from('notifications').insert({ recipient_id: recipientId, title, body, link });
}

async function notifyAdmins(title, body, link){
  const { data: admins } = await supabase.from('profiles').select('id').eq('role', 'admin');
  if(!admins || !admins.length) return;
  const rows = admins.map(a => ({ recipient_id: a.id, title, body, link }));
  await supabase.from('notifications').insert(rows);
}

async function initNotificationBell(profileId, linkPrefix){
  const bellHtml = `
    <div style="position:relative;">
      <button id="notifBellBtn" style="background:none;border:none;cursor:pointer;font-size:19px;position:relative;padding:6px;" onclick="toggleNotifPanel()">
        🔔<span id="notifBadge" style="display:none;position:absolute;top:0;left:0;background:var(--danger);color:#fff;font-size:10px;font-weight:700;border-radius:999px;padding:1px 5px;line-height:1.4;"></span>
      </button>
      <div id="notifPanel" style="display:none;position:absolute;left:0;top:38px;width:300px;max-height:360px;overflow-y:auto;background:var(--white);border:1px solid var(--line);border-radius:12px;box-shadow:var(--shadow);z-index:200;">
        <div id="notifList" style="padding:8px;"></div>
      </div>
    </div>`;
  const container = document.getElementById('notifBellContainer');
  if(container) container.innerHTML = bellHtml;
  await refreshNotifBadge(profileId);
}

async function refreshNotifBadge(profileId){
  const { data } = await supabase.from('notifications').select('id').eq('recipient_id', profileId).eq('is_read', false);
  const badge = document.getElementById('notifBadge');
  if(!badge) return;
  const count = data ? data.length : 0;
  if(count > 0){ badge.style.display = 'block'; badge.textContent = count > 9 ? '9+' : count; }
  else { badge.style.display = 'none'; }
}

async function toggleNotifPanel(){
  const panel = document.getElementById('notifPanel');
  const isHidden = panel.style.display === 'none';
  panel.style.display = isHidden ? 'block' : 'none';
  if(isHidden) await loadNotifList();
}

async function loadNotifList(){
  const profile = await getCurrentProfile();
  if(!profile) return;
  const { data } = await supabase.from('notifications').select('*').eq('recipient_id', profile.id).order('created_at', {ascending:false}).limit(20);
  const list = document.getElementById('notifList');
  if(!data || !data.length){ list.innerHTML = '<p style="font-size:12.5px;color:var(--ink-soft);padding:12px;text-align:center;">لا توجد إشعارات.</p>'; return; }

  list.innerHTML = data.map(n => `
    <div onclick="handleNotifClick('${n.id}','${n.link || ''}')" style="padding:10px 12px;border-radius:8px;cursor:pointer;background:${n.is_read ? 'transparent' : 'var(--green-tint)'};margin-bottom:4px;">
      <p style="font-size:12.5px;font-weight:700;color:var(--ink);margin-bottom:2px;">${n.title}</p>
      ${n.body ? `<p style="font-size:11.5px;color:var(--ink-soft);">${n.body}</p>` : ''}
      <p style="font-size:10.5px;color:var(--ink-faint);margin-top:4px;">${new Date(n.created_at).toLocaleString('ar-SA')}</p>
    </div>
  `).join('');
}

async function handleNotifClick(id, link){
  await supabase.from('notifications').update({ is_read: true }).eq('id', id);
  const profile = await getCurrentProfile();
  if(profile) await refreshNotifBadge(profile.id);
  if(link) window.location.href = link;
}

// تفعيل PWA — يخلي المنصة قابلة للإضافة كتطبيق على الشاشة الرئيسية
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(()=>{});
}

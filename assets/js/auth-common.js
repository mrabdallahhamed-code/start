// أدوات مشتركة لصفحات الدخول والتسجيل
(function(){
  const L = (ar, en) => (typeof getLang === 'function' && getLang() === 'en') ? en : ar;
  window.L = L;

  // ---- CAPTCHA (Cloudflare Turnstile) اختياري ----
  window.__captchaToken = null;
  window.initCaptcha = function(containerId){
    const key = window.APP_CONFIG && window.APP_CONFIG.turnstileSiteKey;
    if(!key) return;
    const s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'; s.async = true; s.defer = true;
    s.onload = () => window.turnstile.render('#' + containerId, { sitekey: key, callback: t => { window.__captchaToken = t; } });
    document.head.appendChild(s);
  };
  window.captchaRequired = () => !!(window.APP_CONFIG && window.APP_CONFIG.turnstileSiteKey);

  // ---- قفل المحاولات الفاشلة (رادع واجهة؛ الحماية الحقيقية في Supabase Auth) ----
  const KEY = 'mub_login_attempts';
  window.lockState = function(){
    try{
      const st = JSON.parse(localStorage.getItem(KEY) || '{"n":0,"until":0}');
      const now = Date.now();
      if(st.until && now < st.until) return { locked: true, seconds: Math.ceil((st.until - now)/1000) };
      return { locked: false };
    }catch(e){ return { locked: false }; }
  };
  window.registerFailure = function(){
    let st = { n: 0, until: 0 };
    try{ st = JSON.parse(localStorage.getItem(KEY) || '{"n":0,"until":0}'); }catch(e){}
    st.n = (st.n || 0) + 1;
    if(st.n >= 5){ st.until = Date.now() + Math.min(15*60*1000, 30*1000 * Math.pow(2, st.n - 5)); }
    try{ localStorage.setItem(KEY, JSON.stringify(st)); }catch(e){}
  };
  window.clearFailures = function(){ try{ localStorage.removeItem(KEY); }catch(e){} };

  // ---- سياسة كلمة المرور ----
  window.passwordProblems = function(p){
    const out = [];
    if(p.length < 10) out.push(L('10 أحرف على الأقل','At least 10 characters'));
    if(!/[a-z]/.test(p) || !/[A-Z]/.test(p)) out.push(L('حرف كبير وحرف صغير (إنجليزي)','Upper- and lower-case letters'));
    if(!/[0-9]/.test(p)) out.push(L('رقم واحد على الأقل','At least one digit'));
    if(!/[^A-Za-z0-9]/.test(p)) out.push(L('رمز خاص واحد على الأقل (!@#…)','At least one symbol (!@#…)'));
    if(/^(.)\1+$/.test(p) || /(password|123456|qwerty|itqan|mubtada)/i.test(p)) out.push(L('كلمة مرور شائعة أو سهلة التخمين','Common or easy-to-guess password'));
    return out;
  };

  window.showMsg = function(id, kind, text){
    const el = document.getElementById(id); if(!el) return;
    el.className = 'msg ' + kind; el.textContent = text;   // textContent فقط: لا HTML
  };

  // ---- إظهار/إخفاء كلمة المرور لكل حقول كلمة المرور في الصفحة ----
  window.attachPasswordToggles = function(){
    document.querySelectorAll('input[type="password"]').forEach(inp => {
      if(inp.dataset.toggled) return; inp.dataset.toggled = '1';
      const wrap = document.createElement('div'); wrap.style.cssText = 'position:relative;';
      inp.parentNode.insertBefore(wrap, inp); wrap.appendChild(inp);
      inp.style.paddingInlineEnd = '74px';
      const btn = document.createElement('button'); btn.type = 'button';
      btn.style.cssText = 'position:absolute;inset-inline-end:8px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-family:inherit;font-size:12px;font-weight:700;color:var(--green-dark);padding:6px 8px;';
      const set = (show) => { inp.type = show ? 'text' : 'password'; btn.textContent = show ? L('إخفاء','Hide') : L('إظهار','Show'); btn.setAttribute('aria-pressed', show ? 'true' : 'false'); btn.setAttribute('aria-label', show ? L('إخفاء كلمة المرور','Hide password') : L('إظهار كلمة المرور','Show password')); };
      set(false);
      btn.addEventListener('click', () => set(inp.type === 'password'));
      wrap.appendChild(btn);
    });
  };
  document.addEventListener('DOMContentLoaded', window.attachPasswordToggles);
})();

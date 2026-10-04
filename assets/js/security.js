// ============================================================
// مكتبة الأمان المشتركة — مبتدأ من إتقان
// تُحمَّل قبل أي سكربت آخر في كل صفحة.
//   esc(v)            : تعقيم أي قيمة قبل إدراجها في HTML (نص أو قيمة خاصية)
//   safeInternalPath  : يقبل مساراً داخلياً فقط (يمنع javascript: والروابط الخارجية)
//   safeFileName      : اسم ملف آمن للتخزين
//   validateUpload    : فحص نوع وحجم الملف قبل الرفع
//   openSignedUrl     : فتح رابط موقّع بأمان (noopener)
// ============================================================
(function(){
  const MAP = { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;', '`':'&#96;' };
  window.esc = function esc(v){
    if(v === null || v === undefined) return '';
    return String(v).replace(/[&<>"'`]/g, c => MAP[c]);
  };

  // مسار داخلي نسبي أو مطلق داخل نفس الموقع فقط
  window.safeInternalPath = function(link){
    if(typeof link !== 'string') return '';
    const l = link.trim();
    if(!l) return '';
    if(/^[a-z][a-z0-9+.-]*:/i.test(l) || l.startsWith('//') || l.includes('\\')) return '';
    if(!/^[A-Za-z0-9_\-./?=&%#]+$/.test(l)) return '';
    return l;
  };

  window.safeFileName = function(name){
    const base = String(name || 'file').split(/[\\/]/).pop();
    const cleaned = base.replace(/[^A-Za-z0-9._-]/g, '_').replace(/_{2,}/g, '_').slice(-80);
    return cleaned || 'file';
  };

  const ALLOWED = {
    'application/pdf': ['pdf'], 'image/jpeg': ['jpg','jpeg'], 'image/png': ['png'],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['docx'],
    'application/msword': ['doc']
  };
  window.UPLOAD_MAX_BYTES = 10 * 1024 * 1024; // 10MB
  window.validateUpload = function(file, opts){
    opts = opts || {};
    const max = opts.maxBytes || window.UPLOAD_MAX_BYTES;
    if(!file) return { ok:false, reason:'لم يتم اختيار ملف' };
    if(file.size > max) return { ok:false, reason:'حجم الملف أكبر من المسموح (' + Math.round(max/1024/1024) + ' ميجا)' };
    const ext = (file.name.split('.').pop() || '').toLowerCase();
    const allowedTypes = opts.types || Object.keys(ALLOWED);
    const okType = allowedTypes.includes(file.type) && (ALLOWED[file.type] || []).includes(ext);
    if(!okType) return { ok:false, reason:'نوع الملف غير مسموح. المسموح: PDF أو صورة (JPG/PNG) أو Word' };
    return { ok:true };
  };

  window.openSignedUrl = function(url){
    if(typeof url !== 'string' || !/^https:\/\//i.test(url)) return;
    const w = window.open(url, '_blank', 'noopener,noreferrer');
    if(w) w.opener = null;
  };

  // تعطيل الإطارات الخارجية (حماية من clickjacking عند غياب رؤوس الخادم)
  if(window.top !== window.self){ try{ window.top.location = window.self.location; }catch(e){ document.documentElement.style.display='none'; } }
})();

// ============================================================
// قياس الزيارات — Cloudflare Web Analytics (مجاني، بدون cookies، لا يحتاج إشعار موافقة)
// التفعيل: Cloudflare → Analytics & Logs → Web Analytics → Add a site → انسخ الـ token وضعه هنا.
// يقيس: عدد الزوار، الصفحات الأكثر زيارة، مصدر الزيارة، الدولة، الجهاز، وسرعة التحميل.
// ============================================================
(function(){
  const CF_TOKEN = ''; // ← ضع الـ token هنا
  if(!CF_TOKEN) return;
  const s = document.createElement('script');
  s.defer = true;
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  s.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_TOKEN }));
  document.head.appendChild(s);
})();

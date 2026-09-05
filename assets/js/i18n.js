// ============================================================
// نظام الترجمة المشترك — إتقان لخدمات الأعمال
// يدعم حالياً: العربية (ar) والإنجليزية (en)
// مصمم ليتوسع لاحقاً للصينية والهندية/الأردية بإضافة قواميس جديدة فقط
// ============================================================

const I18N = {
  ar: {
    // ---------- شريط التنقل ----------
    nav_about: 'عن الشركة', nav_services: 'خدماتنا', nav_paths: 'ابدأ الآن', nav_contact: 'تواصل معنا',
    nav_learn_more: 'تعرّف على إتقان',
    nav_login: 'تسجيل الدخول', nav_register: 'إنشاء حساب',

    // ---------- Hero ----------
    hero_title: 'منصة إتقان لإدارة رحلة تأسيس شركتك في المملكة العربية السعودية',
    hero_p: 'من تقييم جاهزيتك، إلى طلب عروض الأسعار، إلى التوقيع الإلكتروني على عقدك، ومتابعة كل خطوة أولاً بأول — منصة رقمية واحدة تدير رحلة تأسيس شركتك واستثمارك في المملكة العربية السعودية من البداية حتى النهاية.',
    hero_btn_start: 'ابدأ بتقييم جاهزيتك', hero_btn_services: 'اكتشف ما تقدمه المنصة',
    stat_investors: 'مستثمر أجنبي', stat_ownership: 'ملكية أجنبية كاملة', stat_countries: 'دولة حول العالم', stat_days: 'يوماً للتأسيس',

    // ---------- ماذا تقدم المنصة ----------
    pf_eyebrow: 'داخل المنصة', pf_title: 'ماذا تقدّم لك المنصة بعد التسجيل؟',
    pf1_title: 'بوصلة الجاهزية', pf1_p: 'الخطوة الأولى الإلزامية في المنصة — تقييم سريع لا يتجاوز دقيقتين يحدد مسارك الأنسب بدقة: سواء كانت لديك شركة أجنبية جاهزة، أو تحتاج إلى مساعدتنا في توفير واحدة.',
    pf2_title: 'طلب العروض', pf2_p: 'بعد إتمام التقييم، يمكنك طلب عرض سعر مخصص لتأسيس شركتك بضغطة زر واحدة — دون الحاجة إلى أي اتصالات أو مواعيد.',
    pf3_title: 'التوقيع والعقود', pf3_p: 'وقّع على العرض والعقد إلكترونياً بخط يدك مباشرة عبر المنصة — دون طباعة أو مواعيد حضور.',
    pf4_title: 'متابعة لحظية', pf4_p: 'تابع كل مرحلة من مراحل تأسيس شركتك لحظة بلحظة من خلال لوحة التحكم الخاصة بك، دون الحاجة إلى الاستفسار عن حالة طلبك.',

    // ---------- شريط الرحلة ----------
    journey_eyebrow: 'رحلتك معنا', journey_title: 'من التقييم إلى التنفيذ',
    j1: 'تقييم الجاهزية', j2: 'تحديد المسار', j3: 'طلب العروض', j4: 'التوقيع الإلكتروني', j5: 'متابعة التنفيذ',

    // ---------- شريط الثقة ----------
    trust1: 'توقيع إلكتروني معتمد', trust2: 'حفظ آمن للمستندات', trust3: 'سرية تامة لبياناتك', trust4: 'تتبع لحظي لكل طلب',

    // ---------- عن إتقان ----------
    about_eyebrow: 'عن إتقان', about_title: 'شريكك الموثوق في رحلة التأسيس',
    about_p: 'من تقييم جاهزيتك إلى التوقيع الإلكتروني على عقدك، نرافقك عبر منصة رقمية واحدة تجمع بين السرعة والشفافية، مع متابعة لحظية لملفك حتى إتمام عقد تأسيس شركتك.',

    // ---------- فرصة استثمارية ----------
    invest_eyebrow: 'فرصة استثمارية', invest_title: 'استثمر بذكاء، استثمر الآن',
    invest_p: 'ملكية كاملة، إجراءات مبسّطة، وفرص نمو حقيقية في مختلف القطاعات — تختصر إتقان الطريق من الفكرة إلى عقد التأسيس، عبر منصة واحدة تدير رحلتك بالكامل.',

    // ---------- خدماتنا ----------
    services_eyebrow: 'خدماتنا', services_title: 'اضغط على أي خدمة للاطلاع على التفاصيل',
    svc1_title: 'رخصة الاستثمار الأجنبي (MISA)',
    svc1_p: 'نستحصل نيابة عنك على رخصة الاستثمار من وزارة الاستثمار السعودية بأسرع وقت وأقل تعقيد ممكن.',
    svc1_li1: 'تقييم أهلية المستثمر والقطاع', svc1_li2: 'إعداد وتقديم الملف كاملاً',
    svc1_li3: 'تواصل مباشر مع الجهات الرسمية', svc1_li4: 'متابعة حتى صدور الرخصة',
    svc2_title: 'تأسيس شركة سعودية',
    svc2_p: 'كيان قانوني سعودي بملكية أجنبية كاملة (100%)، دون الحاجة إلى شريك محلي، من التسجيل وحتى فتح الحساب البنكي.',
    svc2_li1: 'تسجيل في وزارة التجارة', svc2_li2: 'استخراج السجل التجاري وعقد التأسيس',
    svc2_li3: 'فتح الملفات الحكومية', svc2_li4: 'فتح الحساب البنكي',
    svc3_title: 'الاستحواذ على شركات خارجية',
    svc3_p: 'يساعدك فريقنا في 14 دولة حول العالم على الاستحواذ على شركة متوافقة مع اشتراطات الترخيص.',
    svc3_li1: 'الاستحواذ على شركة ملائمة لشروط الترخيص', svc3_li2: 'إنهاء إجراءات نقل الملكية',
    svc3_li3: 'تصديق المستندات الجديدة', svc3_li4: 'شحن الأوراق إلى المملكة',
    svc4_title: 'خدمات الدعم',
    svc4_p: 'نرافقك في إدارة أعمالك بعد التأسيس عبر أربعة محاور رئيسية:',
    svc4_li1: '<strong>الموارد البشرية:</strong> التوظيف، إدارة العقود، وإدارة المنصات الحكومية وفق الأنظمة السعودية',
    svc4_li2: '<strong>الحسابات العامة:</strong> إدارة الحسابات، إعداد الميزانيات، وتقديم الإقرارات الضريبية والزكوية وفق الأنظمة السعودية',
    svc4_li3: '<strong>التسويق الرقمي:</strong> إدارة حسابات التواصل الاجتماعي، تحسين محركات البحث، وحملات إعلانية تناسب السوق المحلي',
    svc4_li4: '<strong>الإدارة والتشغيل والحوكمة:</strong> بناء الهيكل التنظيمي، السياسات الداخلية، ولوائح الحوكمة المتوافقة مع الأنظمة السعودية',

    // ---------- استثمر باقتصاد يتوسع بثقة ----------
    kingdom_title: 'استثمر في اقتصاد يتوسع بثقة',
    kingdom_p: 'ضمن رؤية المملكة 2030، أصبح بإمكان المستثمر الأجنبي تأسيس شركته بنسبة تملك 100% في عدد واسع من القطاعات، وسط اقتصاد يتجاوز ناتجه المحلي 1.1 تريليون دولار وبيئة أعمال تتطور بخطى متسارعة.',

    // ---------- ابدأ الآن (عميل) ----------
    paths_eyebrow: 'ابدأ الآن', paths_title: 'هل أنت مستثمر يبحث عن التأسيس؟',
    client_existing_title: 'عميل حالي', client_existing_p: 'لديك حساب مسبق؟', client_existing_btn: 'تسجيل الدخول',
    client_new_title: 'عميل جديد', client_new_p: 'ابدأ بتقييم جاهزيتك المجاني (دقيقتان فقط)', client_new_btn: 'إنشاء حساب',

    // ---------- كن شريكاً لنا ----------
    partner_eyebrow: 'كن شريكاً لنا', partner_title: 'هل أنت مقدّم خدمة تأسيس شركات؟',
    provider_existing_title: 'مقدّم خدمة حالي', provider_existing_p: 'سجّل دخولك للاطلاع على الطلبات', provider_existing_btn: 'تسجيل الدخول',
    provider_new_title: 'مقدّم خدمة جديد', provider_new_p: 'انضم كشريك معتمد لدى إتقان', provider_new_btn: 'انضمام كشريك',

    // ---------- تواصل معنا ----------
    contact_eyebrow: 'تواصل معنا', contact_title: 'فريقنا جاهز للإجابة على استفساراتك',
    contact_whatsapp: 'واتساب', contact_location: 'الرياض، المملكة العربية السعودية',

    footer_text: '© إتقان لخدمات الأعمال — Itqan Business Services',

    // ---------- تسجيل الدخول / إنشاء حساب ----------
    login_title: 'تسجيل الدخول', login_email: 'البريد الإلكتروني', login_password: 'كلمة المرور',
    login_btn: 'دخول', login_no_account: 'ليس لديك حساب؟', login_register_link: 'إنشاء حساب جديد',
    register_title: 'إنشاء حساب', register_role: 'نوع الحساب', register_role_client: 'عميل (مستثمر)', register_role_provider: 'مقدّم خدمة',
    register_fullname: 'الاسم الكامل', register_email: 'البريد الإلكتروني', register_phone: 'رقم الجوال (مع رمز الدولة)',
    register_preferred_contact: 'الوسيلة المفضلة للتواصل', register_contact_email: 'البريد الإلكتروني', register_contact_whatsapp: 'واتساب',
    register_password: 'كلمة المرور', register_btn: 'إنشاء الحساب', register_have_account: 'لديك حساب بالفعل؟', register_login_link: 'تسجيل الدخول',
  },

  en: {

    nav_about: 'About', nav_services: 'Services', nav_paths: 'Get Started', nav_contact: 'Contact',
    nav_learn_more: 'Discover Itqan',
    nav_login: 'Log In', nav_register: 'Sign Up',

    hero_title: 'The Itqan Platform: Your Company Incorporation Journey in Saudi Arabia, Simplified',
    hero_p: 'From a readiness assessment to requesting quotes, e-signing your contract, and tracking every milestone in real time — one platform to manage your entire incorporation and investment journey in Saudi Arabia, start to finish.',
    hero_btn_start: 'Start Your Free Assessment', hero_btn_services: 'Explore the Platform',
    stat_investors: 'Foreign investors', stat_ownership: 'Full foreign ownership', stat_countries: 'Countries worldwide', stat_days: 'Days to incorporate',

    pf_eyebrow: 'Inside the Platform', pf_title: 'Everything You Need, One Sign-Up Away',
    pf1_title: 'Readiness Compass', pf1_p: 'Your journey starts here — a 2-minute assessment that instantly maps your fastest path forward, whether you already own a foreign company or need help sourcing one.',
    pf2_title: 'Request Offers', pf2_p: 'Get a tailored incorporation quote in a single click. No cold calls, no back-and-forth, no waiting rooms.',
    pf3_title: 'Sign & Seal It', pf3_p: 'Sign your offer and contract electronically, right from your dashboard — no printers, no in-person visits, no delays.',
    pf4_title: 'Live Progress Tracking', pf4_p: "Watch your incorporation move forward in real time from your dashboard. You'll always know exactly where things stand.",

    journey_eyebrow: 'Your Journey With Us', journey_title: 'From First Click to Fully Incorporated',
    j1: 'Readiness Assessment', j2: 'Path Determined', j3: 'Request Offers', j4: 'Electronic Signature', j5: 'Execution Tracking',

    trust1: 'Certified E-Signature', trust2: 'Bank-Grade Document Security', trust3: 'Complete Data Confidentiality', trust4: 'Real-Time Request Tracking',

    about_eyebrow: 'About Itqan', about_title: 'Your Trusted Partner, From First Step to Incorporation',
    about_p: 'From your readiness assessment to the final e-signature, Itqan brings you one platform built on speed and transparency — with real-time visibility into your file until your company is officially incorporated.',

    invest_eyebrow: 'Investment Opportunity', invest_title: 'Invest Smart. Invest Now.',
    invest_p: 'Full ownership, streamlined procedures, and real growth opportunities across every sector — Itqan closes the gap between your idea and your incorporation contract, managing your entire journey on a single platform.',

    services_eyebrow: 'Our Services', services_title: 'Click Any Service to Learn More',
    svc1_title: 'Foreign Investment License (MISA)',
    svc1_p: "We secure your investment license from Saudi Arabia's Ministry of Investment on your behalf — fast, and hassle-free.",
    svc1_li1: 'Investor and sector eligibility review', svc1_li2: 'Complete file preparation and submission',
    svc1_li3: 'Direct liaison with government entities', svc1_li4: 'Follow-through until your license is issued',
    svc2_title: 'Saudi Company Incorporation',
    svc2_p: 'A fully licensed Saudi entity with 100% foreign ownership — no local partner required — from registration all the way to your bank account.',
    svc2_li1: 'Ministry of Commerce registration', svc2_li2: 'Commercial registration and Articles of Association',
    svc2_li3: 'Government file setup', svc2_li4: 'Bank account opening',
    svc3_title: 'Acquiring an Existing Foreign Company',
    svc3_p: "No foreign entity yet? Our team, active across 14 countries, sources and secures one that meets every licensing requirement.",
    svc3_li1: 'Sourcing a company that meets licensing conditions', svc3_li2: 'Handling the full ownership transfer',
    svc3_li3: 'Certifying all new documentation', svc3_li4: 'Shipping documents to the Kingdom',
    svc4_title: 'Ongoing Support Services',
    svc4_p: 'Beyond incorporation, we keep your business running smoothly across four key pillars:',
    svc4_li1: '<strong>Human Resources:</strong> End-to-end recruitment, contract management, and seamless compliance across Saudi government platforms',
    svc4_li2: '<strong>Accounting:</strong> Full-cycle bookkeeping, smart budgeting, and precise tax and Zakat filings — fully compliant with Saudi regulations',
    svc4_li3: '<strong>Digital Marketing:</strong> Social media management, SEO, and ad campaigns tailored to the local market',
    svc4_li4: '<strong>Management, Operations & Governance:</strong> Organizational design, internal policy frameworks, and governance aligned with Saudi regulations',

    kingdom_title: 'Invest in an Economy Growing with Confidence',
    kingdom_p: "Under Saudi Vision 2030, foreign investors can now build companies with 100% ownership across a wide range of sectors — inside an economy topping $1.1 trillion in GDP, and a business environment evolving faster than ever.",

    paths_eyebrow: 'Get Started', paths_title: 'Ready to Invest and Incorporate?',
    client_existing_title: 'Existing Client', client_existing_p: 'Already have an account?', client_existing_btn: 'Log In',
    client_new_title: 'New Client', client_new_p: 'Start your free readiness assessment — just 2 minutes', client_new_btn: 'Sign Up',

    partner_eyebrow: 'Become Our Partner', partner_title: 'Are You an Incorporation Service Provider?',
    provider_existing_title: 'Existing Provider', provider_existing_p: 'Log in to view available requests', provider_existing_btn: 'Log In',
    provider_new_title: 'New Provider', provider_new_p: 'Join Itqan as an approved partner', provider_new_btn: 'Join as Partner',

    contact_eyebrow: 'Contact Us', contact_title: "Our Team Is Ready to Help",
    contact_whatsapp: 'WhatsApp', contact_location: 'Riyadh, Saudi Arabia',

    footer_text: '© Itqan Business Services — إتقان لخدمات الأعمال',

    login_title: 'Log In', login_email: 'Email', login_password: 'Password',
    login_btn: 'Log In', login_no_account: "Don't have an account?", login_register_link: 'Create a new account',
    register_title: 'Sign Up', register_role: 'Account Type', register_role_client: 'Client (Investor)', register_role_provider: 'Service Provider',
    register_fullname: 'Full Name', register_email: 'Email', register_phone: 'Phone Number (with country code)',
    register_preferred_contact: 'Preferred Contact Method', register_contact_email: 'Email', register_contact_whatsapp: 'WhatsApp',
    register_password: 'Password', register_btn: 'Create Account', register_have_account: 'Already have an account?', register_login_link: 'Log In',
  }
};


function getLang(){
  return localStorage.getItem('itqan_lang') || 'ar';
}

function setLang(lang){
  localStorage.setItem('itqan_lang', lang);
  applyI18n();
}

function toggleLang(){
  setLang(getLang() === 'ar' ? 'en' : 'ar');
}

function t(key){
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.ar[key] || key;
}

function applyI18n(){
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if(val) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t(el.getAttribute('data-i18n-html'));
    if(val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t(el.getAttribute('data-i18n-placeholder'));
    if(val) el.placeholder = val;
  });

  const btn = document.getElementById('langToggleBtn');
  if(btn) btn.textContent = lang === 'ar' ? 'EN' : 'AR';
}

document.addEventListener('DOMContentLoaded', applyI18n);

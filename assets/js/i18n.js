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
    hero_title: 'منصة إتقان لإدارة رحلة تأسيس شركتك في السعودية',
    hero_p: 'من تقييم جاهزيتك، لطلب عروض الأسعار، للتوقيع الإلكتروني على عقدك، ومتابعة كل خطوة لحظة بلحظة — منصة رقمية واحدة تدير رحلة تأسيس شركتك واستثمارك بالسعودية من البداية للنهاية.',
    hero_btn_start: 'ابدأ بتقييم جاهزيتك', hero_btn_services: 'وش بتلقى بالمنصة؟',
    stat_investors: 'مستثمر أجنبي', stat_ownership: 'ملكية أجنبية كاملة', stat_countries: 'دولة حول العالم', stat_days: 'يوماً للتأسيس',

    // ---------- وش بتلقى بالمنصة ----------
    pf_eyebrow: 'داخل المنصة', pf_title: 'وش بتلقى بعد ما تسجّل؟',
    pf1_title: 'بوصلة الجاهزية', pf1_p: 'أول خطوة إلزامية بالمنصة — تقييم سريع (دقيقتين بس) يحدد بالضبط مسارك المناسب: هل عندك شركة أجنبية جاهزة، أو تحتاج مساعدتنا بتوفير واحدة.',
    pf2_title: 'طلب العروض', pf2_p: 'بعد التقييم، تقدر تطلب عرض سعر مخصص لتأسيس شركتك بضغطة زر — بدون أي اتصالات أو مواعيد.',
    pf3_title: 'التوقيع والعقود', pf3_p: 'وقّع على العرض والعقد إلكترونياً بخط يدك مباشرة من المنصة — بدون طباعة ولا مواعيد حضور.',
    pf4_title: 'متابعة لحظية', pf4_p: 'تابع كل مرحلة من مراحل تأسيس شركتك أول بأول من لوحتك الخاصة، بدون ما تحتاج تسأل "وين وصل طلبي؟"',

    // ---------- شريط الرحلة ----------
    journey_eyebrow: 'رحلتك معنا', journey_title: 'من التقييم إلى التنفيذ',
    j1: 'تقييم الجاهزية', j2: 'تحديد المسار', j3: 'طلب العروض', j4: 'التوقيع الإلكتروني', j5: 'متابعة التنفيذ',

    // ---------- شريط الثقة ----------
    trust1: 'توقيع إلكتروني معتمد', trust2: 'حفظ آمن للمستندات', trust3: 'سرية تامة لبياناتك', trust4: 'تتبع لحظي لكل طلب',

    // ---------- عن إتقان ----------
    about_eyebrow: 'عن إتقان', about_title: 'وسيط موثوق بينك وبين التأسيس',
    about_p: 'من تقييم جاهزيتك للتوقيع الإلكتروني على عقدك — نرافقك بمنصة رقمية واحدة تجمع السرعة والشفافية، مع متابعة لحظية لملفك حتى تصل لعقد تأسيس شركتك.',

    // ---------- فرصة استثمارية ----------
    invest_eyebrow: 'فرصة استثمارية', invest_title: 'استثمر بذكاء، استثمر الآن',
    invest_p: 'ملكية كاملة، إجراءات مبسّطة، وفرص نمو حقيقية بمختلف القطاعات — إتقان تختصر عليك الطريق من الفكرة إلى عقد التأسيس، عبر منصة واحدة تدير رحلتك كاملة.',

    // ---------- خدماتنا ----------
    services_eyebrow: 'خدماتنا', services_title: 'اضغط على أي خدمة لمعرفة التفاصيل',
    svc1_title: 'رخصة الاستثمار الأجنبي (MISA)',
    svc1_p: 'نستحصل نيابة عنك على رخصة الاستثمار من وزارة الاستثمار السعودية بأسرع وقت وأقل تعقيد.',
    svc1_li1: 'تقييم أهلية المستثمر والقطاع', svc1_li2: 'إعداد وتقديم الملف كاملاً',
    svc1_li3: 'تواصل مباشر مع الجهات الرسمية', svc1_li4: 'متابعة حتى صدور الرخصة',
    svc2_title: 'تأسيس شركة سعودية',
    svc2_p: 'كيان قانوني سعودي بملكية أجنبية كاملة (100%)، بدون شريك محلي، من التسجيل حتى فتح الحساب البنكي.',
    svc2_li1: 'تسجيل في وزارة التجارة', svc2_li2: 'استخراج السجل التجاري وعقد التأسيس',
    svc2_li3: 'فتح الملفات الحكومية', svc2_li4: 'فتح الحساب البنكي',
    svc3_title: 'الاستحواذ على شركات خارجية',
    svc3_p: 'فريقنا في 14 دولة حول العالم يساعدك على الاستحواذ على شركة متوافقة مع اشتراطات الترخيص.',
    svc3_li1: 'الاستحواذ على شركة ملائمة لشروط الترخيص', svc3_li2: 'إنهاء إجراءات نقل الملكية',
    svc3_li3: 'تصديق المستندات الجديدة', svc3_li4: 'شحن الأوراق للمملكة',
    svc4_title: 'خدمات الدعم',
    svc4_p: 'نرافقك في إدارة أعمالك بعد التأسيس عبر أربعة محاور رئيسية:',
    svc4_li1: '<strong>موارد بشرية:</strong> توظيف وعقود وإدارة منصات حكومية',
    svc4_li2: '<strong>حسابات عامة:</strong> مسك دفاتر، إعداد القوائم المالية، والإقرارات الضريبية وفق الأنظمة السعودية',
    svc4_li3: '<strong>تسويق رقمي:</strong> إدارة حسابات التواصل الاجتماعي، تحسين محركات البحث، وحملات إعلانية تناسب السوق المحلي',
    svc4_li4: '<strong>إدارة وتشغيل وحوكمة:</strong> بناء الهيكل التنظيمي، السياسات الداخلية، ولوائح الحوكمة المتوافقة مع الأنظمة السعودية',

    // ---------- لماذا الآن ----------
    why_eyebrow: 'لماذا الآن', why_title: 'لماذا الاستثمار في السعودية الآن؟', why_sub: 'اضغط على أي بطاقة لمعرفة التفاصيل',
    why1_title: 'اقتصاد متسارع النمو', why1_p: 'ناتج محلي يتجاوز 1.1 تريليون دولار، وخطط توسع ضخمة ضمن رؤية 2030 بمختلف القطاعات.',
    why2_title: 'انفتاح تنظيمي غير مسبوق', why2_p: 'ملكية أجنبية كاملة 100% بمعظم القطاعات، بإجراءات مبسّطة عبر منصات حكومية رقمية.',
    why3_title: 'موقع استراتيجي', why3_p: 'بوابة لأسواق الخليج والشرق الأوسط، بقربها من ثلاث قارات وشبكة طرق ومطارات متطورة.',
    why4_title: 'حوافز استثمارية', why4_p: 'إعفاءات ضريبية بمناطق معينة، تمويل حكومي لمشاريع محددة، ودعم مباشر من صناديق التنمية.',

    // ---------- استثمر باقتصاد يتوسع بثقة ----------
    kingdom_title: 'استثمر في اقتصاد يتوسع بثقة',
    kingdom_p: 'ضمن رؤية المملكة 2030، أصبح بإمكان المستثمر الأجنبي تأسيس شركته بنسبة تملك 100% في عدد واسع من القطاعات، وسط اقتصاد يتجاوز ناتجه المحلي 1.1 تريليون دولار وبيئة أعمال تتطور بخطى متسارعة.',

    // ---------- ابدأ الآن (عميل) ----------
    paths_eyebrow: 'ابدأ الآن', paths_title: 'هل أنت مستثمر يبحث عن التأسيس؟',
    client_existing_title: 'عميل حالي', client_existing_p: 'لديك حساب مسبق؟', client_existing_btn: 'تسجيل الدخول',
    client_new_title: 'عميل جديد', client_new_p: 'ابدأ بتقييم جاهزيتك المجاني (دقيقتين بس)', client_new_btn: 'إنشاء حساب',

    // ---------- كن شريكاً لنا ----------
    partner_eyebrow: 'كن شريكاً لنا', partner_title: 'هل أنت مقدّم خدمة تأسيس شركات؟',
    provider_existing_title: 'مقدّم خدمة حالي', provider_existing_p: 'سجّل دخولك للاطلاع على الطلبات', provider_existing_btn: 'تسجيل الدخول',
    provider_new_title: 'مقدّم خدمة جديد', provider_new_p: 'انضم كشريك معتمد لدى إتقان', provider_new_btn: 'انضمام كشريك',

    // ---------- تواصل معنا ----------
    contact_eyebrow: 'تواصل معنا', contact_title: 'فريقنا جاهز للإجابة على استفساراتك',
    contact_whatsapp: 'واتساب', contact_location: 'الرياض، السعودية',

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
    nav_learn_more: 'Learn About Itqan',
    nav_login: 'Log In', nav_register: 'Sign Up',

    hero_title: 'The Itqan Platform for Managing Your Company Incorporation Journey in Saudi Arabia',
    hero_p: 'From assessing your readiness, to requesting quotes, to electronically signing your contract, to tracking every step in real time — one digital platform managing your incorporation and investment journey in Saudi Arabia from start to finish.',
    hero_btn_start: 'Start Your Readiness Assessment', hero_btn_services: "What's Inside the Platform?",
    stat_investors: 'Foreign investors', stat_ownership: 'Full foreign ownership', stat_countries: 'Countries worldwide', stat_days: 'Days to incorporate',

    pf_eyebrow: 'Inside the Platform', pf_title: 'What Do You Get After Signing Up?',
    pf1_title: 'Readiness Compass', pf1_p: 'The first mandatory step — a quick 2-minute assessment that determines your exact path: whether you already have a foreign company or need our help sourcing one.',
    pf2_title: 'Request Offers', pf2_p: 'After the assessment, request a customized quote for your incorporation in one click — no calls or appointments needed.',
    pf3_title: 'Signing & Contracts', pf3_p: 'Sign your offer and contract electronically, by hand, directly from the platform — no printing, no in-person appointments.',
    pf4_title: 'Real-Time Tracking', pf4_p: "Track every stage of your incorporation as it happens from your own dashboard — no need to ask 'where's my request?'",

    journey_eyebrow: 'Your Journey With Us', journey_title: 'From Assessment to Execution',
    j1: 'Readiness Assessment', j2: 'Path Determined', j3: 'Request Offers', j4: 'Electronic Signature', j5: 'Execution Tracking',

    trust1: 'Certified Electronic Signature', trust2: 'Secure Document Storage', trust3: 'Full Data Confidentiality', trust4: 'Real-Time Request Tracking',

    about_eyebrow: 'About Itqan', about_title: 'Your Trusted Partner from Start to Incorporation',
    about_p: 'From assessing your readiness to electronically signing your contract — we guide you through one digital platform built on speed and transparency, with real-time tracking of your file until your company is incorporated.',

    invest_eyebrow: 'Investment Opportunity', invest_title: 'Invest Smart, Invest Now',
    invest_p: 'Full ownership, streamlined procedures, and genuine growth opportunities across sectors — Itqan shortens the distance between your idea and your incorporation contract, through one platform managing your entire journey.',

    services_eyebrow: 'Our Services', services_title: 'Click any service to see the details',
    svc1_title: 'Foreign Investment License (MISA)',
    svc1_p: 'We obtain your investment license from the Saudi Ministry of Investment on your behalf, as quickly and smoothly as possible.',
    svc1_li1: 'Investor and sector eligibility assessment', svc1_li2: 'Full file preparation and submission',
    svc1_li3: 'Direct liaison with government entities', svc1_li4: 'Follow-up until license issuance',
    svc2_title: 'Saudi Company Incorporation',
    svc2_p: 'A Saudi legal entity with 100% foreign ownership — no local partner required — from registration to opening your bank account.',
    svc2_li1: 'Ministry of Commerce registration', svc2_li2: 'Commercial registration and Articles of Association',
    svc2_li3: 'Government file setup', svc2_li4: 'Bank account opening',
    svc3_title: 'Acquiring Foreign Companies',
    svc3_p: 'Our team across 14 countries helps you acquire a company that meets licensing requirements.',
    svc3_li1: 'Acquiring a company that meets licensing conditions', svc3_li2: 'Completing ownership transfer procedures',
    svc3_li3: 'Certifying the new documents', svc3_li4: 'Shipping documents to the Kingdom',
    svc4_title: 'Support Services',
    svc4_p: 'We support your business operations after incorporation across four key pillars:',
    svc4_li1: '<strong>HR:</strong> Recruitment, contracts, and government platform management',
    svc4_li2: '<strong>Accounting:</strong> Bookkeeping, financial statements, and tax filings per Saudi regulations',
    svc4_li3: '<strong>Digital Marketing:</strong> Social media management, SEO, and locally-tailored ad campaigns',
    svc4_li4: '<strong>Management, Operations & Governance:</strong> Organizational structure, internal policies, and compliance frameworks',

    why_eyebrow: 'Why Now', why_title: 'Why Invest in Saudi Arabia Now?', why_sub: 'Click any card to see the details',
    why1_title: 'A Fast-Growing Economy', why1_p: 'A GDP exceeding $1.1 trillion, with massive expansion plans across sectors under Vision 2030.',
    why2_title: 'Unprecedented Regulatory Openness', why2_p: '100% full foreign ownership in most sectors, with streamlined procedures via digital government platforms.',
    why3_title: 'Strategic Location', why3_p: 'A gateway to Gulf and Middle Eastern markets, near three continents with advanced road and airport networks.',
    why4_title: 'Investment Incentives', why4_p: 'Tax exemptions in select zones, government funding for specific projects, and direct support from development funds.',

    kingdom_title: 'Invest in an Economy Expanding with Confidence',
    kingdom_p: 'Under Saudi Vision 2030, foreign investors can now establish companies with 100% ownership across a wide range of sectors, within an economy exceeding $1.1 trillion in GDP and a rapidly evolving business environment.',

    paths_eyebrow: 'Get Started', paths_title: 'Are you an investor looking to incorporate?',
    client_existing_title: 'Existing Client', client_existing_p: 'Already have an account?', client_existing_btn: 'Log In',
    client_new_title: 'New Client', client_new_p: 'Start your free readiness assessment (just 2 minutes)', client_new_btn: 'Sign Up',

    partner_eyebrow: 'Become Our Partner', partner_title: 'Are you a company-incorporation service provider?',
    provider_existing_title: 'Existing Provider', provider_existing_p: 'Log in to view available requests', provider_existing_btn: 'Log In',
    provider_new_title: 'New Provider', provider_new_p: 'Join as an approved partner of Itqan', provider_new_btn: 'Join as Partner',

    contact_eyebrow: 'Contact Us', contact_title: 'Our team is ready to answer your questions',
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

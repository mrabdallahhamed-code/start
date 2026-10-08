// ============================================================
// ترجمة لوحات المنصة (العميل والصفحات المشتركة) — مبتدأ من إتقان
// الفكرة: الصفحات مكتوبة بالعربي، وعند اختيار الإنجليزية يُترجَم النص الظاهر
// تلقائياً من القاموس أدناه — بما فيه النصوص التي تُضاف لاحقاً بالجافاسكربت.
// لإضافة ترجمة: أضف سطراً بالشكل  'النص العربي': 'English text',
// لإيقاف الترجمة على عنصر معيّن (مثل رسائل المستخدمين): أضف له data-no-i18n
// ============================================================
(function(){
  const EN = {
    // ---------- عام / القائمة الجانبية ----------
    'مبتدأ': 'Mubtada', 'من إتقان': 'by Itqan', 'مبتدأ من إتقان': 'Mubtada by Itqan',
    'لوحة العميل': 'Dashboard', 'نظرة عامة': 'Overview', 'بوصلة الجاهزية': 'Readiness Compass', 'تقييم الوضع': 'Status Assessment',
    'الطلبات': 'Requests', 'طلبات التأسيس': 'Incorporation Requests', 'طلبات بعد التأسيس': 'Post-Incorporation Requests',
    'خدمات ما بعد التأسيس': 'Post-Incorporation Services', 'رحلة الطلب': 'Request Journey', 'بياناتي': 'My Profile',
    'الرسائل': 'Messages', 'ملفاتي': 'My Files', 'العروض': 'Offers', 'تسجيل الخروج': 'Sign out',
    'الإشعارات': 'Notifications', 'لا توجد إشعارات.': 'No notifications.',
    'جارٍ التحميل...': 'Loading...', 'إرسال': 'Send', 'حفظ': 'Save', 'إلغاء': 'Cancel', 'تأكيد': 'Confirm',
    'نعم': 'Yes', 'لا': 'No', 'الحالة': 'Status', 'التاريخ': 'Date', 'النوع': 'Type', 'إجراء': 'Action',
    'عرض الملف': 'View file', 'تم التحقق': 'Verified', 'مرفوض': 'Rejected', 'قيد المراجعة': 'Under review',
    'الإمارات': 'UAE', 'البحرين': 'Bahrain', 'قطر': 'Qatar', 'مصر': 'Egypt', 'السعودية': 'Saudi Arabia',
    'واتساب': 'WhatsApp', 'البريد الإلكتروني': 'Email', 'عميل': 'Client', 'العميل': 'Client',
    'يوم': 'days', 'من': 'of', 'عن': 'About', '،': ',',

    'تواصل معنا': 'Contact us', 'مثال: مصري، هندي، باكستاني...': 'e.g. Egyptian, Indian, Pakistani...', 'اسم الشركة': 'Company name',
    'لا توجد مستندات مرفوعة بعد': 'No documents uploaded yet', 'مثال: عقد التأسيس، جواز السفر': 'e.g. Articles of association, passport',
    'اكتب رسالتك هنا...': 'Write your message here...', 'اسمك الكامل': 'Your full name', 'صف احتياجك بإيجاز': 'Briefly describe what you need',
    'أي تفاصيل تحب تشاركها مع فريق إتقان': 'Any details you would like to share with the Itqan team', 'إظهار': 'Show', 'إخفاء': 'Hide',
    '10 أحرف على الأقل': 'At least 10 characters', 'وجرّب': 'and try',
    // ---------- رسائل الملفات ----------
    'لم يتم اختيار ملف': 'No file selected', 'حجم الملف أكبر من المسموح (': 'File is larger than allowed (', 'ميجا)': 'MB)',
    'نوع الملف غير مسموح. المسموح: PDF أو صورة (JPG/PNG) أو Word': 'File type not allowed. Allowed: PDF, image (JPG/PNG) or Word',

    // ---------- المصادقة الثنائية / كلمة المرور ----------
    'المصادقة الثنائية': 'Two-factor authentication',
    'حسابك أدمن، ولذلك يلزم تفعيل المصادقة الثنائية. افتح تطبيق مصادقة (Google Authenticator أو Microsoft Authenticator أو Authy) وامسح الرمز:': 'Your account is an admin account, so two-factor authentication is required. Open an authenticator app (Google Authenticator, Microsoft Authenticator or Authy) and scan the code:',
    'أو أدخل المفتاح يدوياً:': 'Or enter the key manually:', 'الرمز المكوّن من 6 أرقام': '6-digit code', 'تفعيل': 'Activate',
    'أدخل الرمز الحالي من تطبيق المصادقة:': 'Enter the current code from your authenticator app:',
    'تعذّر بدء التفعيل:': 'Could not start activation:', 'أدخل 6 أرقام': 'Enter 6 digits', 'الرمز غير صحيح، حاول مجدداً': 'Incorrect code, try again',
    'تعيين كلمة مرور جديدة': 'Set a new password', 'اكتب كلمة المرور الجديدة اللي تبي تستخدمها من الآن.': 'Enter the new password you want to use from now on.',
    'كلمة المرور الجديدة': 'New password', 'تأكيد كلمة المرور': 'Confirm password', 'حفظ كلمة المرور الجديدة': 'Save new password',
    'الرابط غير صالح أو منتهي الصلاحية.': 'The link is invalid or has expired.', 'ارجع لتسجيل الدخول': 'Go back to sign in',
    'وجرّب': 'and try', 'نسيت كلمة المرور': 'Forgot password', 'من جديد.': 'again.', 'كلمة المرور ضعيفة:': 'Weak password:',
    'كلمتا المرور غير متطابقتين': 'Passwords do not match', 'تم تغيير كلمة المرور بنجاح! جارٍ تحويلك لتسجيل الدخول...': 'Password changed! Redirecting you to sign in...',

    // ---------- بوصلة الجاهزية ----------
    'جاوب على الأسئلة اللي تنطبق عليك، واضغط': 'Answer the questions that apply to you, then press', 'إنهاء التقييم': 'Finish assessment', 'بالأسفل.': 'below.',
    'هل تمتلك شركة خارجية حالياً؟': 'Do you currently own a company abroad?', 'من أي دولة تفضل أن تكون شركتك الخارجية؟': 'Which country would you prefer your foreign company to be in?',
    'بما إنك لا تملك شركة خارجية حالياً، سيقوم فريق إتقان بتوفير شركة مناسبة لك.': 'Since you do not own a foreign company, the Itqan team will provide a suitable one for you.',
    'ما هو نوع النشاط المطلوب؟': 'What type of activity do you need?', 'ما نوع النشاط المطلوب؟': 'What type of activity do you need?',
    'خدمي': 'Services', 'صناعي': 'Industrial', 'زراعي': 'Agricultural', 'تجاري': 'Commercial',
    'ما هي جنسيتك؟': 'What is your nationality?', 'هل الشركة ذات مسؤولية محدودة (LLC)؟': 'Is the company a limited liability company (LLC)?',
    'هل تمتلك عقد تأسيس ساري للشركة؟': 'Does the company have a valid articles of association?', 'هل لديك قوائم مالية مدققة لمدة عام على الأقل؟': 'Do you have audited financial statements for at least one year?',
    'ما اسم شركتك الأجنبية؟': 'What is the name of your foreign company?', 'في أي دولة الشركة مسجّلة؟': 'In which country is the company registered?',
    'مستندات شركتك الخارجية (اختياري الآن)': 'Your foreign company documents (optional for now)', 'يمكنك رفعها لاحقاً من': 'You can upload them later from', 'إن أحببت.': 'if you prefer.',
    'تصديق الوثائق من السفارة السعودية بالبلد الأم': 'Attest documents at the Saudi embassy in the home country', 'شحن الوثائق': 'Ship the documents',
    'التقديم على رخصة الاستثمار': 'Apply for the investment license', 'الحصول على رخصة الاستثمار': 'Obtain the investment license',
    'حجز الاسم التجاري': 'Reserve the trade name', 'تأسيس الشركة وعقد التأسيس': 'Incorporate the company and articles of association',
    'فتح ملف الموارد البشرية': 'Open the HR file', 'فتح الملفات الحكومية': 'Open government files',
    'عقد التأسيس (الشركة الأم)': 'Articles of association (parent company)', 'جواز سفر ممثل الشركة': "Company representative's passport", 'السجل التجاري الأجنبي': 'Foreign commercial registration',
    'الرجاء الإجابة على السؤال الأول على الأقل': 'Please answer at least the first question',
    'لا تمتلك شركة أجنبية حالياً — سيقوم فريق إتقان بتوفير شركة مناسبة لك، ويمكنك طلب العروض مباشرة.': 'You do not own a foreign company — the Itqan team will provide a suitable one, and you can request offers right away.',
    'تعديل الشكل القانوني للشركة ليصبح ذا مسؤولية محدودة (LLC)': 'Change the legal form of the company to an LLC', 'استخراج أو تجهيز عقد تأسيس ساري للشركة': 'Obtain or prepare valid articles of association',
    'إعداد قوائم مالية مدققة لمدة عام على الأقل': 'Prepare audited financial statements for at least one year',
    'ملفك يحتاج بعض النقاط قبل التأسيس — راجع مراحل التنفيذ بلوحتك.': 'Your file needs a few items before incorporation — check the steps on your dashboard.',

    // ---------- اختيار الدولة / قريباً / نوع التأسيس ----------
    'ننطلق قريباً في': 'Coming soon to', 'هذه الدولة': 'this country', 'نعمل حالياً على إتاحة خدمات تأسيس الشركات في': 'We are working on launching company incorporation services in',
    'عبر منصة مبتدأ.': 'through the Mubtada platform.', 'عبر منصة مبتدأ من إتقان.': 'through the Mubtada by Itqan platform.',
    'سجّلنا طلبك، وسنُعلمك فور الإطلاق. يمكنك بالتواصل مع فريقنا الآن إن كان لديك استفسار عاجل.': "We've recorded your request and will notify you at launch. You can contact our team now if you have an urgent question.",
    'تواصل معنا على واتساب ←': 'Contact us on WhatsApp →', '← تغيير الدولة': '← Change country',
    'في أي دولة ترغب بتأسيس شركتك؟': 'In which country do you want to set up your company?', 'يمكنك تغيير هذا الاختيار لاحقاً من صفحة «بياناتي».': 'You can change this later from "My Profile".',
    'ما نوع التأسيس الذي تحتاجه؟': 'What type of incorporation do you need?', 'استثمار أجنبي': 'Foreign investment',
    'أنت مستثمر غير سعودي، وتريد تأسيس شركة في السعودية بملكية أجنبية.': 'You are a non-Saudi investor who wants to set up a foreign-owned company in Saudi Arabia.',
    'مواطن سعودي': 'Saudi national', 'أنت مواطن سعودي، وتريد تأسيس شركة محلية لك.': 'You are a Saudi national who wants to set up a local company.',

    // ---------- لوحة العميل ----------
    'مرحباً بك،': 'Welcome,', 'هذه لوحتك الخاصة من فريق إتقان — تابع حالة ملفك وطلباتك من مكان واحد': 'Your personal dashboard from the Itqan team — follow your file and requests in one place',
    'مرحلتك الحالية': 'Current stage', 'عدد الطلبات': 'Requests', 'عدد العروض': 'Offers', 'يوم منذ بداية الطلب': 'days since the request started',
    '💬 آخر رسائل من فريق إتقان': '💬 Latest messages from the Itqan team', 'فتح كل الرسائل والرد': 'Open all messages and reply',
    'بانتظار طلب تأسيس': 'Awaiting an incorporation request', 'قبل التقييم': 'Before assessment', 'بانتظار عروض': 'Awaiting offers', 'بانتظار طلب عروض': 'Awaiting a quote request',
    '🎉 تهانينا، اكتمل تأسيس شركتك!': '🎉 Congratulations, your company is incorporated!',
    'تحتاج دعماً في الموارد البشرية أو المحاسبة أو التسويق أو غيرها بعد التأسيس؟ أخبرنا باحتياجك وسنجهّز لك عرضاً مخصصاً.': 'Need support with HR, accounting, marketing or anything else after incorporation? Tell us what you need and we will prepare a tailored offer.',
    'اطلب خدمات ما بعد التأسيس ←': 'Request post-incorporation services →', '📩 وصلك عرض لخدمات ما بعد التأسيس': '📩 You received an offer for post-incorporation services',
    'راجع العرض ووافق عليه للمتابعة — بعد القبول يصبح بإمكانك الدخول إلى منصة صمام من إتقان لمتابعة خدماتك.': 'Review and accept the offer to continue — after acceptance you can access Simam by Itqan to follow your services.',
    'مراجعة العرض ←': 'Review offer →', '🎉 خدماتك بعد التأسيس جاهزة': '🎉 Your post-incorporation services are ready',
    'يمكنك الآن الدخول إلى منصة صمام من إتقان لمتابعة خدماتك أولاً بأول.': 'You can now access Simam by Itqan to follow your services as they progress.',
    'الذهاب إلى صمام من إتقان ←': 'Go to Simam by Itqan →', 'لا توجد رسائل حتى الآن.': 'No messages yet.',
    'صمام من إتقان': 'Simam by Itqan',

    // ---------- ملفاتي ----------
    'رفع مستند جديد': 'Upload a new document', 'نوع المستند': 'Document type', 'الملف': 'File', 'رفع المستند': 'Upload document',
    'مستنداتي المرفوعة': 'My uploaded documents', 'تاريخ الرفع': 'Upload date', 'أدخل نوع المستند واختر الملف': 'Enter the document type and choose a file',
    'تم رفع المستند بنجاح.': 'Document uploaded successfully.',

    // ---------- رحلة الطلب ----------
    'بانتظار ردك': 'Awaiting your reply', 'فشل جلب الطلب:': 'Failed to load the request:', 'ما عندك طلب تأسيس حالياً.': 'You have no incorporation request yet.',
    'رحلة الطلب تبدأ بعد ما توافق على عرض من العروض الواردة.': 'The journey starts once you accept one of the offers you receive.', 'شوف العروض': 'View offers',
    'مراحل التنفيذ بتظهر هنا قريباً.': 'The execution steps will appear here soon.',
    'يوم منذ البدء — تجاوزنا المدة المتوقعة (': 'days since start — we passed the expected duration (', 'يوم) بـ': 'days) by',
    'يوم، وفريقنا يعمل على إنهائها بأسرع وقت': 'days, and our team is working to finish as soon as possible',
    'يوم منذ البدء — ضمن المدة المتوقعة بعقدك (': 'days since start — within the expected duration in your contract (',
    'يوم منذ بدء رحلتك': 'days since your journey started', 'مراحل مكتملة': 'stages completed',
    'اكتب ردّك هنا (لو مو محتاج ترفع ملف)...': "Write your reply here (if you don't need to upload a file)...",
    '📝 إرسال الرد المكتوب': '📝 Send written reply', '📤 رفع ملف بدل ذلك': '📤 Upload a file instead', 'اكتب ردّك أولاً': 'Write your reply first',

    // ---------- الرسائل ----------
    'الرسائل مع فريق إتقان': 'Messages with the Itqan team', 'لا توجد رسائل بعد — ابدأ المحادثة بكتابة رسالة بالأسفل.': 'No messages yet — start the conversation by writing below.',
    'تعذر تحديد جهة الإدارة': 'Could not find the support team', 'اكتب رسالة...': 'Write a message...', 'اكتب رسالتك...': 'Write your message...',

    // ---------- العروض ----------
    'توقيع اعتماد العرض': 'Sign to accept the offer', 'بتوقيعك هنا، أنت توافق رسمياً على شروط هذا العرض.': 'By signing here, you formally accept the terms of this offer.',
    'الاسم الكامل': 'Full name', 'التوقيع (ارسم بإصبعك أو الماوس)': 'Signature (draw with your finger or mouse)', 'مسح التوقيع': 'Clear signature',
    'تأكيد القبول والتوقيع': 'Confirm acceptance and sign', 'العروض الواردة': 'Received offers', 'ما عندك طلب تأسيس، فما فيه عروض بعد.': 'You have no incorporation request, so there are no offers yet.',
    'اطلب عروض من هنا': 'Request offers here', 'لا توجد عروض بعد — سيتواصل معك مقدمو الخدمة قريباً.': 'No offers yet — we will contact you soon.',
    'مقدّم الخدمة': 'Service provider', 'السعر': 'Price', 'مدة التنفيذ': 'Duration', 'قبول العرض': 'Accept offer', 'محادثة': 'Chat', 'الدفعات': 'Payments',
    'لا توجد دفعات مسجّلة بعد من إتقان.': 'No payments recorded by Itqan yet.', '✅ مؤكَّدة من إتقان': '✅ Confirmed by Itqan',
    'أبلغتَ بالسداد — بانتظار مطابقة إتقان': 'You reported payment — awaiting Itqan confirmation', 'بانتظار سدادك': 'Awaiting your payment', 'أبلغنا بالسداد': 'Report payment',
    'اكتب اسمك الكامل': 'Enter your full name', 'وقّع بخط يدك بالمساحة أعلاه': 'Sign by hand in the area above',
    'ر.س': 'SAR',

    // ---------- خدمات ما بعد التأسيس ----------
    'كل ما تحتاجه لإدارة شركتك بعد التأسيس، مباشرة من فريق إتقان': 'Everything you need to run your company after incorporation, directly from the Itqan team',
    'موارد بشرية': 'Human resources', 'توظيف وتعيين': 'Recruitment and hiring', 'إدارة منصات حكومية (قوى، مقيم، مدد)': 'Government platforms (Qiwa, Muqeem, Mudad)',
    'كتابة السياسات الداخلية': 'Writing internal policies', 'إدارة شؤون الموظفين اليومية': 'Day-to-day employee affairs',
    'حسابات': 'Accounting', 'مسك دفاتر وقيود محاسبية': 'Bookkeeping and journal entries', 'إعداد القوائم المالية': 'Financial statements',
    'الإقرارات الضريبية (VAT/الزكاة)': 'Tax returns (VAT/Zakat)', 'إعداد الرواتب (Payroll)': 'Payroll',
    'تسويق': 'Marketing', 'إدارة حسابات التواصل الاجتماعي': 'Social media management', 'حملات إعلانية مدفوعة': 'Paid ad campaigns',
    'تحسين محركات البحث SEO': 'Search engine optimization (SEO)', 'تصميم هوية بصرية ومحتوى': 'Visual identity and content design',
    'تشغيل': 'Operations', 'إعداد الإجراءات التشغيلية اليومية': 'Daily operating procedures', 'إدارة سلسلة التوريد': 'Supply chain management',
    'إدارة خدمة العملاء': 'Customer service management', 'أتمتة العمليات': 'Process automation',
    'إدارة': 'Management', 'بناء الهيكل التنظيمي': 'Organizational structure', 'وضع الخطط الاستراتيجية': 'Strategic planning',
    'التقارير الإدارية الدورية': 'Periodic management reports', 'تدريب وتأهيل الكوادر الإدارية': 'Training management staff',
    'إدارة مشاريع': 'Project management', 'تخطيط وجدولة المشاريع': 'Project planning and scheduling', 'متابعة التنفيذ والتقارير': 'Execution tracking and reporting',
    'إدارة الميزانيات': 'Budget management', 'إدارة المخاطر': 'Risk management',
    'حوكمة': 'Governance', 'صياغة اللوائح الداخلية': 'Drafting internal regulations', 'الامتثال التنظيمي (Compliance)': 'Regulatory compliance',
    'إعداد سياسات مكافحة غسل الأموال': 'Anti-money-laundering policies', 'هيكلة مجلس الإدارة/اللجان': 'Board and committee structure',
    'اختر ما تحتاجه': 'Choose what you need', 'اختر الخدمات اللي تحتاجها، وحدّد المطلوب بالتفصيل، وفريق إتقان يجهّز لك عرض سعر مخصص.': 'Choose the services you need and describe them in detail, and the Itqan team will prepare a tailored quote.',
    'ملاحظات إضافية (اختياري)': 'Additional notes (optional)', 'طلب عرض سعر': 'Request a quote',
    'قيد المراجعة — بانتظار عرض من إتقان': 'Under review — awaiting an offer from Itqan', 'وصلك عرض سعر': 'You received a quote',
    'تم القبول ✓': 'Accepted ✓', 'تم الرفض': 'Rejected', 'طلبك الحالي': 'Your current request', 'حالة الطلب:': 'Request status:',
    'عرض التفاصيل الكاملة': 'View full details', 'عرض الاتفاقية والتوقيع': 'View agreement and sign',
    '🎉 الانتقال إلى صمام من إتقان لمتابعة خدماتك ←': '🎉 Go to Simam by Itqan to follow your services →',
    'طلب جديد': 'New request', '(بدون تحديد فرعي)': '(no sub-item selected)', 'اختر خدمة واحدة على الأقل': 'Choose at least one service',
    'جارٍ تجهيز الدخول...': 'Preparing sign-in...',
    'تعذر تجهيز الدخول التلقائي — تأكد إن شركتك اكتمل تأسيسها أولاً، أو جرّب تسجّل دخول يدوياً على simam.itqanbs.sa': 'Automatic sign-in failed — make sure your company is fully incorporated, or sign in manually at simam.itqanbs.sa',
    'تعذر تجهيز الدخول التلقائي، جرّب تسجّل دخول يدوياً على simam.itqanbs.sa': 'Automatic sign-in failed, try signing in manually at simam.itqanbs.sa',

    // ---------- بياناتي ----------
    'رقم الجوال (مع رمز الدولة)': 'Mobile number (with country code)', 'الوسيلة المفضلة للتواصل': 'Preferred contact method', 'حفظ التغييرات': 'Save changes',
    'الدولة ونوع التأسيس': 'Country and incorporation type', 'دولة التأسيس': 'Country of incorporation', 'نوع التأسيس': 'Incorporation type',
    'تغيير هذا الاختيار لا يؤثر على طلباتك الحالية، ويُستخدم فقط للطلبات الجديدة.': 'Changing this does not affect your current requests; it only applies to new ones.',
    'تم الحفظ — يطبَّق على طلباتك الجديدة.': 'Saved — applies to your new requests.', 'تم الحفظ — سيتم تحويلك لصفحة الانتظار.': 'Saved — redirecting you to the waiting page.',
    'رقم الجوال غير صحيح — لازم يبدأ برمز الدولة، مثال: 966501234567+': 'Invalid mobile number — it must start with the country code, e.g. +966501234567',
    'تم الحفظ بنجاح.': 'Saved successfully.', 'الاسم': 'Name', 'رقم الجوال': 'Mobile number',

    // ---------- طلب العروض ----------
    'أخبرنا أكثر عن طلبك': 'Tell us more about your request',
    'هذه الأسئلة تساعد فريق إتقان على تقديم عرض دقيق لحالتك — لا حاجة لرفع أي مستندات الآن.': 'These questions help the Itqan team give you an accurate offer — no documents needed now.',
    '📊 تحتاج دراسة جدوى قبل التأسيس؟': '📊 Need a feasibility study before incorporating?',
    'إتقان توفّر دراسات جدوى ودراسات متخصصة عبر متجرها الإلكتروني، لمساعدتك على اتخاذ قرار التأسيس بثقة قبل أن تمضي قدماً.': 'Itqan offers feasibility and specialist studies in its online store, to help you decide with confidence before moving ahead.',
    'تصفح متجر الدراسات ←': 'Browse the studies store →', 'تعذر تحميل الطلب.': 'Could not load the request.',
    'لم يعد بإمكانك تعديل هذا الطلب — تواصل مع فريق إتقان أو قدّم طلباً جديداً.': 'You can no longer edit this request — contact the Itqan team or submit a new one.',
    'تعديل طلبك': 'Edit your request', 'لديك حتى ساعتين من وقت التقديم لتعديل طلبك، طالما ما وصلك عرض بعد.': 'You have up to two hours after submitting to edit your request, as long as no offer has arrived.',
    'ما هي سنة آخر ميزانية مدققة للشركة؟': "What is the year of the company's latest audited financial statement?", '2022 أو أقدم': '2022 or earlier', 'لا توجد ميزانية مدققة': 'No audited statement',
    'هل تم تصديق الأوراق من الخارجية في البلد الأم؟': 'Have the documents been attested by the foreign ministry in the home country?',
    'هل تم تصديق المستندات من السفارة السعودية؟': 'Have the documents been attested by the Saudi embassy?',
    'هل أنت زائر حالي بالمملكة، أم مقيم، أم خارج المملكة؟': 'Are you currently visiting Saudi Arabia, a resident, or outside the Kingdom?',
    'زائر حالي بالمملكة': 'Currently visiting', 'مقيم بالمملكة': 'Resident in Saudi Arabia', 'خارج المملكة': 'Outside Saudi Arabia',
    'هل ترغب بالاستحواذ على شركة سعودية قائمة أم إنشاء شركة جديدة؟': 'Do you want to acquire an existing Saudi company or set up a new one?',
    'استحواذ على شركة قائمة': 'Acquire an existing company', 'إنشاء شركة جديدة': 'Set up a new company',
    'هل المدير العام المعيّن بالشركة مقيم داخل المملكة أم خارجها؟': 'Is the appointed general manager resident inside or outside the Kingdom?',
    'مقيم داخل المملكة': 'Resident inside the Kingdom', 'مقيم خارج المملكة': 'Resident outside the Kingdom',
    'هل يملك المدير العام بالشركة الأم صلاحيات تأسيس شركة بالخارج؟': 'Does the general manager of the parent company have authority to set up a company abroad?',
    'الرجاء تعبئة الحقول الأساسية على الأقل': 'Please fill in at least the main fields', 'الرجاء تعبئة كل الحقول': 'Please fill in all fields',
    'بما إن ملفك لسا غير جاهز، هذي الأسئلة تساعدنا نوجّهك لعرض متخصص بالاستحواذ على شركة مناسبة لك.': 'Since your file is not ready yet, these questions help us direct you to a specialised offer to acquire a suitable company.',
    'ما جنسية المنشأة المطلوب الاستحواذ عليها؟': 'What is the nationality of the company you want to acquire?', 'مثال: الإمارات، مصر، بريطانيا...': 'e.g. UAE, Egypt, UK...',
    'هل ترغب أن يكون لديك شركاء أم ملكية كاملة 100%؟': 'Do you want partners or 100% full ownership?', 'ملكية كاملة 100%': '100% full ownership', 'وجود شركاء': 'With partners',
    'هل أنت مقيم بالمملكة أم خارجها؟': 'Are you resident in the Kingdom or outside it?', 'اختر...': 'Choose...',

    // ---------- طلبات التأسيس ----------
    '+ طلب عرض سعر جديد': '+ New quote request', 'فضلاً أكمل بوصلة الجاهزية أولاً للحصول على عروض.': 'Please complete the Readiness Compass first to get offers.',
    'ما عندك أي طلب تأسيس حالياً.': 'You have no incorporation requests yet.', 'قيد المراجعة — فريق إتقان يجهّز عرضك': 'Under review — the Itqan team is preparing your offer',
    'وصلك عرض — بانتظار موافقتك': 'Offer received — awaiting your approval', 'تم اختيار عرض': 'Offer selected', 'مكتمل': 'Completed', 'ملغى': 'Cancelled',
    '· تاريخ الطلب:': '· Request date:', 'عرض العروض': 'View offers', 'تعديل الطلب': 'Edit request',

    // ---------- تقييم الوضع (مواطن سعودي) ----------
    'أجب على سؤالين فقط، وسنجهّز لك عرض سعر التأسيس.': 'Answer just two questions and we will prepare your incorporation quote.',
    'مؤسسة فردية': 'Sole proprietorship', 'شركة ذات مسؤولية محدودة (شخص واحد)': 'Single-person LLC', 'شركة ذات مسؤولية محدودة': 'Limited liability company',
    'شركة مساهمة مغلقة (شخص واحد)': 'Single-person closed joint-stock company', 'شركة مساهمة مغلقة': 'Closed joint-stock company', 'شركة مساهمة مبسطة': 'Simplified joint-stock company', 'شركة مهنية': 'Professional company',
    'تعديل تقييمك': 'Edit your assessment', 'هل تم تحديد نوع الكيان؟': 'Have you decided on the entity type?', 'نوع الكيان': 'Entity type',
    'هل تم اختيار الاسم التجاري؟': 'Have you chosen the trade name?', 'الرجاء الإجابة على سؤال نوع الكيان.': 'Please answer the entity type question.',
    'الرجاء اختيار نوع الكيان.': 'Please choose the entity type.', 'الرجاء الإجابة على سؤال الاسم التجاري.': 'Please answer the trade name question.',

    // ---------- عرض السعر ----------
    '→ رجوع': '← Back', '🖨️ طباعة / حفظ PDF': '🖨️ Print / Save PDF', 'لم يتم تحديد عرض.': 'No offer specified.',
    'تعذر عرض هذا العرض (قد لا تملك صلاحية الوصول إليه).': 'This offer cannot be shown (you may not have access).', 'لم يحدَّد نطاق خدمات.': 'No scope of services defined.',
    'الخدمة': 'Service', 'الرسم التقديري': 'Estimated fee', 'الإجمالي التقديري (يتحمّله العميل)': 'Estimated total (paid by the client)',
    'عرض تقديم خدمات —': 'Service offer —', 'النشاط:': 'Activity:', '· تاريخ العرض:': '· Offer date:', '· مدة التنفيذ:': '· Duration:',
    'يوم عمل تقريباً': 'working days approx.', 'ثالثاً: الرسوم الحكومية التقديرية': 'Third: Estimated government fees', 'رابعاً: المقابل المالي': 'Fourth: Fees',
    'أتعاب': 'Fees', '(غير شامل ضريبة القيمة المضافة)': '(excluding VAT)',
    '% على الخدمات المحاسبية والموارد البشرية والدعم التشغيلي بعد اكتمال التأسيس.': '% on accounting, HR and operational support services after incorporation.',
    'تحميل الملف المرفق': 'Download attachment', 'تم اعتماد العرض': 'Offer accepted', 'بانتظار اعتماد العميل': 'Awaiting client approval'
  };

  // عناوين الصفحات: "X — إتقان" أو "X — مبتدأ من إتقان"
  const TITLE_SUFFIX = [[' — مبتدأ من إتقان', ' — Mubtada by Itqan'], [' — إتقان', ' — Itqan']];

  const AR_RE = /[؀-ۿ]/;
  const LONG_KEYS = Object.keys(EN).filter(k => k.length >= 6).sort((a, b) => b.length - a.length);

  function translate(str){
    if(!str || !AR_RE.test(str)) return str;
    const trimmed = str.trim().replace(/\s+/g, ' ');
    if(EN[trimmed] !== undefined){ return str.replace(str.trim(), EN[trimmed]); }
    // ترجمة الأجزاء الطويلة داخل نص مركّب (مثل: "5 يوم منذ البدء — ...")
    let out = str;
    for(const k of LONG_KEYS){ if(out.includes(k)) out = out.split(k).join(EN[k]); }
    return out;
  }
  function translateTitle(t){
    for(const [ar, en] of TITLE_SUFFIX){ if(t.endsWith(ar)) return translate(t.slice(0, -ar.length)) + en; }
    return translate(t);
  }

  function getLang(){ try{ return localStorage.getItem('itqan_lang') || 'ar'; }catch(e){ return 'ar'; } }
  const ON = getLang() === 'en';
  window.trApp = (s) => ON ? translate(s) : s;

  const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'CODE', 'PRE']);
  const ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  function skipEl(el){ return !el || SKIP.has(el.tagName) || el.closest('[data-no-i18n]') || el.isContentEditable; }

  function walk(root){
    if(root.nodeType === 3){ const p = root.parentElement; if(!skipEl(p)){ const t = translate(root.nodeValue); if(t !== root.nodeValue) root.nodeValue = t; } return; }
    if(root.nodeType !== 1 || skipEl(root)) return;
    const els = [root, ...root.querySelectorAll('*')];
    for(const el of els){
      if(el.closest('[data-no-i18n]') || el.tagName === 'SCRIPT' || el.tagName === 'STYLE') continue;
      for(const a of ATTRS){ const v = el.getAttribute(a); if(v && AR_RE.test(v)){ const t = translate(v); if(t !== v) el.setAttribute(a, t); } }
      if(el.tagName === 'INPUT' && (el.type === 'button' || el.type === 'submit') && AR_RE.test(el.value)) el.value = translate(el.value);
    }
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let n; while((n = tw.nextNode())){
      if(skipEl(n.parentElement)) continue;
      const t = translate(n.nodeValue); if(t !== n.nodeValue) n.nodeValue = t;
    }
  }

  function addToggle(){
    const ex = document.getElementById('langToggleBtn');
    if(ex){ ex.textContent = ON ? 'AR' : 'EN'; return; }
    const bar = document.querySelector('.app-topbar') || document.querySelector('header.top');
    if(!bar) return;
    const b = document.createElement('button');
    b.id = 'langToggleBtn'; b.className = 'topbar-btn'; b.type = 'button';
    b.textContent = ON ? 'AR' : 'EN';
    bar.appendChild(b);
  }

  // تبديل اللغة: يحفظ الاختيار ويعيد تحميل الصفحة (أضمن طريقة لإرجاع النص العربي الأصلي)
  window.toggleLang = function(){
    try{ localStorage.setItem('itqan_lang', ON ? 'ar' : 'en'); }catch(e){}
    location.reload();
  };
  document.addEventListener('click', (e) => { if(e.target && e.target.id === 'langToggleBtn'){ e.preventDefault(); e.stopImmediatePropagation(); window.toggleLang(); } }, true);

  function start(){
    if(!ON){ addToggle(); return; }
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    document.title = translateTitle(document.title);
    walk(document.body);
    addToggle();
    new MutationObserver(muts => {
      for(const m of muts){
        if(m.type === 'characterData') walk(m.target);
        else m.addedNodes.forEach(walk);
      }
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
    const _alert = window.alert, _confirm = window.confirm;
    window.alert = (m) => _alert(translate(String(m)));
    window.confirm = (m) => _confirm(translate(String(m)));
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

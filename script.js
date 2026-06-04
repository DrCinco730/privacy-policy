const policyData = {
  ar: {
    meta: {
      title: 'سياسة الخصوصية | koora info',
      description:
        'سياسة الخصوصية لتطبيق koora info: البيانات التي يعالجها التطبيق، استخداماتها، الخدمات المساندة، واختيارات المستخدم.',
    },
    actions: {
      theme: 'الوضع',
      language: 'English',
      print: 'طباعة',
    },
    hero: {
      kicker: 'حماية البيانات',
      title: 'سياسة الخصوصية',
      summary:
        'نوضح هنا ما يعالجه التطبيق فعلياً، ولماذا، وكيف يمكنك التحكم في بياناتك.',
      effective: 'سارية من 17 مايو 2026',
      updated: 'آخر تحديث 17 مايو 2026',
      noSelling: 'لا بيع للبيانات',
    },
    footer: {
      updated: 'آخر تحديث: 17 مايو 2026',
    },
    sections: [
      {
        id: 'scope',
        icon: '01',
        title: 'نطاق السياسة',
        subtitle: 'ما الذي تغطيه هذه الصفحة',
        paragraphs: [
          'تشرح هذه السياسة كيف يتعامل تطبيق koora info مع البيانات اللازمة لتقديم نتائج المباريات والأخبار الرياضية والإشعارات وتحسين الاستقرار. وهي تصف سلوك التطبيق الحالي كما هو مطبق داخل النسخة المنشورة.',
        ],
      },
      {
        id: 'data',
        icon: '02',
        title: 'البيانات التي نعالجها',
        subtitle: 'الفئات التي يعتمد عليها التطبيق فعلياً',
        facts: [
          {
            icon: 'ID',
            title: 'معرف مجهول للتطبيق',
            description:
              'ينشئ التطبيق معرفاً مجهولاً عبر Firebase Authentication حتى تعمل الخدمات التقنية من دون طلب اسمك أو بريدك الإلكتروني.',
          },
          {
            icon: 'NT',
            title: 'بيانات الإشعارات',
            description:
              'قد تتم معالجة رمز الإشعارات الخاص بالجهاز، ونوع المنصة، وتفضيلات الاشتراك في الإشعارات حتى تصل التنبيهات التي يفعّلها المستخدم.',
          },
          {
            icon: 'PF',
            title: 'بيانات الأعطال والأداء',
            description:
              'قد نعالج تقارير الأعطال، وسجلات الأخطاء، ومقاييس الأداء، وقياسات طلبات الشبكة لتحسين استقرار التطبيق.',
          },
          {
            icon: 'AD',
            title: 'بيانات الإعلانات',
            description:
              'عند عرض الإعلانات، قد يعالج Google AdMob معرف الإعلانات، ومعرف مجموعة التطبيق، وبيانات تفاعل الإعلانات، وبيانات التشخيص، وبيانات تقنية لازمة لعرض الإعلانات وقياسها ومنع الاحتيال.',
          },
          {
            icon: 'LC',
            title: 'بيانات محفوظة على الجهاز',
            description:
              'يحفظ التطبيق محلياً لغة الواجهة، وتفضيلات الإشعارات، وبعض بيانات الجدول العامة مؤقتاً لتحسين سرعة التحميل.',
          },
        ],
      },
      {
        id: 'not-requested',
        icon: '03',
        title: 'ما لا يطلبه التطبيق',
        subtitle: 'نحافظ على الصلاحيات محدودة',
        paragraphs: [
          'التطبيق لا يطلب الوصول إلى الموقع الدقيق أو الكاميرا أو الميكروفون أو جهات الاتصال أو الصور أو الرسائل أو معلومات الدفع.',
        ],
        chips: [
          'لا موقع دقيق',
          'لا كاميرا',
          'لا ميكروفون',
          'لا جهات اتصال',
          'لا بيانات دفع',
        ],
      },
      {
        id: 'uses',
        icon: '04',
        title: 'كيف نستخدم البيانات',
        subtitle: 'الاستخدامات المرتبطة بتشغيل الخدمة',
        bullets: [
          'تشغيل ميزات التطبيق وتقديم نتائج المباريات والأخبار الرياضية.',
          'إرسال الإشعارات التي يفعّلها المستخدم وإدارة اشتراكاته فيها.',
          'اكتشاف الأعطال، وقياس الأداء، وتحسين الاستقرار.',
          'عرض الإعلانات داخل التطبيق وقياس أدائها والحد من الاحتيال الإعلاني.',
          'حفظ التفضيلات المحلية لتقديم تجربة متسقة عند العودة إلى التطبيق.',
          'حماية الخدمة والتحقق من سلامة التشغيل التقني.',
        ],
      },
      {
        id: 'sharing',
        icon: '05',
        title: 'المشاركة والخدمات المساندة',
        subtitle: 'مع من قد تتم معالجة البيانات',
        services: [
          {
            icon: 'FB',
            title: 'Google Firebase',
            description:
              'نستخدم Firebase Authentication وFirestore وCloud Messaging وCrashlytics وPerformance Monitoring لتشغيل المصادقة المجهولة، والإشعارات، والتخزين التقني، وتقارير الأعطال، وقياس الأداء.',
            url: 'https://policies.google.com/privacy',
            linkLabel: 'سياسة خصوصية Google',
          },
          {
            icon: 'AM',
            title: 'Google AdMob',
            description:
              'نستخدم Google AdMob لعرض الإعلانات. قد تعالج Google وشركاؤها بيانات إعلانية وتقنية حسب إعدادات المستخدم والقوانين المطبقة.',
            url: 'https://policies.google.com/technologies/ads',
            linkLabel: 'سياسات إعلانات Google',
          },
          {
            icon: 'IN',
            title: 'مزودو البنية التحتية',
            description:
              'قد تتم معالجة البيانات التقنية الضرورية عبر مزودي الاستضافة والشبكات الذين يساعدوننا على تشغيل التطبيق وتقديم المحتوى.',
          },
        ],
        notice: 'نحن لا نبيع بيانات المستخدمين ولا نؤجرها لأطراف أخرى.',
      },
      {
        id: 'permissions',
        icon: '06',
        title: 'الصلاحيات والتخزين المحلي',
        subtitle: 'ما يستخدمه التطبيق على جهازك',
        permissions: [
          {
            title: 'الإنترنت وحالة الشبكة',
            description: 'لجلب المحتوى العام والتحقق من الاتصال.',
          },
          {
            title: 'الإشعارات',
            description: 'لإرسال التنبيهات التي تختار تفعيلها.',
          },
          {
            title: 'الاهتزاز',
            description: 'لدعم تنبيه الإشعارات عند السماح به من النظام.',
          },
        ],
      },
      {
        id: 'security',
        icon: '07',
        title: 'الأمان والاحتفاظ والحذف',
        subtitle: 'كيف نحمي البيانات ومدة بقائها',
        paragraphs: [
          'نستخدم إجراءات تقنية مناسبة للحد من الوصول غير المصرح به، لكن لا توجد وسيلة نقل أو تخزين إلكتروني تضمن أماناً مطلقاً.',
          'نحتفظ بالبيانات فقط للمدة اللازمة لتشغيل الوظائف الموضحة أعلاه أو للالتزام بالمتطلبات القانونية والتنظيمية.',
          'لا يوفّر التطبيق إنشاء حساب شخصي باسم أو بريد داخل التطبيق. يمكنك طلب حذف أي بيانات مرتبطة بالمعرف المجهول أو مراسلات الدعم عبر التواصل معنا.',
        ],
      },
      {
        id: 'choices',
        icon: '08',
        title: 'اختياراتك',
        subtitle: 'كيف تتحكم في تجربتك',
        bullets: [
          'يمكنك إيقاف إشعارات الأخبار من داخل إعدادات التطبيق.',
          'يمكنك التحكم في إذن الإشعارات من إعدادات نظام التشغيل.',
          'يمكنك إعادة ضبط معرف الإعلانات أو الحد من تخصيص الإعلانات من إعدادات جهازك، وقد تظهر لك خيارات موافقة إضافية عند الحاجة قانونياً.',
          'يمكنك إزالة البيانات المحلية بمسح بيانات التطبيق أو بإلغاء تثبيته.',
        ],
      },
      {
        id: 'contact',
        icon: '09',
        title: 'التواصل معنا',
        subtitle: 'للاستفسارات أو طلبات الخصوصية',
        paragraphs: [
          'إذا كان لديك سؤال أو طلب متعلق بالخصوصية، يمكنك مراسلتنا على البريد التالي:',
        ],
        email: 'support@kooralive.info',
      },
    ],
  },
  en: {
    meta: {
      title: 'Privacy Policy | koora info',
      description:
        'Privacy Policy for koora info: data processed by the app, how it is used, service providers, and user choices.',
    },
    actions: {
      theme: 'Theme',
      language: 'العربية',
      print: 'Print',
    },
    hero: {
      kicker: 'Data protection',
      title: 'Privacy Policy',
      summary:
        'A clear summary of what the app actually processes, why it is needed, and how you stay in control.',
      effective: 'Effective May 17, 2026',
      updated: 'Updated May 17, 2026',
      noSelling: 'No data selling',
    },
    footer: {
      updated: 'Last updated: May 17, 2026',
    },
    sections: [
      {
        id: 'scope',
        icon: '01',
        title: 'Scope of this policy',
        subtitle: 'What this page covers',
        paragraphs: [
          'This policy explains how koora info handles the data needed to provide match results, sports news, notifications, and app reliability. It describes the current behavior implemented in the released app.',
        ],
      },
      {
        id: 'data',
        icon: '02',
        title: 'Data we process',
        subtitle: 'The categories the app actually relies on',
        facts: [
          {
            icon: 'ID',
            title: 'Anonymous app identifier',
            description:
              'The app creates an anonymous identifier through Firebase Authentication so technical services can work without asking for your name or email address.',
          },
          {
            icon: 'NT',
            title: 'Notification data',
            description:
              'The device notification token, platform type, and notification preferences may be processed so enabled alerts can be delivered.',
          },
          {
            icon: 'PF',
            title: 'Crash and performance data',
            description:
              'Crash reports, error logs, performance metrics, and network request measurements may be processed to improve app reliability.',
          },
          {
            icon: 'AD',
            title: 'Advertising data',
            description:
              'When ads are shown, Google AdMob may process the advertising ID, app set ID, ad interaction data, diagnostics, and technical data needed to serve ads, measure ads, and prevent fraud.',
          },
          {
            icon: 'LC',
            title: 'Data stored on device',
            description:
              'The app stores the selected language, notification preferences, and some public schedule data locally to improve loading speed.',
          },
        ],
      },
      {
        id: 'not-requested',
        icon: '03',
        title: 'What the app does not request',
        subtitle: 'Permissions are kept limited',
        paragraphs: [
          'The app does not request access to precise location, camera, microphone, contacts, photos, messages, or payment information.',
        ],
        chips: [
          'No precise location',
          'No camera',
          'No microphone',
          'No contacts',
          'No payment data',
        ],
      },
      {
        id: 'uses',
        icon: '04',
        title: 'How we use data',
        subtitle: 'Uses tied to operating the service',
        bullets: [
          'Operate app features and provide match results and sports news.',
          'Deliver the notifications enabled by the user and manage those subscriptions.',
          'Detect crashes, measure performance, and improve reliability.',
          'Show ads in the app, measure ad performance, and reduce ad fraud.',
          'Remember local preferences so the experience stays consistent when you return.',
          'Protect the service and verify healthy technical operation.',
        ],
      },
      {
        id: 'sharing',
        icon: '05',
        title: 'Sharing and service providers',
        subtitle: 'Who may process data for us',
        services: [
          {
            icon: 'FB',
            title: 'Google Firebase',
            description:
              'We use Firebase Authentication, Firestore, Cloud Messaging, Crashlytics, and Performance Monitoring for anonymous authentication, notifications, technical storage, crash reports, and performance measurement.',
            url: 'https://policies.google.com/privacy',
            linkLabel: 'Google Privacy Policy',
          },
          {
            icon: 'AM',
            title: 'Google AdMob',
            description:
              'We use Google AdMob to display ads. Google and its partners may process advertising and technical data depending on user settings and applicable laws.',
            url: 'https://policies.google.com/technologies/ads',
            linkLabel: 'Google Ads Policies',
          },
          {
            icon: 'IN',
            title: 'Infrastructure providers',
            description:
              'Necessary technical data may be processed by hosting and network providers that help us operate the app and deliver content.',
          },
        ],
        notice: 'We do not sell or rent user data to third parties.',
      },
      {
        id: 'permissions',
        icon: '06',
        title: 'Permissions and local storage',
        subtitle: 'What the app uses on your device',
        permissions: [
          {
            title: 'Internet and network state',
            description: 'To load public content and detect connectivity.',
          },
          {
            title: 'Notifications',
            description: 'To send the alerts you choose to enable.',
          },
          {
            title: 'Vibration',
            description:
              'To support notification alerts when allowed by the system.',
          },
        ],
      },
      {
        id: 'security',
        icon: '07',
        title: 'Security, retention, and deletion',
        subtitle: 'How data is protected and retained',
        paragraphs: [
          'We use appropriate technical measures to reduce unauthorized access, but no electronic transmission or storage method can guarantee absolute security.',
          'We retain data only for as long as needed to operate the purposes described above or to meet legal and regulatory obligations.',
          'The app does not offer personal account creation with a name or email inside the app. You may request deletion of data linked to the anonymous identifier or support correspondence by contacting us.',
        ],
      },
      {
        id: 'choices',
        icon: '08',
        title: 'Your choices',
        subtitle: 'How you control your experience',
        bullets: [
          'You can disable news notifications from the app settings.',
          'You can control notification permission from the operating system settings.',
          'You can reset the advertising ID or limit ad personalization from your device settings, and additional consent choices may be shown where legally required.',
          'You can remove local data by clearing the app data or uninstalling the app.',
        ],
      },
      {
        id: 'contact',
        icon: '09',
        title: 'Contact us',
        subtitle: 'For questions or privacy requests',
        paragraphs: [
          'If you have a privacy question or request, you can contact us at:',
        ],
        email: 'support@kooralive.info',
      },
    ],
  },
};

const state = {
  language:
    localStorage.getItem('kooraInfoPrivacyLanguage') ||
    (navigator.language.toLowerCase().startsWith('ar') ? 'ar' : 'en'),
  theme:
    localStorage.getItem('kooraInfoPrivacyTheme') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'),
};

const sectionContainer = document.getElementById('policy-sections');
const languageToggle = document.getElementById('language-toggle');
const themeToggle = document.getElementById('theme-toggle');
const printButton = document.getElementById('print-button');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderParagraphs(paragraphs = []) {
  return paragraphs.map((text) => `<p class="paragraph">${escapeHtml(text)}</p>`).join('');
}

function renderFacts(items = []) {
  if (!items.length) return '';
  return `
    <div class="item-list">
      ${items
        .map(
          (item) => `
            <article class="fact">
              <span class="item-icon" aria-hidden="true">${escapeHtml(item.icon)}</span>
              <div>
                <h3>${escapeHtml(item.title)}</h3>
                <p class="paragraph">${escapeHtml(item.description)}</p>
              </div>
            </article>
          `,
        )
        .join('')}
    </div>
  `;
}

function renderChips(items = []) {
  if (!items.length) return '';
  return `<div class="chips">${items.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join('')}</div>`;
}

function renderBullets(items = []) {
  if (!items.length) return '';
  return `
    <ul class="bullet-list">
      ${items
        .map(
          (item) => `
            <li>
              <span class="check-icon" aria-hidden="true">✓</span>
              <span>${escapeHtml(item)}</span>
            </li>
          `,
        )
        .join('')}
    </ul>
  `;
}

function renderServices(items = [], notice = '') {
  if (!items.length) return '';
  const services = items
    .map((item) => {
      const link = item.url
        ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.linkLabel)}</a>`
        : '';
      return `
        <article class="service">
          <span class="item-icon" aria-hidden="true">${escapeHtml(item.icon)}</span>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p class="paragraph">${escapeHtml(item.description)}</p>
            ${link}
          </div>
        </article>
      `;
    })
    .join('');

  return `
    <div class="item-list">${services}</div>
    ${notice ? `<div class="notice">${escapeHtml(notice)}</div>` : ''}
  `;
}

function renderPermissions(items = []) {
  if (!items.length) return '';
  return `
    <div class="item-list">
      ${items
        .map(
          (item) => `
            <article class="permission">
              <span class="item-icon" aria-hidden="true">•</span>
              <div>
                <h3>${escapeHtml(item.title)}</h3>
                <p class="paragraph">${escapeHtml(item.description)}</p>
              </div>
            </article>
          `,
        )
        .join('')}
    </div>
  `;
}

function renderEmail(email) {
  if (!email) return '';
  return `<a class="mail-button" href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`;
}

function renderSection(section) {
  return `
    <section class="section-card" id="${escapeHtml(section.id)}">
      <header class="section-header">
        <span class="section-icon" aria-hidden="true">${escapeHtml(section.icon)}</span>
        <div>
          <h2>${escapeHtml(section.title)}</h2>
          <p class="section-subtitle">${escapeHtml(section.subtitle)}</p>
        </div>
      </header>
      ${renderParagraphs(section.paragraphs)}
      ${renderFacts(section.facts)}
      ${renderChips(section.chips)}
      ${renderBullets(section.bullets)}
      ${renderServices(section.services, section.notice)}
      ${renderPermissions(section.permissions)}
      ${renderEmail(section.email)}
    </section>
  `;
}

function applyTranslations() {
  const copy = policyData[state.language];

  document.documentElement.lang = state.language;
  document.documentElement.dir = state.language === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dataset.theme = state.theme;
  document.title = copy.meta.title;
  document.querySelector('.lang-icon').textContent =
    state.language === 'ar' ? 'EN' : 'ع';

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute('content', copy.meta.description);
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const path = element.dataset.i18n.split('.');
    const value = path.reduce((current, key) => current?.[key], copy);
    if (typeof value === 'string') {
      element.textContent = value;
    }
  });

  sectionContainer.innerHTML = copy.sections.map(renderSection).join('');
}

languageToggle.addEventListener('click', () => {
  state.language = state.language === 'ar' ? 'en' : 'ar';
  localStorage.setItem('kooraInfoPrivacyLanguage', state.language);
  applyTranslations();
});

themeToggle.addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('kooraInfoPrivacyTheme', state.theme);
  applyTranslations();
});

printButton.addEventListener('click', () => {
  window.print();
});

applyTranslations();

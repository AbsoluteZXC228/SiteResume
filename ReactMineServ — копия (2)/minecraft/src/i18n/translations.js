export const translations = {
  ru: {
    meta: {
      title: 'senseless | Портфолио',
    },
    header: {
      brandAlt: 'Логотип портфолио',
      menuAria: 'Открыть меню',
      cta: 'Связаться',
      languageAria: 'Переключить язык',
      nav: [
        { href: '#about', label: 'Обо мне' },
        { href: '#skills', label: 'Навыки' },
        { href: '#projects', label: 'Проекты' },
        { href: '#experience', label: 'Опыт' },
        { href: '#contact', label: 'Контакты' },
      ],
    },
    hero: {
      eyebrow: 'Портфолио разработчика',
      name: 'Андрей',
      photoLabel: 'Фотография',
      photoAlt: 'Андрей',
      subline: 'Python, C#, C++. Инженерный подход, аккуратная архитектура и стабильный результат.',
      primaryCta: 'Смотреть проекты',
      secondaryCta: 'Связаться',
      scrollAria: 'Прокрутить вниз',
      badges: ['Упор на производительность', 'Системное мышление', 'Чистая архитектура'],
    },
    about: {
      eyebrow: 'Обо мне',
      title: 'Собираю сложные системы и довожу их до стабильного результата',
      intro:
        'Я, Андрей, разработчик, которому важно, чтобы код был понятным, быстрым и надежным. Люблю задачи, где нужно строить архитектуру, оптимизировать узкие места и доводить продукт до состояния, когда он стабильно работает под нагрузкой.',
      cards: [
        {
          title: 'Инженерный стиль',
          body: 'Сначала архитектура, потом детали. Предпочитаю прозрачные интерфейсы, четкие границы модулей и документацию, которая экономит время команды.',
        },
        {
          title: 'Оптимизация и стабильность',
          body: 'Люблю профилировать, измерять и ускорять. Если функция мешает производительности, ищу баланс, чтобы продукт оставался быстрым и удобным.',
        },
        {
          title: 'Командная дисциплина',
          body: 'Умею объяснять решения, держать фокус на результате и помогать коллегам двигаться быстрее. Ответственность за код - это часть профессии, а не формальность.',
        },
        {
          title: '3 ключевых языка',
          body: 'Python, C#, C++',
        },
      ],
    },
    skills: {
      eyebrow: 'Навыки',
      title: 'Технический профиль',
      note: 'Языки и подходы, с которыми уверенно работаю каждый день.',
      cards: [
        {
          title: 'Python',
          items: ['Backend-логика', 'Скрипты и автоматизация', 'API и интеграции'],
        },
        {
          title: 'C#',
          items: ['.NET сервисы', 'Инструменты под Windows', 'Чистые архитектуры'],
        },
        {
          title: 'C++',
          items: ['Производительные модули', 'Алгоритмы', 'Низкоуровневые оптимизации'],
        },
      ],
      extraTitle: 'Дополнительно',
      extra: ['Git и командные процессы', 'Паттерны проектирования', 'Отладка и профилирование', 'Тестирование и качество'],
    },
    projects: {
      eyebrow: 'Проекты',
      title: 'Избранные работы',
      note: 'Ниже представлены примеры подходов и решений. При необходимости могу раскрыть детали, сроки и метрики по каждому кейсу.',
      cards: [
        {
          title: 'Сервис аналитики матчей',
          role: 'Backend-разработка',
          stack: 'Python, PostgreSQL, REST API',
          items: [
            'Сбор и нормализация событий в единую модель',
            'Кэширование запросов и ускорение выдачи статистики',
            'Чистая структура модулей с тестами',
          ],
        },
        {
          title: 'Инструмент автоматизации билдов',
          role: 'Скрипты и Dev-процессы',
          stack: 'C#, PowerShell, CI',
          items: [
            'Автоматическое формирование релизов и артефактов',
            'Проверки качества до сборки',
            'Логи и диагностические отчеты для команды',
          ],
        },
        {
          title: 'Высокопроизводительный модуль',
          role: 'Оптимизация ядра',
          stack: 'C++, STL, профилирование',
          items: [
            'Снижение задержек в критических участках',
            'Оптимизация памяти и алгоритмов',
            'Документирование решений и ограничений',
          ],
        },
      ],
      strongTitle: 'Что усиливаю',
      strong: ['Стабильность под нагрузкой', 'Прозрачная архитектура', 'Скорость разработки без потери качества'],
      guardTitle: 'Чего избегаю',
      guard: ['Сырые функции без тестов', 'Непредсказуемые зависимости', 'Случайный магический код'],
    },
    experience: {
      eyebrow: 'Опыт',
      title: 'Развитие навыков',
      note: 'Последовательно усиливаю техническую экспертизу и качество инженерных решений.',
      timeline: [
        {
          period: '2024 - сейчас',
          title: 'Разработка инструментов и сервисов',
          items: [
            'Разработка внутренних сервисов и утилит для команды',
            'Оптимизация задач, где важна скорость отклика',
            'Фокус на документации и повторяемости решений',
          ],
        },
        {
          period: '2024 - 2026',
          title: 'Системное программирование и алгоритмы',
          items: [
            'Проекты на C++ с упором на производительность',
            'Оптимизация памяти и вычислений',
            'Разработка модульных библиотек',
          ],
        },
        {
          period: '2023 - 2026',
          title: 'Python и автоматизация',
          items: [
            'Скрипты для обработки данных и отчетности',
            'API-интеграции и сервисная логика',
            'Первые проекты в команде и участие в хакатоне в 2025',
          ],
        },
      ],
    },
    footer: {
      summary: 'Портфолио разработчика с фокусом на инженерии, производительности и надежных решениях.',
      contactsTitle: 'Контакты',
      focusTitle: 'Фокус',
      github: 'GitHub: AbsoluteZXC228',
      focus: [
        'Проекты на Python, C# и C++.',
        'Оптимизация, backend, инфраструктура и инструменты.',
        'Готов обсудить задачи, сроки и формат сотрудничества.',
      ],
      copyright: '© 2026 Senseless. Все права защищены.',
    },
  },
  en: {
    meta: {
      title: 'senseless | Portfolio',
    },
    header: {
      brandAlt: 'Portfolio logo',
      menuAria: 'Open menu',
      cta: 'Contact',
      languageAria: 'Switch language',
      nav: [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
      ],
    },
    hero: {
      eyebrow: 'Developer Portfolio',
      name: 'Andrey',
      photoLabel: 'Portrait',
      photoAlt: 'Andrey',
      subline: 'Python, C#, C++. Engineering mindset, clean architecture, and reliable delivery.',
      primaryCta: 'View Projects',
      secondaryCta: 'Contact',
      scrollAria: 'Scroll down',
      badges: ['Performance-first', 'Systems thinking', 'Clean architecture'],
    },
    about: {
      eyebrow: 'About',
      title: 'I build complex systems and bring them to a stable result',
      intro:
        'I am Andrey, a developer who cares about code being clear, fast, and reliable. I enjoy tasks where architecture matters, bottlenecks need to be optimized, and the product has to stay stable under real load.',
      cards: [
        {
          title: 'Engineering mindset',
          body: 'Architecture first, details second. I prefer transparent interfaces, clear module boundaries, and documentation that saves the team time.',
        },
        {
          title: 'Optimization and stability',
          body: 'I like profiling, measuring, and making systems faster. If a feature hurts performance, I look for the right balance so the product stays fast and practical.',
        },
        {
          title: 'Team discipline',
          body: 'I can explain decisions clearly, stay focused on the outcome, and help teammates move faster. Responsibility for code is part of the craft, not a formality.',
        },
        {
          title: '3 core languages',
          body: 'Python, C#, C++',
        },
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technical Profile',
      note: 'Languages and approaches I work with confidently every day.',
      cards: [
        {
          title: 'Python',
          items: ['Backend logic', 'Scripting and automation', 'APIs and integrations'],
        },
        {
          title: 'C#',
          items: ['.NET services', 'Windows tooling', 'Clean architectures'],
        },
        {
          title: 'C++',
          items: ['High-performance modules', 'Algorithms', 'Low-level optimization'],
        },
      ],
      extraTitle: 'Additional',
      extra: ['Git and team workflows', 'Design patterns', 'Debugging and profiling', 'Testing and quality'],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected Work',
      note: 'Below are examples of approaches and solutions. If needed, I can share more details, timing, and metrics for each case.',
      cards: [
        {
          title: 'Match analytics service',
          role: 'Backend development',
          stack: 'Python, PostgreSQL, REST API',
          items: [
            'Collected and normalized events into a unified data model',
            'Cached requests to speed up statistics delivery',
            'Kept the module structure clean and covered with tests',
          ],
        },
        {
          title: 'Build automation tool',
          role: 'Scripts and Dev workflows',
          stack: 'C#, PowerShell, CI',
          items: [
            'Automated release and artifact generation',
            'Added quality checks before each build',
            'Produced logs and diagnostic reports for the team',
          ],
        },
        {
          title: 'High-performance module',
          role: 'Core optimization',
          stack: 'C++, STL, profiling',
          items: [
            'Reduced latency in critical execution paths',
            'Optimized memory usage and algorithms',
            'Documented decisions and technical constraints',
          ],
        },
      ],
      strongTitle: 'What I strengthen',
      strong: ['Stability under load', 'Transparent architecture', 'Delivery speed without losing quality'],
      guardTitle: 'What I avoid',
      guard: ['Untested raw features', 'Unpredictable dependencies', 'Random magic code'],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Skill Growth',
      note: 'I steadily deepen technical expertise and improve the quality of engineering decisions.',
      timeline: [
        {
          period: '2024 - now',
          title: 'Building tools and services',
          items: [
            'Created internal services and utilities for the team',
            'Optimized tasks where response time matters',
            'Focused on documentation and repeatable solutions',
          ],
        },
        {
          period: '2024 - 2026',
          title: 'Systems programming and algorithms',
          items: [
            'Worked on C++ projects with a strong performance focus',
            'Optimized memory usage and computation',
            'Built modular libraries',
          ],
        },
        {
          period: '2023 - 2026',
          title: 'Python and automation',
          items: [
            'Built scripts for data processing and reporting',
            'Handled API integrations and service logic',
            'Joined team projects and took part in a 2025 hackathon',
          ],
        },
      ],
    },
    footer: {
      summary: 'Developer portfolio focused on engineering, performance, and reliable solutions.',
      contactsTitle: 'Contacts',
      focusTitle: 'Focus',
      github: 'GitHub: AbsoluteZXC228',
      focus: [
        'Projects in Python, C#, and C++.',
        'Optimization, backend, infrastructure, and tooling.',
        'Open to discussing tasks, timelines, and collaboration format.',
      ],
      copyright: '© 2026 Senseless. All rights reserved.',
    },
  },
}

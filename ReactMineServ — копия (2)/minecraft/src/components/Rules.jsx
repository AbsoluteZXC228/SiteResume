const projects = [
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
]

const focusStrong = [
  'Стабильность под нагрузкой',
  'Прозрачная архитектура',
  'Скорость разработки без потери качества',
]

const focusGuard = [
  'Сырые функции без тестов',
  'Непредсказуемые зависимости',
  'Случайный магический код',
]

export default function Rules() {
  return (
    <section id="projects" className="section projects-section">
      <div className="projects-ambient" aria-hidden="true">
        <div className="projects-ambient__wash"></div>
        <div className="projects-ambient__blueprint"></div>
        <div className="projects-ambient__route projects-ambient__route-a"></div>
        <div className="projects-ambient__route projects-ambient__route-b"></div>
        <div className="projects-ambient__route projects-ambient__route-c"></div>
        <div className="projects-ambient__module projects-ambient__module-a"></div>
        <div className="projects-ambient__module projects-ambient__module-b"></div>
        <div className="projects-ambient__module projects-ambient__module-c"></div>
        <div className="projects-ambient__beacon projects-ambient__beacon-a"></div>
        <div className="projects-ambient__beacon projects-ambient__beacon-b"></div>
      </div>

      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Проекты</p>
          <h2>Избранные работы</h2>
          <p className="rules-note">
            Ниже представлены примеры подходов и решений. При необходимости могу раскрыть детали,
            сроки и метрики по каждому кейсу.
          </p>
        </div>

        <div className="rules-grid">
          {projects.map((project) => (
            <article key={project.title} className="panel rule-panel">
              <h3>{project.title}</h3>
              <p className="project-meta">{project.role} • {project.stack}</p>
              <ul>
                {project.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="rules-quick-grid">
          <article className="quick-card quick-yes">
            <h3>Что усиливаю</h3>
            <ul>
              {focusStrong.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="quick-card quick-no">
            <h3>Чего избегаю</h3>
            <ul>
              {focusGuard.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

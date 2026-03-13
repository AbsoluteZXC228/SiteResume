const timeline = [
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
      'Первые проекты в команде и участие в Хакатоне в 2025',
    ],
  },
]

export default function History() {
  return (
    <section id="experience" className="section history-section">
      <div className="history-ambient" aria-hidden="true">
        <div className="history-ambient__wash"></div>
        <div className="history-ambient__path"></div>
        <div className="history-ambient__arc history-ambient__arc-a"></div>
        <div className="history-ambient__arc history-ambient__arc-b"></div>
        <div className="history-ambient__arc history-ambient__arc-c"></div>
        <div className="history-ambient__node history-ambient__node-a"></div>
        <div className="history-ambient__node history-ambient__node-b"></div>
        <div className="history-ambient__node history-ambient__node-c"></div>
        <div className="history-ambient__node history-ambient__node-d"></div>
        <div className="history-ambient__trail history-ambient__trail-a"></div>
        <div className="history-ambient__trail history-ambient__trail-b"></div>
      </div>

      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Опыт</p>
          <h2>Развитие навыков</h2>
          <p className="rules-note">
            Последовательно усиливаю техническую экспертизу и качество инженерных решений.
          </p>
        </div>

        <div className="history-grid">
          {timeline.map((item) => (
            <article key={item.title} className="panel history-card">
              <span className="history-period">{item.period}</span>
              <h3>{item.title}</h3>
              <ul className="history-list">
                {item.items.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
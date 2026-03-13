import { useLanguage } from '../context/LanguageContext'

export default function History() {
  const { t } = useLanguage()

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
          <p className="eyebrow">{t.experience.eyebrow}</p>
          <h2>{t.experience.title}</h2>
          <p className="rules-note">{t.experience.note}</p>
        </div>

        <div className="history-grid">
          {t.experience.timeline.map((item) => (
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

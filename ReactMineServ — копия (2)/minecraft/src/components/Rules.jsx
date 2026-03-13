import { useLanguage } from '../context/LanguageContext'

export default function Rules() {
  const { t } = useLanguage()

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
          <p className="eyebrow">{t.projects.eyebrow}</p>
          <h2>{t.projects.title}</h2>
          <p className="rules-note">{t.projects.note}</p>
        </div>

        <div className="rules-grid">
          {t.projects.cards.map((project) => (
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
            <h3>{t.projects.strongTitle}</h3>
            <ul>
              {t.projects.strong.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="quick-card quick-no">
            <h3>{t.projects.guardTitle}</h3>
            <ul>
              {t.projects.guard.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

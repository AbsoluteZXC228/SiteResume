import { useState } from 'react'
import projectPreview from '../Logo/logo.jpg'
import pluginPreview from '../Logo/plagin.png'
import { useLanguage } from '../context/LanguageContext'

const projectImages = {
  reactmine: projectPreview,
  plugin: pluginPreview,
}

export default function Rules() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = t.projects.cards[activeIndex] ?? t.projects.cards[0]

  const goToProject = (index) => {
    setActiveIndex(index)
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % t.projects.cards.length)
  }

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

        <div className="project-carousel project-carousel--side">
          <div className="project-carousel__main">
            <div className="rules-grid rules-grid--featured">
              <article key={activeProject.id ?? activeProject.title} className="panel rule-panel rule-panel--featured rule-panel--animated-soft">
                <div className="rule-panel__media">
                  <img src={projectImages[activeProject.id] ?? projectPreview} alt={activeProject.title} className="rule-panel__image" />
                  <div className="rule-panel__shine"></div>
                  <div className="rule-panel__glow"></div>
                </div>

                <div className="rule-panel__content">
                  <p className="project-meta">{activeProject.role} • {activeProject.stack}</p>
                  <h3>{activeProject.title}</h3>
                  <p className="rule-panel__summary">{activeProject.summary}</p>
                  <ul>
                    {activeProject.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>

            <div className="project-carousel__dots" aria-label="Project indicators">
              {t.projects.cards.map((project, index) => (
                <button
                  key={project.id ?? project.title}
                  type="button"
                  className={`project-carousel__dot ${index === activeIndex ? 'is-active' : ''}`}
                  aria-label={project.title}
                  onClick={() => goToProject(index)}
                ></button>
              ))}
            </div>
          </div>

          <button type="button" className="project-carousel__side-button" onClick={showNext} aria-label="Next project">
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

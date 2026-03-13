import SkillsMatrixRain from './SkillsMatrixRain'
import { useLanguage } from '../context/LanguageContext'

export default function ServerMap() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section section-alt skills-section">
      <div className="skills-ambient" aria-hidden="true">
        <SkillsMatrixRain />
        <div className="skills-ambient__vignette"></div>
        <div className="skills-ambient__glow skills-ambient__glow-left"></div>
        <div className="skills-ambient__glow skills-ambient__glow-right"></div>
      </div>
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{t.skills.eyebrow}</p>
          <h2>{t.skills.title}</h2>
          <p className="rules-note">{t.skills.note}</p>
        </div>

        <div className="skills-grid">
          {t.skills.cards.map((skill) => (
            <article key={skill.title} className="panel skill-card">
              <h3>{skill.title}</h3>
              <ul>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="skills-extra panel">
          <h3>{t.skills.extraTitle}</h3>
          <div className="skills-tags">
            {t.skills.extra.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import siteHeroVideo from '../Logo/fon/FonZ.mp4'
import portfolioPhoto from '../Logo/Oblojka/Oblojka.jpg'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="hero hero-landing">
      <video className="hero-bg-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src={siteHeroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-split">
          <div className="hero-left">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>
              <span className="brand-ember">{t.hero.name}</span>
            </h1>
            <p className="hero-subline">{t.hero.subline}</p>

            <div className="hero-actions">
              <a href="#projects" className="btn hero-btn-primary">
                {t.hero.primaryCta}
              </a>
              <a href="#contact" className="btn hero-btn-secondary">
                {t.hero.secondaryCta}
              </a>
            </div>

            <div className="hero-promo-line">
              {t.hero.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-photo" aria-label={t.hero.photoLabel}>
              <img src={portfolioPhoto} alt={t.hero.photoAlt} className="hero-photo-image" />
            </div>
          </div>
        </div>

        <a href="#about" className="hero-scroll-indicator" aria-label={t.hero.scrollAria}>
          ↓
        </a>
      </div>
    </section>
  )
}

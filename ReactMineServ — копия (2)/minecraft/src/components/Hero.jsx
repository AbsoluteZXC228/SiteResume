import siteHeroVideo from '../Logo/fon/FonZ.mp4'
import portfolioPhoto from '../Logo/Oblojka/Oblojka.jpg'

export default function Hero() {
  return (
    <section id="top" className="hero hero-landing">
      <video className="hero-bg-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src={siteHeroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-split">
          <div className="hero-left">
            <p className="eyebrow">Портфолио разработчика</p>
            <h1>
              <span className="brand-ember">Андрей</span> <span className="brand-saga">Толкунов</span>
            </h1>
            <p className="hero-subline">
              Python, C#, C++. Инженерный подход, аккуратная архитектура и стабильный результат.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn hero-btn-primary">
                Смотреть проекты
              </a>
              <a href="#contact" className="btn hero-btn-secondary">
                Связаться
              </a>
            </div>

            <div className="hero-promo-line">
              <span>Упор на производительность</span>
              <span>Системное мышление</span>
              <span>Чистая архитектура</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-photo" aria-label="Фотография Андрея Толкунова">
              <img src={portfolioPhoto} alt="Андрей Толкунов" className="hero-photo-image" />
            </div>
          </div>
        </div>

        <a href="#about" className="hero-scroll-indicator" aria-label="Прокрутить вниз">
          ↓
        </a>
      </div>
    </section>
  )
}

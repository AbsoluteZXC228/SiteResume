import engineerImage from '../Logo/Bloki/Injener.jpg'
import optimizationImage from '../Logo/Bloki/Optimazion.png'
import teamImage from '../Logo/Bloki/komanda.png'
import languagesImage from '../Logo/Bloki/3yasika.png'
import { useLanguage } from '../context/LanguageContext'

const aboutImages = [engineerImage, optimizationImage, teamImage, languagesImage]

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section about-section">
      <div className="about-ambient" aria-hidden="true">
        <div className="about-ambient__grid"></div>
        <div className="about-ambient__orb about-ambient__orb-left"></div>
        <div className="about-ambient__orb about-ambient__orb-right"></div>
        <div className="about-ambient__beam about-ambient__beam-a"></div>
        <div className="about-ambient__beam about-ambient__beam-b"></div>
        <div className="about-ambient__ring about-ambient__ring-a"></div>
        <div className="about-ambient__ring about-ambient__ring-b"></div>
        <div className="about-ambient__scan"></div>
        <div className="about-ambient__node about-ambient__node-a"></div>
        <div className="about-ambient__node about-ambient__node-b"></div>
        <div className="about-ambient__node about-ambient__node-c"></div>
        <div className="about-ambient__noise"></div>
      </div>
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2>{t.about.title}</h2>
          <p className="rules-note">{t.about.intro}</p>
        </div>

        <div className="about-grid">
          {t.about.cards.map((card, index) => (
            <article key={card.title} className="panel panel-media">
              <div className="panel-media__visual" aria-hidden="true">
                <img src={aboutImages[index]} alt="" />
              </div>
              <div className="panel-media__content">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

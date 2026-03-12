import engineerImage from '../Logo/Bloki/Injener.jpg'
import optimizationImage from '../Logo/Bloki/Optimazion.png'
import teamImage from '../Logo/Bloki/komanda.png'
import languagesImage from '../Logo/Bloki/3yasika.png'

export default function About() {
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
          <p className="eyebrow">Обо мне</p>
          <h2>Собираю сложные системы и довожу их до стабильного результата</h2>
          <p className="rules-note">
            Я, Андрей Толкунов, разработчик, которому важно, чтобы код был понятным, быстрым и надежным.
            Люблю задачи, где нужно строить архитектуру, оптимизировать узкие места и доводить продукт
            до состояния, когда он стабильно работает под нагрузкой.
          </p>
        </div>

        <div className="about-grid">
          <article className="panel panel-media">
            <div className="panel-media__visual" aria-hidden="true">
              <img src={engineerImage} alt="" />
            </div>
            <div className="panel-media__content">
              <h3>Инженерный стиль</h3>
              <p>
                Сначала архитектура, потом детали. Предпочитаю прозрачные интерфейсы, четкие границы модулей
                и документацию, которая экономит время команды.
              </p>
            </div>
          </article>

          <article className="panel panel-media">
            <div className="panel-media__visual" aria-hidden="true">
              <img src={optimizationImage} alt="" />
            </div>
            <div className="panel-media__content">
              <h3>Оптимизация и стабильность</h3>
              <p>
                Люблю профилировать, измерять и ускорять. Если функция мешает производительности, ищу баланс,
                чтобы продукт оставался быстрым и удобным.
              </p>
            </div>
          </article>

          <article className="panel panel-media">
            <div className="panel-media__visual" aria-hidden="true">
              <img src={teamImage} alt="" />
            </div>
            <div className="panel-media__content">
              <h3>Командная дисциплина</h3>
              <p>
                Умею объяснять решения, держать фокус на результате и помогать коллегам двигаться быстрее.
                Ответственность за код - это часть профессии, а не формальность.
              </p>
            </div>
          </article>

          <article className="panel panel-media">
            <div className="panel-media__visual" aria-hidden="true">
              <img src={languagesImage} alt="" />
            </div>
            <div className="panel-media__content">
              <h3>3 ключевых языка</h3>
              <p>Python, C#, C++</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

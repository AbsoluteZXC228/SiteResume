import engineerImage from '../Logo/Bloki/Injener.jpg'
import optimizationImage from '../Logo/Bloki/Optimazion.png'
import teamImage from '../Logo/Bloki/komanda.png'

export default function About() {
  return (
    <section id="about" className="section">
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
        </div>

        <div className="about-metrics">
          <div>
            <strong>3</strong>
            <span>ключевых языка: Python, C#, C++</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>рост и самообучение</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>ориентация на качество</span>
          </div>
        </div>
      </div>
    </section>
  )
}

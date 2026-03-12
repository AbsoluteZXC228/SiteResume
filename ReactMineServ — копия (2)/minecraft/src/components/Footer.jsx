export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>
            <span className="brand-ember">SENSELESS</span>
          </h3>
          <p>Портфолио разработчика с фокусом на инженерии, производительности и надежных решениях.</p>
        </div>

        <div>
          <h4>Контакты</h4>
          <ul>
            <li>
              <a href="mailto:andrey.tolkunov@email.ru">andrey.tolkunov@email.ru</a>
            </li>
            <li>
              <a href="https://t.me/your_telegram" target="_blank" rel="noreferrer">
                Telegram: @your_telegram
              </a>
            </li>
            <li>
              <a href="https://github.com/AbsoluteZXC228" target="_blank" rel="noreferrer">
                GitHub: AbsoluteZXC228
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Фокус</h4>
          <ul>
            <li>Проекты на Python, C# и C++.</li>
            <li>Оптимизация, backend, инфраструктура и инструменты.</li>
            <li>Готов обсудить задачи, сроки и формат сотрудничества.</li>
          </ul>
        </div>
      </div>

      <div className="container footer-copy">
        <p>© 2026 Senseless. Все права защищены.</p>
      </div>
    </footer>
  )
}
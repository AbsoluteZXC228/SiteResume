import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>
            <span className="brand-ember">SENSELESS</span>
          </h3>
          <p>{t.footer.summary}</p>
        </div>

        <div>
          <h4>{t.footer.contactsTitle}</h4>
          <ul>
            <li>
              <a href="mailto:andrey.tolkunov@email.ru">andrey.tolkunov@email.ru</a>
            </li>
            <li>
              <a href="https://github.com/AbsoluteZXC228" target="_blank" rel="noreferrer">
                {t.footer.github}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>{t.footer.focusTitle}</h4>
          <ul>
            {t.footer.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-copy">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  )
}

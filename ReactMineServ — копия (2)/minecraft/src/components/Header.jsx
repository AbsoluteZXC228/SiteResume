import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const languages = ['ru', 'en']

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const navItems = t.header.nav

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#about')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const [languageIndicatorStyle, setLanguageIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })

  const capsuleRef = useRef(null)
  const linkRefs = useRef({})
  const languageCapsuleRef = useRef(null)
  const languageRefs = useRef({})

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href)

    const syncFromPage = () => {
      const scrollY = window.scrollY + 160
      const viewportBottom = window.scrollY + window.innerHeight
      const pageBottom = document.documentElement.scrollHeight
      let nextHref = sectionIds[0]

      if (pageBottom - viewportBottom <= 24) {
        setActiveHref('#contact')
        return
      }

      for (const href of sectionIds) {
        const section = document.querySelector(href)
        if (!section) {
          continue
        }

        if (section.offsetTop <= scrollY) {
          nextHref = href
        }
      }

      setActiveHref(nextHref)
    }

    syncFromPage()
    window.addEventListener('scroll', syncFromPage, { passive: true })
    window.addEventListener('resize', syncFromPage)
    window.addEventListener('hashchange', syncFromPage)

    return () => {
      window.removeEventListener('scroll', syncFromPage)
      window.removeEventListener('resize', syncFromPage)
      window.removeEventListener('hashchange', syncFromPage)
    }
  }, [navItems])

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const activeEl = linkRefs.current[activeHref]
      const capsule = capsuleRef.current

      if (!activeEl || !capsule || isMenuOpen) {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }))
        return
      }

      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1,
      })
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)

    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeHref, isMenuOpen, navItems])

  useLayoutEffect(() => {
    const updateLanguageIndicator = () => {
      const activeEl = languageRefs.current[language]
      const capsule = languageCapsuleRef.current

      if (!activeEl || !capsule) {
        setLanguageIndicatorStyle((prev) => ({ ...prev, opacity: 0 }))
        return
      }

      setLanguageIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1,
      })
    }

    updateLanguageIndicator()
    window.addEventListener('resize', updateLanguageIndicator)

    return () => window.removeEventListener('resize', updateLanguageIndicator)
  }, [language, isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-ember">senseless</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={t.header.menuAria}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header-nav ${isMenuOpen ? 'header-nav-open' : ''}`}>
          <div className="fancy-menu">
            <div className="fancy-menu__capsule" ref={capsuleRef}>
              <span className="fancy-menu__indicator" style={indicatorStyle} />
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  ref={(node) => {
                    linkRefs.current[item.href] = node
                  }}
                  className={`fancy-menu__link ${activeHref === item.href ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveHref(item.href)
                    closeMenu()
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="language-switcher" aria-label={t.header.languageAria}>
            <div className="fancy-menu__capsule language-switcher__capsule" ref={languageCapsuleRef}>
              <span className="fancy-menu__indicator" style={languageIndicatorStyle} />
              {languages.map((item) => (
                <button
                  key={item}
                  type="button"
                  ref={(node) => {
                    languageRefs.current[item] = node
                  }}
                  className={`fancy-menu__link language-switcher__button ${language === item ? 'is-active' : ''}`}
                  onClick={() => setLanguage(item)}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <a className="btn btn-small header-cta" href="#contact" onClick={closeMenu}>
            {t.header.cta}
          </a>
        </nav>
      </div>
    </header>
  )
}

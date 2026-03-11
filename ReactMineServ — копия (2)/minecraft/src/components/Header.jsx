import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import serverLogo from '../Logo/logo.jpg'

const navItems = [
  { href: '#about', label: 'Обо мне' },
  { href: '#skills', label: 'Навыки' },
  { href: '#projects', label: 'Проекты' },
  { href: '#experience', label: 'Опыт' },
  { href: '#contact', label: 'Контакты' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#about')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })

  const capsuleRef = useRef(null)
  const linkRefs = useRef({})

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href)

    const syncFromPage = () => {
      const scrollY = window.scrollY + 160
      let nextHref = sectionIds[0]

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
  }, [])

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
  }, [activeHref, isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={closeMenu}>
          <img src={serverLogo} alt="Логотип портфолио Андрея Толкунова" className="brand-logo" />
          <span className="brand-ember">ANDREY</span>
          <span className="brand-saga">TOLKUNOV</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Открыть меню"
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

          <a className="btn btn-small header-cta" href="#contact" onClick={closeMenu}>
            Связаться
          </a>
        </nav>
      </div>
    </header>
  )
}

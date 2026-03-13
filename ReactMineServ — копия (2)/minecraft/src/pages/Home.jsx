import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import History from '../components/History'
import Rules from '../components/Rules'
import ServerMap from '../components/ServerMap'
import Footer from '../components/Footer'

const sectionSelectors = ['#top', '#about', '#skills', '#projects', '#experience', '#contact']
const desktopBreakpoint = 980
const wheelThreshold = 45
const scrollLockMs = 850

export default function Home() {
  useEffect(() => {
    let wheelDelta = 0
    let isLocked = false
    let lockTimer = null

    const getHeaderOffset = () => {
      const header = document.querySelector('.site-header')
      return header ? header.offsetHeight : 0
    }

    const getSections = () => sectionSelectors
      .map((selector) => document.querySelector(selector))
      .filter(Boolean)

    const isNearPageBottom = () => {
      const viewportBottom = window.scrollY + window.innerHeight
      const pageBottom = document.documentElement.scrollHeight
      return pageBottom - viewportBottom <= 24
    }

    const getCurrentSectionIndex = (sections, headerOffset) => {
      if (isNearPageBottom()) {
        return sections.length - 1
      }

      const targetY = window.scrollY + headerOffset + 24
      let closestIndex = 0

      sections.forEach((section, index) => {
        if (section.offsetTop <= targetY) {
          closestIndex = index
        }
      })

      return closestIndex
    }

    const scrollToSection = (section) => {
      const top = Math.max(section.offsetTop - getHeaderOffset(), 0)
      window.scrollTo({ top, behavior: 'smooth' })
    }

    const lockScroll = () => {
      isLocked = true
      window.clearTimeout(lockTimer)
      lockTimer = window.setTimeout(() => {
        isLocked = false
      }, scrollLockMs)
    }

    const handleWheel = (event) => {
      if (window.innerWidth <= desktopBreakpoint) {
        return
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      if (isLocked) {
        event.preventDefault()
        return
      }

      wheelDelta += event.deltaY

      if (Math.abs(wheelDelta) < wheelThreshold) {
        return
      }

      const sections = getSections()
      if (!sections.length) {
        wheelDelta = 0
        return
      }

      const direction = wheelDelta > 0 ? 1 : -1
      const currentIndex = getCurrentSectionIndex(sections, getHeaderOffset())
      const nextIndex = Math.min(Math.max(currentIndex + direction, 0), sections.length - 1)

      wheelDelta = 0

      if (nextIndex === currentIndex) {
        return
      }

      event.preventDefault()
      lockScroll()
      scrollToSection(sections[nextIndex])
    }

    const resetWheel = () => {
      wheelDelta = 0
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('resize', resetWheel)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('resize', resetWheel)
      window.clearTimeout(lockTimer)
    }
  }, [])

  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <Hero />
        <div className="hero-static-transition" aria-hidden="true"></div>
        <About />
        <ServerMap />
        <Rules />
        <History />
      </main>
      <Footer />
    </div>
  )
}

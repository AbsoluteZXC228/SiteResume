import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import History from '../components/History'
import Rules from '../components/Rules'
import ServerMap from '../components/ServerMap'
import Footer from '../components/Footer'

export default function Home() {
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
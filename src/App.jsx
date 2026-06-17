import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Training from './components/Training'
import Consulting from './components/Consulting'
import CaseStudies from './components/CaseStudies'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Training />
        <Consulting />
        <CaseStudies />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

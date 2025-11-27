import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Awards from './components/Awards'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-deep-slate">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Awards />
      <Footer />
    </div>
  )
}

export default App


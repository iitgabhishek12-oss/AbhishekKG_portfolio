import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Experience from './components/Experience'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Expertise />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App

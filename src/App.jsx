import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Archievements from './components/Archievements'
import Gallery from './components/Gallery'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Expertise />
      <Experience />
      <Certifications />
      <Archievements />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App

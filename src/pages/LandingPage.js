import React from 'react'
import Header from 'src/components/Header'
import 'src/App.css';
import Landing from 'src/components/Landing';
import AboutMe from 'src/components/AboutMe';
import Skills from 'src/components/Skills'
import Projects from 'src/components/Projects';
import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
function LandingPage() {
  return (
    <main>
        <Header />
        <Landing />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </main>
  )
}

export default LandingPage
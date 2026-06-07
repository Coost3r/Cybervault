import { useState } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import ThreatSimulations from './components/ThreatSimulations'
import CyberHygiene from './components/CyberHygiene'
import HackerProfiles from './components/HackerProfiles'
import Quiz from './components/Quiz'
import FeedbackForm from './components/FeedbackForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <ParallaxProvider>
      <div className="app">
        <div className="matrix-background"></div>
        <Navigation />
        <div className="content">
          <section id="home">
            <Hero />
          </section>
          <section id="simulations">
            <ThreatSimulations />
          </section>
          <section id="hygiene">
            <CyberHygiene />
          </section>
          <section id="quiz">
            <Quiz />
          </section>
          <section id="hackers">
            <HackerProfiles />
          </section>
          <section id="community">
            <FeedbackForm />
          </section>
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default App

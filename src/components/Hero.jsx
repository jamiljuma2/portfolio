
import React from 'react'
import profileImg from '../assets/PORTFOLIO IMAGE.jpeg'

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-flex">
        <div className="hero-content">
          <h1 className="hero-headline">
            I build production-ready web applications with Django & React.
          </h1>
          <p className="hero-subheadline">
            Backend-focused full-stack developer specializing in authentication, payments, admin dashboards, and scalable APIs.
          </p>
          <div className="hero-ctas">
            <button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('projects')}
              aria-label="View my projects"
            >
              View Projects
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => scrollToSection('contact')}
              aria-label="Contact me"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={profileImg}
            alt="Portrait of Jamil Juma, Product-Focused Full-Stack Developer"
            className="hero-profile-img"
            loading="lazy"
            width="220"
            height="220"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero


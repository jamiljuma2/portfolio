import React, { useState, useEffect } from 'react'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          BARASA JUMA JAMIL
        </div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('projects')} aria-label="View projects">Projects</button></li>
          <li><button onClick={() => scrollToSection('skills')} aria-label="View skills">Skills</button></li>
          <li><button onClick={() => scrollToSection('about')} aria-label="View about">About</button></li>
          <li><button onClick={() => scrollToSection('contact')} aria-label="Contact me">Contact</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation


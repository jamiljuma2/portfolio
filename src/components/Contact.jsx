import React from 'react'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-cta">Let's build something together.</p>
          <div className="contact-links">
            <a 
              href="mailto:jumajamil314@gmail.com" 
              className="contact-link"
              aria-label="Send email to Jamil Juma"
            >
              Email
            </a>
            <a 
              href="https://wa.me/254700686463" 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Jamil Juma on WhatsApp"
            >
              WhatsApp
            </a>
            <a 
              href="https://github.com/yourusername" 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Jamil Juma's GitHub profile"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Jamil Juma's LinkedIn profile"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


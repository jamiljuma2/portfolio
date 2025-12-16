import React from 'react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Writer–Student Marketplace Platform',
      emoji: '🔥',
      problem: 'Students need quality academic assistance while writers need a trusted system to access paid work.',
      features: [
        'Role-based authentication (Admin, Writer, Student)',
        'Assignment posting and bidding workflow',
        'Secure payment handling and wallet system',
        'Admin approval before payouts',
        'End-to-end workflow management'
      ],
      techStack: 'Django, Django REST Framework, React, PostgreSQL, Payments API',
      demoUrl: 'https://login-gamma-livid-63.vercel.app',
      githubUrl: 'https://github.com/jamiljuma2/LOGIN'
    },
    {
      id: 2,
      title: 'Online Restaurant Web Application',
      emoji: '🧾',
      problem: 'Restaurants need a fast, mobile-friendly digital ordering system that customers can access easily.',
      features: [
        'Digital menu display',
        'Category-based food listing',
        'Order placement workflow',
        'QR-code-friendly design',
        'Admin-managed menu updates'
      ],
      techStack: 'React, Django REST Framework, PostgreSQL',
      demoUrl: 'https://cafe-seven-zeta.vercel.app',
      githubUrl: 'https://github.com/jamiljuma2/cafe-'
    },
    {
      id: 3,
      title: 'Subscription-Based SaaS Dashboard',
      emoji: '📊',
      problem: 'Businesses require a secure platform to manage users and paid subscriptions.',
      features: [
        'User authentication',
        'Subscription payment integration',
        'Admin dashboard',
        'Usage tracking and access control'
      ],
      techStack: 'Django, React, Stripe (or sandbox), PostgreSQL',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Business Admin Management System',
      emoji: '🛠️',
      problem: 'Businesses need a centralized and secure system to manage internal data.',
      features: [
        'CRUD operations',
        'Role-based permissions',
        'Secure backend API',
        'Production-ready deployment setup'
      ],
      techStack: 'Django REST Framework, React, PostgreSQL',
      demoUrl: 'https://my-django-project-1-0k73.onrender.com',
      githubUrl: 'https://github.com/jamiljuma2/My-django-project'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <span className="project-emoji" role="img" aria-label={project.title}>{project.emoji}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="project-content">
                <div className="project-problem">
                  <strong>Problem:</strong>
                  <p>{project.problem}</p>
                </div>
                <div className="project-features">
                  <strong>Key Features:</strong>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-tech">
                  <strong>Tech Stack:</strong>
                  <p>{project.techStack}</p>
                </div>
              </div>
              <div className="project-actions">
                <a 
                  href={project.demoUrl} 
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                >
                  Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


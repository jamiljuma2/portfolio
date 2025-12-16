import React from 'react'

function Skills() {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['React (Vite)', 'HTML5 / CSS3', 'Responsive & mobile-first UI']
    },
    {
      title: 'Backend',
      skills: ['Django', 'Django REST Framework', 'Authentication & Authorization', 'Role-Based Access Control']
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'Data modeling & relationships']
    },
    {
      title: 'Payments & Integrations',
      skills: ['Stripe / Mobile Payments', 'Webhooks']
    },
    {
      title: 'Development & Deployment',
      skills: ['Git & GitHub', 'Vercel (Frontend)', 'Render / Fly.io (Backend)', 'Environment variables & production configuration']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div key={index} className="skill-group">
              <h3 className="skill-group-title">{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


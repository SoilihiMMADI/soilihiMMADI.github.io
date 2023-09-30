import './index.scss'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <>
      <Button onClick={toggleSidebar} className="toggle-open-button">
        Ouvrir
      </Button>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <Button onClick={toggleSidebar} className="toggle-close-button">
          Fermer
        </Button>
        <nav>
          <NavLink onClick={toggleSidebar} exact="true" to="/" className="home-link">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink onClick={toggleSidebar} exact="true" to="project" className="project-link">
            <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
          </NavLink>
          <NavLink onClick={toggleSidebar} exact="true" to="contact" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/soilihi-mmadi/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/SoilihiMMADI"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      </div>
    </>
  )
}

export default Sidebar

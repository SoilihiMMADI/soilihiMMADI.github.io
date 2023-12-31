import './index.scss'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faEnvelope,
  faHome,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import MyButtonClose from '../MyButtonClose'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <>
      <button onClick={toggleSidebar} className="toggle-open-button">
        <FontAwesomeIcon icon={faBars} color="#fff" />
      </button>
      <div className={`sidebar shadow-lg ${sidebarOpen ? 'open' : ''}`}>
        <div className="div-close">
        <MyButtonClose onClose={toggleSidebar} />
        </div>
        <nav>
          <NavLink
            onClick={toggleSidebar}
            exact="true"
            to="/"
            className="home-link"
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" className='test'/>
          </NavLink>
          <NavLink
            onClick={toggleSidebar}
            exact="true"
            to="project"
            className="project-link"
          >
            <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
          </NavLink>
          <NavLink
            onClick={toggleSidebar}
            exact="true"
            to="contact"
            className="contact-link"
          >
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
      <div className="overlay"></div>
    </>
  )
}

export default Sidebar

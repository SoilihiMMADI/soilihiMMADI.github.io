import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <footer>
        <h2 className='mb-2'>Soilihi M'MADI</h2>
        <div className="link-zone mb-2">
          <a
            href="https://www.linkedin.com/in/soilihi-mmadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#fff" />
          </a>
          <a
            href="https://github.com/SoilihiMMADI"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-3"
          >
            <FontAwesomeIcon icon={faGithub} color="#fff" />
          </a>
        </div>
        <h3>© 2023 copyright all right reserved</h3>
      </footer>
    </>
  )
}

export default Footer

import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SeparatorVertical from '../SeparatorVertical'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_2l27uwm',
        'template_af1zeqo',
        form.current,
        '8BwcezrP3bsyM9VfX'
      )
      .then(
        () => {
          alert('Message envoyé!')
          window.location.reload(false)
        },
        () => {
          alert('Une erreur est survenue! Veuillez réessayer.')
        }
      )
  }

  return (
    <>
      <Container fluid>
        <div className="section contact-page">
          <div className="contact-part">
            <div className="part-1">
              <div className="text-zone">
                <h1 className="text-center mb-4 title-contact">ME CONTACTER</h1>
                <p className="text-contact">
                  Je suis actuellement à la recherche d'une entreprise pour
                  conclure mon année de Master 2.
                </p>
                <p className="text-contact">
                  Si vous êtes intéressé par mon profil ou que vous connaissez
                  quelqu'un dans votre entourage qui le serait, n'héistez pas à
                  me contacter via se formulaire et à jetter un coup d'oeil à
                  mon Linkedin et mon GitHub{' '}
                  <FontAwesomeIcon icon={faSmile} color="#2faee0" />.
                </p>
              </div>
              <div className="link-zone">
                <a
                  href="https://www.linkedin.com/in/soilihi-mmadi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-4"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#bea064" />
                </a>
                <a
                  href="https://github.com/SoilihiMMADI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-4"
                >
                  <FontAwesomeIcon icon={faGithub} color="#bea064" />
                </a>
              </div>
            </div>

            <SeparatorVertical />

            <div className="part-2">
              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3 div-name-email">
                    <input
                      placeholder="Nom"
                      type="text"
                      name="user_name"
                      required
                      className="input-name shadow"
                    />
                    <input
                      placeholder="Email"
                      type="email"
                      name="user_email"
                      required
                      className="input-email shadow"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      placeholder="Objet"
                      type="text"
                      name="subject"
                      required
                      className="input-subject shadow"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                      className="textarea-message shadow"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn-send shadow">
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Contact

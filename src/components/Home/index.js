import { Container } from 'react-bootstrap'
import './index.scss'
import PictureHome from '../../assets/images/PhotoHome.png'
import CV from '../../assets/images/CV.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faBootstrap,
  faCss3,
  faHtml5,
  faJs,
  faPhp,
  faReact,
  faSymfony,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Separator from '../Separator'
import Loader from 'react-loaders'

const Home = () => {

  return (
    <>
      <div className="home-page">
        <Container fluid>
          <section
            className="home-top section"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            <div className="text-zone-top-home">
              <h1 className="title-top-home">
                Bonjour, je suis Soilihi M'MADI
                <br />{' '}
                <span className="important">Développeur Web / Mobile</span>.
              </h1>
              <div className="btn-home-top">
                <Link to="/contact" className="btn-contact shadow">
                  CONTACT
                </Link>
              </div>
            </div>
            <div className="home-img">
              <img src={PictureHome} alt="accueil" className=" shadow" />
            </div>
          </section>

          <Separator />

          {/* ===== ABOUT =====  */}
          <section className="home-about section text-center" id="about">
            <h2 className="section-title mb-5" data-aos="fade-up">
              À PROPOS
            </h2>

            <div className="about-container">
              <div className="home-about-text-zone" data-aos="fade-up">
                <p className="home-about-text">
                  <span className="first">Bonjour</span>,je suis {' '}
                  <span className="important">Développeur WEB/MOBILE</span>, une
                  année et 6 mois d'expérience en alternance dans lesquelles
                  j'ai pu acquérir des compétences en programmation avec des
                  frameworks comme Angular,{' '}
                  <span className="important">Symfony</span>, Ionic,{' '}
                  <span className="important">React</span>,{' '}
                  <span className="important">React Native</span> et consolider
                  les compétences que j'avais déjà.
                  <br />
                  Je n'ai pas d'objection ou de crainte au fait de devoir
                  apprendre un langage ou framework que je ne maîtrise pas.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* ===== SKILLS ===== */}
          <section className="home-skills section">
            <h2 className="section-title text-center mb-5" data-aos="fade-up">
              COMPÉTENCES
            </h2>

            <div className="skills-container">
              <div className="skills-part-1">
                <h2 className="skills-subtitle mb-4" data-aos="fade-up">
                  Développement Web / Mobile
                </h2>
                <p className="home-skills-text-zone mb-4" data-aos="fade-up">
                  Voici les principales compétences que j'ai pu acquérir en
                  développement web et mobile.
                </p>
                <div className="skills-data-group">
                  <div className="skills-data-g1">
                    <div className="skills-data shadow" data-aos="fade-up">
                      <div className="skills-names">
                        <div>
                          <FontAwesomeIcon
                            icon={faHtml5}
                            color="#bea064"
                            className="anchor-icon"
                          />
                          <FontAwesomeIcon
                            icon={faCss3}
                            color="#bea064"
                            className="anchor-icon"
                          />
                        </div>
                        <span className="skills-name">HTML/CSS</span>
                      </div>
                    </div>
                    <div className="skills-data shadow" data-aos="fade-up">
                      <div className="skills-names">
                        <FontAwesomeIcon
                          icon={faJs}
                          color="#bea064"
                          className="anchor-icon"
                        />
                        <span className="skills-name">JavaScript</span>
                      </div>
                    </div>
                    <div className="skills-data shadow" data-aos="fade-up">
                      <div className="skills-names">
                        <FontAwesomeIcon
                          icon={faPhp}
                          color="#bea064"
                          className="anchor-icon"
                        />
                        <span className="skills-name">PHP</span>
                      </div>
                    </div>
                    <div className="skills-data shadow" data-aos="fade-up">
                      <div className="skills-names">
                        <FontAwesomeIcon
                          icon={faDatabase}
                          color="#bea064"
                          className="anchor-icon"
                        />
                        <span className="skills-name">SQL</span>
                      </div>
                    </div>
                    <div className="skills-data shadow" data-aos="fade-up">
                      <div className="skills-names">
                        <FontAwesomeIcon
                          icon={faBootstrap}
                          color="#bea064"
                          className="anchor-icon"
                        />
                        <span className="skills-name">Bootstrap</span>
                      </div>
                    </div>
                  </div>
                  <div className="skills-data-g2">
                    <div className="skills-data shadow" data-aos="fade-up">
                      <div className="skills-names">
                        <FontAwesomeIcon
                          icon={faSymfony}
                          color="#bea064"
                          className="anchor-icon"
                        />
                        <span className="skills-name">Symfony</span>
                      </div>
                    </div>
                    <div className="skills-data shadow" data-aos="fade-up">
                      <div className="skills-names">
                        <FontAwesomeIcon
                          icon={faReact}
                          color="#bea064"
                          className="anchor-icon"
                        />
                        <span className="skills-name">React.js</span>
                      </div>
                    </div>
                    <div className="skills-data shadow" data-aos="fade-up">
                      <div className="skills-names">
                        <FontAwesomeIcon
                          icon={faReact}
                          color="#bea064"
                          className="anchor-icon"
                        />
                        <span className="skills-name">React Native</span>
                      </div>
                    </div>
                    <div className="skills-data shadow" data-aos="fade-up">
                      <div className="skills-names">
                        <FontAwesomeIcon
                          icon={faVuejs}
                          color="#bea064"
                          className="anchor-icon"
                        />
                        <span className="skills-name">Vue.js</span>
                      </div>
                    </div>
                    <div className="skills-data shadow" data-aos="fade-up">
                      <div className="skills-names">
                        <FontAwesomeIcon
                          icon={faAngular}
                          color="#bea064"
                          className="anchor-icon"
                        />
                        <span className="skills-name">Angular</span>
                      </div>
                    </div>
                    <div className="skills-data shadow" data-aos="fade-up">
                      <div className="skills-names justify-content-end">
                        <span className="skills-name">Ionic</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills-part-2" data-aos="fade-up">
                <h2 className="mb-5 cv-title">CV</h2>
                
                <Link to="/contact" className="btn-contact">
                <img src={CV} alt="skills" className="skills-img shadow"/>
                </Link>
              </div>
            </div>
          </section>
        </Container>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Home

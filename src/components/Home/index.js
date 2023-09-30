import { Container } from 'react-bootstrap'
import './index.scss'
import PictureHome from '../../assets/images/PhotoHome.png'
import WorkSkills from '../../assets/images/WorkSkills.jpg'

const Home = () => {
  return (
    <div className="home-page">
      <Container fluid>
        <section className="home-top section">
          <div className="text-zone-top-home">
            <h1 className="title-top-home">
              Bonjour, je suis Soilihi M'MADI
              <br /> Apprenti Développeur full-stack
            </h1>
            <div className="btn-home-top">
              <button className="btn">Contact</button>
            </div>
          </div>
          <div className="home-img">
            <img src={PictureHome} alt="accueil" />
          </div>
        </section>

        {/* ===== ABOUT =====  */}
        <section className="home-about section text-center" id="about">
          <h2 className="section-title mb-5">À PROPOS</h2>

          <div className="about-container">
            <div className="home-about-text-zone">
              <h2 className="home-about-subtitle mb-4">Bonjour,</h2>
              <p className="home-about-text">
                Développeur WEB/MOBILE, une année et 6 mois d'expérience en
                alternance dans lesquelles j'ai pu acquérir des compétences en
                programmations avec des frameworks comme Angular, Symfony,
                Ionic, React, React Native et consolidé les compétences que
                j'avais déjà.
                <br />
                Je n'ai pas d'objection ou de crainte au fait de devoir
                apprendre un langage ou framework que je ne maîtrise pas.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SKILLS ===== */}
        <section className="home-skills section">
          <h2 className="section-title text-center mb-5">COMPÉTENCES</h2>

          <div className="skills-container">
            <div className="skills-part-1">
              <h2 className="skills-subtitle mb-4">Développement web</h2>
              <p className="home-skills-text-zone">
                Voici mes principales compétences que j'ai pu acquérir en
                développement web.
              </p>
              <div className="skills-data-group">
                <div className="skills-data-g1">
                  <div className="skills-data">
                    <div className="skills-names">
                      <i className="bx bxl-html5 skills-icon"></i>
                      <span className="skills-name">HTML/CSS</span>
                    </div>
                  </div>
                  <div className="skills-data">
                    <div className="skills-names">
                      <i className="bx bxl-javascript skills__icon"></i>
                      <span className="skills-name">JAVASCRIPT</span>
                    </div>
                  </div>
                  <div className="skills-data">
                    <div className="skills-names">
                      <i className="bx bx-php skills-icon"></i>
                      <span className="skills-name">PHP</span>
                    </div>
                  </div>
                  <div className="skills-data">
                    <div className="skills-names">
                      <i className="bx bx-php skills-icon"></i>
                      <span className="skills-name">SQL</span>
                    </div>
                  </div>
                  <div className="skills-data">
                    <div className="skills-names">
                      <i className="bx bxl-php skills-icon"></i>
                      <span className="skills-name">BOOTSTRAP</span>
                    </div>
                  </div>
                </div>
                <div className="skills-data-g2">
                  <div className="skills-data">
                    <div className="skills-names">
                      <i className="bx bx-php skills-icon"></i>
                      <span className="skills-name">Symfony</span>
                    </div>
                  </div>
                  <div className="skills-data">
                    <div className="skills-names">
                      <i className="bx bx-php skills-icon"></i>
                      <span className="skills-name">
                        React.js, React Native
                      </span>
                    </div>
                  </div>
                  <div className="skills-data">
                    <div className="skills-names">
                      <i className="bx bx-php skills-icon"></i>
                      <span className="skills-name">Vue.js</span>
                    </div>
                  </div>
                  <div className="skills-data">
                    <div className="skills-names">
                      <i className="bx bx-php skills-icon"></i>
                      <span className="skills-name">Angular</span>
                    </div>
                  </div>
                  <div className="skills-data">
                    <div className="skills-names">
                      <i className="bx bx-php skills-icon"></i>
                      <span className="skills-name">Ionic</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-part-2">
              <img src={WorkSkills} alt="skills" className="skills-img" />
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Home

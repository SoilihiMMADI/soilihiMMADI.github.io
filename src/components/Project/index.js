import './index.scss'
import WorkProjectTop from '../../assets/images/WorkSkills.jpg'
import { Container } from 'react-bootstrap'
import MyModal from '../Modal'

const Project = () => {
  return (
    <div className="project-page">
      <Container fluid>
        <section className="section project-top">
          <h1 className="title-top-project">Projets</h1>
          <div className="text-zone-top-project">
            <div className="project-img">
              <img src={WorkProjectTop} alt="projet top" />
            </div>
            <div className="project-top-text">
              <p>
                Voici quelques projets que j'ai pu réaliser jusqu'à aujourd'hui.
              </p>
              <p>
                Vous pourrez y trouver entre autre des porjets scolaire et
                personnels.
              </p>
              <p>
                Je garde ces projets sur mon GitHub, d'une part, pour pouvoir
                avoir un aperçu de mon évolution, mais aussi pour réutiliser
                certaines parties si je me retrouve dans le besoin.
              </p>
            </div>
          </div>
        </section>
        {/* ===== PROJECTS ===== */}
        <section className="section project-list">
          <div class="project-container bd-grid">
            <MyModal imgButton={WorkProjectTop} title={'AFC'}>
              <div className="container-my-modal">
                <div className="example-img-project">
                  <div className="project-img">
                    <img src={WorkProjectTop} alt="page d'accueil" />
                  </div>
                  <div className="project-img">
                    <img src={WorkProjectTop} alt="page à propos" />
                  </div>
                  <div className="project-img">
                    <img src={WorkProjectTop} alt="page contact" />
                  </div>
                </div>
                <div className="text-zone-my-modal">
                  <h3>Projet scolaire</h3>
                  <p>
                    Projet réalisé en tant que PPE au cours de mes années de
                    BTS.
                  </p>
                  <p>
                    📊 Le projet AFC (Appli Frais Comptable) s'articule autour
                    du développement du module dédié aux comptables, visant à
                    approuver et à surveiller les remboursements des frais de
                    déplacement saisis par les visiteurs.
                  </p>
                  <p>
                    👨‍💻 Dans le cadre de cette initiative, nous disposions d'une
                    base de code existante, sur laquelle il nous incombait
                    d'incorporer des fonctionnalités additionnelles, de corriger
                    des anomalies et de garantir, en fin de parcours,
                    l'opérationnalité de l'application pour les comptables de
                    GSB. Cette entreprise s'inscrit ainsi en parfaite synergie
                    avec le projet GCR, auquel nous avions préalablement
                    contribué.
                  </p>
                  <p>
                    🤝 Ce projet s'est avéré être une expérience collective, où
                    nous avons œuvré en groupe afin d'accroître notre aptitude
                    au travail d'équipe. Les membres les plus compétents et
                    expérimentés ont eu l'opportunité d'apporter leur assistance
                    et leurs éclaircissements à leurs pairs moins aguerris,
                    lesquels ont également été en mesure de contribuer par leur
                    vigilance aux moments de logique et de correction d'erreurs.
                    Il convient de souligner que l'apport d'un regard extérieur
                    s'est souvent révélé décisif dans le déblocage de situations
                    complexes. 🚀
                  </p>
                  <p>
                    Compétences : HTML5 · PHP · SQL · Microsoft SQL Server · CSS
                    · JavaScript
                  </p>
                  <br />
                  <a
                    href="https://github.com/SoilihiMMADI/GCR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>GitHub</i>
                  </a>
                </div>
              </div>
            </MyModal>
            <MyModal imgButton={WorkProjectTop} title={'GCR'}>
              <div className="container-my-modal">
                <div className="example-img-project">
                  <div className="project-img">
                    <img src={WorkProjectTop} alt="page d'accueil" />
                  </div>
                  <div className="project-img">
                    <img src={WorkProjectTop} alt="page à propos" />
                  </div>
                  <div className="project-img">
                    <img src={WorkProjectTop} alt="page contact" />
                  </div>
                </div>
                <div className="text-zone-my-modal">
                  <h3>Projet scolaire</h3>
                  <p>
                    Projet réalisé en tant que PPE au cours de mes années de
                    BTS.
                  </p>
                  <p>
                    Ce projet est destiné à doter les visiteurs de GSB
                    (Laboratoire Galaxy Swiss Boudrin 🔬) d'un outil
                    informatique pour saisir les comptes rendus des visites
                    effectuées auprès des praticiens.
                  </p>
                  <p>
                    🎯 Le but de ce projet était d'apprendre le langage PHP, la
                    programmation orientée objet (POO) ainsi que la mise en
                    pratique avec HTML5, CSS3, JavaScript et SQL.{' '}
                  </p>
                  <p>
                    ⌨️ Technologies utilisées : PHP, HTML5/CSS3, JavaScript,
                    SQL/PhpMyAdmin.Ce projet est destiné à doter les visiteurs
                    de GSB (Laboratoire Galaxy Swiss Boudrin 🔬) d'un outil
                    informatique pour saisir les comptes rendus des visites
                    effectuées auprès des praticiens.
                  </p>
                  <p>Compétences : PhpMyAdmin · HTML5 · PHP · SQL · CSS · JavaScript</p>
                  <br />
                  <a
                    href="https://github.com/SoilihiMMADI/GCR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>GitHub</i>
                  </a>
                </div>
              </div>
            </MyModal>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Project

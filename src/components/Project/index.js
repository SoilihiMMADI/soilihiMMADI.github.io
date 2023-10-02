import './index.scss'
import WorkProjectTop from '../../assets/images/ProjectTop.jpg'
// MERASOIN
import LogoMS from '../../assets/images/merasoin/logoMS.png'
import BackOfficePageMS from '../../assets/images/merasoin/Back-OfficePage.png'
import LoginPageMS from '../../assets/images/merasoin/LoginPage.png'
import TraitementPageMS from '../../assets/images/merasoin/TraitementPage.png'

//ÉCO SERVICES
import LogoES from '../../assets/images/eco-service/logoEco.png'
import RegisterPageES from '../../assets/images/eco-service/RegisterPageES.png'
import HomePageES from '../../assets/images/eco-service/HomePageES.png'
import StorePageES from '../../assets/images/eco-service/StorePageES.png'
import BackOfficePageES from '../../assets/images/eco-service/BackOfficePageES.png'

// B.VICE
import LogoBVICE from '../../assets/images/bvice/LogoBVICE.png'
import Bvice from '../../assets/images/bvice/siteweb.png'

// AFC
// GCR
import LogoGSB from '../../assets/images/logoGSB.jpg'
import ConnexionVueGCR from '../../assets/images/gcr/connexion.jpg'
import PracticienVueGCR from '../../assets/images/gcr/vuePraticien.jpg'
import MedicineVueGCR from '../../assets/images/gcr/vueMedicament.jpg'

import { Container } from 'react-bootstrap'
import MyModal from '../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import Separator from '../Separator'

const Project = () => {
  return (
    <>
      <div className="project-page">
        <Container fluid>
          <section className="section project-top">
            <h1 className="section-title title-top-project text-center mb-5">
              PROJETS
            </h1>
            <div className="text-zone-top-project">
              <div className="project-top-text">
                <p>
                  Voici quelques projets que j'ai pu réaliser jusqu'à
                  aujourd'hui.
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
              <div className="project-img">
                <img src={WorkProjectTop} alt="projet top" className="shadow" />
              </div>
            </div>
          </section>

          <Separator />

          {/* ===== PROJECTS ===== */}
          <section className="section project-list">
            <div className="project-container bd-grid">
              <MyModal imgButton={LogoMS} title={'MeraSoin'}>
                <div className="container-my-modal">
                  <div className="example-img-project">
                    <div className="project-img">
                      <img src={LoginPageMS} alt="page de connexion" />
                    </div>
                    <div className="project-img">
                      <img src={TraitementPageMS} alt="page traitement" />
                    </div>
                    <div className="project-img">
                      <img
                        src={BackOfficePageMS}
                        alt="première page backoffice"
                      />
                    </div>
                  </div>
                  <div className="text-zone-my-modal">
                    <h3>Projet Institut G4</h3>
                    <p>
                      🏥 Dans un contexte où les infirmiers se trouvent
                      confrontés à des logiciels complexes et peu fiables dans
                      la gestion des EHPAD, ce projet vise à offrir une solution
                      efficace. Actuellement, l'utilisation de ces logiciels se
                      révèle chronophage et frustrante, incitant les infirmiers
                      à les éviter autant que possible.
                    </p>
                    <p>
                      🚀 La solution proposée consiste en le développement d'une
                      suite d'applications comprenant à la fois une version
                      mobile et une interface web. Ces applications seront
                      conçues avec une interface utilisateur intuitive,
                      garantissant une navigation aisée et une réactivité
                      optimale. Ainsi, les infirmiers pourront accéder
                      rapidement et facilement aux informations nécessaires,
                      simplifiant ainsi leur travail quotidien au sein des
                      EHPAD.
                    </p>
                    <p>
                      📊 Dans le cadre de ce projet, notre groupe avait pour
                      mission de concevoir un produit financé par un
                      investisseur fictif, en mettant en pratique les
                      compétences que nous avions acquises en développement
                      (web/mobile) et en gestion de projet. Cela incluait la
                      gestion d'équipe, la méthodologie SCRUM, la tenue de
                      réunions, ainsi que la coordination des comités de
                      pilotage (COPILs).
                    </p>
                    <p>
                      👨‍💻 En tant que développeur front, ma responsabilité était
                      de réaliser des tâches liées à la partie application web
                      du projet. J'ai travaillé en m'appuyant sur des maquettes
                      représentatives du site pour progresser vers le produit
                      final. Les tâches étaient consignées dans JIRA, où je
                      consultais la liste des tâches qui m'étaient attribuées,
                      les exécutais, enregistrais le temps passé, et les
                      marquais comme "terminées" pour que les responsables de la
                      qualité puissent les valider et les déployer en
                      production.
                    </p>
                    <p>
                      🚧 Les débuts ont été marqués par quelques difficultés,
                      principalement liées à ma familiarisation avec le
                      framework Vue.js et Vuetify, qui était nouveau pour moi.
                      Cependant, grâce à ma persévérance, l'utilisation de cet
                      outil est devenue de plus en plus fluide au fil du temps.
                    </p>
                    <p>
                      Compétences : Vuetify · Vue.js · Scrum · Git · Framework
                      Symfony
                    </p>
                    <br />
                  </div>
                </div>
              </MyModal>
              <MyModal imgButton={LogoES} title={'Éco Services'}>
                <div className="container-my-modal">
                  <div className="example-img-project">
                    <div className="project-img">
                      <img src={RegisterPageES} alt="page de connexion" />
                    </div>
                    <div className="project-img">
                      <img src={HomePageES} alt="page d'accueil" />
                    </div>
                    <div className="project-img">
                      <img src={StorePageES} alt="page magasin" />
                    </div>
                    <div className="project-img">
                      <img src={BackOfficePageES} alt="page backoffice" />
                    </div>
                  </div>
                  <div className="text-zone-my-modal">
                    <h3>Projet Institut G4</h3>
                    <p>
                      Le client Éco Services est un spécialiste dans le
                      recyclage (appareils électriques et électroniques usagés,
                      outils industriels, déchets organiques...). 🌱
                    </p>
                    <p>
                      Après 20 ans d'expérience, la société souhaite se
                      diversifier et proposer en plus de son activité
                      principale, de la vente au particulier des produits
                      éco-responsable jusqu'au zéro déchet. ♻️
                    </p>
                    <p>
                      💻 Technologies utilisées : (Front-end) TypeScript, Vue.js
                      et Vuetify / (Back-end) TypeScript, Node.js, Express et
                      Prisma.Projet scolaire.
                    </p>
                    <p>Compétences : TypeScript · Vuetify · Node.js · Vue.js</p>
                    <br />
                    <div className="d-flex justify-content-end">
                      <a
                        href="https://github.com/SammyMERAZGA/clientEcoServices"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          color="#4d4d4e"
                          className="anchor-icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </MyModal>
              <MyModal imgButton={LogoBVICE} title={'Stage B.VICE'}>
                <div className="container-my-modal">
                  <div className="example-img-project">
                    <div className="project-img">
                      <img src={Bvice} alt="page de connexion" />
                    </div>
                    <div className="project-img">
                      <img src={Bvice} alt="page médicament" />
                    </div>
                    <div className="project-img">
                      <img src={Bvice} alt="page praticien" />
                    </div>
                  </div>
                  <div className="text-zone-my-modal">
                    <h3>Projet BTS</h3>
                    <p>Projet réalisé pour un stage de BTS</p>
                    <p>
                      Pour ce projet j'avais la responsabilité de proposer un
                      site web pour une association du nom de Sound usical
                      School B.VICE. Étant donné qu'ils n'avaient d'idées des le
                      départ, j'avais essayé de prendre exemple sur des sites
                      simple que j'avais pu voir avec les pages classiques qui
                      sont disponibles sur les sites de présentation
                    </p>
                    <p>
                      🎯 Le but de ce projet était de mettre en pratique les
                      connaissances que j'avais pu acquérir à l'aide du BTS tout
                      en apprenant. C'étais aussi de nouveau apprentissage avec
                      de mon côté une première utilisation de Bootstrap. C'étais
                      ma première expérience que l'on peut dire professionnel
                      avec la création d'un site pour une assosication.
                    </p>
                    <p>
                      ⌨️ Technologies utilisées : PHP, HTML5/CSS3, JavaScript,
                      SQL/PhpMyAdmin, Bootstrap.Dans ce projet j'avais mis en
                      place un backoffice accessible seulement par les personnes
                      de l'association pour gérer les articles présents sur le
                      site comme ils le souhaite.
                    </p>
                    <p>
                      Compétences : PhpMyAdmin · HTML5 · PHP · SQL · CSS ·
                      JavaScript · Bootstrap
                    </p>
                    <br />
                    <div className="d-flex justify-content-end">
                      <a
                        href="https://github.com/SoilihiMMADI/GCR"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          color="#4d4d4e"
                          className="anchor-icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </MyModal>
              <MyModal imgButton={LogoGSB} title={'AFC'}>
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
                      👨‍💻 Dans le cadre de cette initiative, nous disposions
                      d'une base de code existante, sur laquelle il nous
                      incombait d'incorporer des fonctionnalités additionnelles,
                      de corriger des anomalies et de garantir, en fin de
                      parcours, l'opérationnalité de l'application pour les
                      comptables de GSB. Cette entreprise s'inscrit ainsi en
                      parfaite synergie avec le projet GCR, auquel nous avions
                      préalablement contribué.
                    </p>
                    <p>
                      🤝 Ce projet s'est avéré être une expérience collective,
                      où nous avons œuvré en groupe afin d'accroître notre
                      aptitude au travail d'équipe. Les membres les plus
                      compétents et expérimentés ont eu l'opportunité d'apporter
                      leur assistance et leurs éclaircissements à leurs pairs
                      moins aguerris, lesquels ont également été en mesure de
                      contribuer par leur vigilance aux moments de logique et de
                      correction d'erreurs. Il convient de souligner que
                      l'apport d'un regard extérieur s'est souvent révélé
                      décisif dans le déblocage de situations complexes. 🚀
                    </p>
                    <p>
                      Compétences : HTML5 · PHP · SQL · Microsoft SQL Server ·
                      CSS · JavaScript
                    </p>
                    <br />
                    <div className="d-flex justify-content-end">
                      <a
                        href="https://github.com/SoilihiMMADI/GCR"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          color="#4d4d4e"
                          className="anchor-icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </MyModal>
              <MyModal imgButton={LogoGSB} title={'GCR'}>
                <div className="container-my-modal">
                  <div className="example-img-project">
                    <div className="project-img">
                      <img src={ConnexionVueGCR} alt="page de connexion" />
                    </div>
                    <div className="project-img">
                      <img src={MedicineVueGCR} alt="page médicament" />
                    </div>
                    <div className="project-img">
                      <img src={PracticienVueGCR} alt="page praticien" />
                    </div>
                  </div>
                  <div className="text-zone-my-modal">
                    <h3>Projet BTS</h3>
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
                      🎯 Le but de ce projet était d'apprendre le langage PHP,
                      la programmation orientée objet (POO) ainsi que la mise en
                      pratique avec HTML5, CSS3, JavaScript et SQL.{' '}
                    </p>
                    <p>
                      ⌨️ Technologies utilisées : PHP, HTML5/CSS3, JavaScript,
                      SQL/PhpMyAdmin.Ce projet est destiné à doter les visiteurs
                      de GSB (Laboratoire Galaxy Swiss Boudrin 🔬) d'un outil
                      informatique pour saisir les comptes rendus des visites
                      effectuées auprès des praticiens.
                    </p>
                    <p>
                      Compétences : PhpMyAdmin · HTML5 · PHP · SQL · CSS ·
                      JavaScript
                    </p>
                    <br />
                    <div className="d-flex justify-content-end">
                      <a
                        href="https://github.com/SoilihiMMADI/GCR"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          color="#4d4d4e"
                          className="anchor-icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </MyModal>
            </div>
          </section>
        </Container>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Project

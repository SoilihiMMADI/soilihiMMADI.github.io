import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Project from './components/Project'
import Contact from './components/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    // Initialisez AOS avec les options de configuration souhaitées
    AOS.init({
      duration: 500, // La durée de l'animation en millisecondes
      offset: 100, // L'offset (en pixels) à partir duquel l'animation doit être déclenchée
      easing: 'ease-in-out', // L'effet d'animation (par exemple, 'ease', 'linear', 'ease-in', 'ease-out', etc.)
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

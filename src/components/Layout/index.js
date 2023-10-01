import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'
import Footer from '../Footer'

const Layout = () => {
  return (
    <div className="my-container">
      <Sidebar />
      <div className="page">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout

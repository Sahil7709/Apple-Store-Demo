import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/HomePage'
import StorePage from './pages/StorePage'
import MacPage from './pages/MacPage'
import IPadPage from './pages/IPadPage'
import IPhonePage from './pages/IPhonePage'
import WatchPage from './pages/WatchPage'
import VisionPage from './pages/VisionPage'
import AirPodsPage from './pages/AirPodsPage'
import TVPage from './pages/TVPage'
import EntertainmentPage from './pages/EntertainmentPage'
import AccessoriesPage from './pages/AccessoriesPage'
import SupportPage from './pages/SupportPage'
import Footer from './components/footer/Footer'
import './App.css'

function App() {

  return (
    <>
    <div className='container'>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/mac" element={<MacPage />} />
        <Route path="/ipad" element={<IPadPage />} />
        <Route path="/iphone" element={<IPhonePage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/airpods" element={<AirPodsPage />} />
        <Route path="/tv" element={<TVPage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>

      <Footer/>
      </div>

    </>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Sidebar } from './components/Sidebar'

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <hr className="navbar-hr" />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="content">
        <h2> Our Gear </h2>
        <h3> High-Quality Equipment for Creativity </h3>
        <h4>
          At Gallery Studio, we pride ourselves on providing top-of-the-line equipment to enhance your music production experience. From professional microphones to state-of-the-art mixing consoles, our gear is designed to support your creative vision and bring your music to life.
        </h4>
      </main>
    </>
  )
}

export default App

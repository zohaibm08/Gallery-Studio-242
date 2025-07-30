import React from 'react'
import  Navbar  from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Sidebar } from './components/Sidebar'

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="content">
        </main>
    </>
  )
}

export default App

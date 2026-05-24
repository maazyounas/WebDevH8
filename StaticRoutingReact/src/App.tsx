import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}


export default App

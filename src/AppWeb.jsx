import React from 'react'
import Home from './project4/Home'
import { Route, Routes } from 'react-router-dom'
import About from './project4/About'
import Service from './project4/Service'
import Contact from './project4/Contact'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './project4/Navbar'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
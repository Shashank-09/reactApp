import React from 'react'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar';
import {   Route,  Routes} from 'react-router-dom';
import Service from './Service';
import User from './User';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/user/:fname' element={<User />}></Route>
    </Routes>


      {/* <About />
      <Contact /> */}
    </>
  )
}

export default App
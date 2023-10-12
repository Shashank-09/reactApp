import React from 'react'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar';
import {   Route,  Routes} from 'react-router-dom';
import Service from './Service';
import User from './User';
import Search from './Search';
import Error from './Error';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<About />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/search' element={<Search />}></Route>
        <Route exact path='/service' element={<Service />}></Route>
        <Route exact path='/user/:fname/:lname' element={<User />}></Route>
        <Route path='*' element={<Error />}></Route>
    </Routes>


      {/* <About />
      <Contact /> */}
    </>
  )
}

export default App
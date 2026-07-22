import React from "react";
import {NavLink} from "react-router-dom";
import { BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

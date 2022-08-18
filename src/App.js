import React from "react";
import About from "./About";
import Contact from "./Contact";
import Error from './Error';
import {Route , Routes} from 'react-router-dom';
import Search from "./search";
import Home from "./Home";
import Service from "./Service";
import Menu from './Menu'
const App = () =>{
  return(
      <>
     
      <Routes> 
          <Route path='/' element={<About />}/>
          <Route exact path='/About' element={<About />}/>
          <Route exact path='/Contact' element={<Contact />}/>
          <Route   path='*' element={<Error/>}/>
          <Route exact path='/search' element={<Search />}/>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/Service' element={<Service />}/>

      </Routes> 
      </>
  )
}
export default App;
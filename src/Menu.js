import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import './Style.css'
import Error from './Error'
import Home from './Home'
<Home />
const Menu = () => {
  return (
    <>
     <a href="#" class="button1">Muhammad Sharjeel</a>
    <div className='link1'>
        {/* <a href="/">Home</a>
        <a href="/About">About Us</a>
        <a href="/Contact">Contact Us</a> */}
        <Link to ="/" className='A'>Home</Link>
        <Link to="/About" className='A'>About Us</Link>
        <Link to="/Contact" className='A'>Contact Us</Link>
        <Link to="/Service" className='A'>Services</Link>
        <Link to="/search" className='A'>Search</Link>
        <Link to="/Error"></Link> 
          
    </div>
    {/* <Routes>
      <Route path='*' element={<Error />}/>
    </Routes> */}

    </>
  )
}

export default Menu
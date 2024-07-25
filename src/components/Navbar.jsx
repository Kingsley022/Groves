import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"
import BlueBtn from './BlueBtn'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="contents">
          <p className='logo'><span>G</span> Green Groves</p>

          <nav>
              <Link className='link' to='/'>Home</Link>
              <Link className='link' to='/gardening'>Gardening</Link>
              <Link className='link' to="/educational">Educational</Link>
              <Link className='link' to='/about'>About Us</Link>
          </nav>

          <BlueBtn label="Contact us"/>
        </div>
    </div>
  )
}

export default Navbar
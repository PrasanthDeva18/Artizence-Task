import React from 'react';
import { Link } from 'react-router-dom'
import './Nabar.css'
import ArtLogo from '../images/Logo.svg'


const Navbar = () => {

  const navItems = [

    {
       href:"/",
       page:"Home"
    },
    
    
    {
    href: "/features",
    page: "Features"
  },
  {
    href: "/program",
    page: "Programs"
  },
  {
    href: "/contact",
    page: "Contact us"
  }]

  return (
    <div id="nav_bar">
      <div id="nav_logo_div">
        <img id="nav_logo" src={ArtLogo} alt="Logo" />
        
      </div>
      <div id="compname">
      <h1>Artizence</h1>
      </div>
      <div id="nav_list_items_div">
        <ul id="nav_list">

          {navItems.map((item, i) => {
            return (
              <li key={i} className="nav_list_item">
                <Link to={item.href}>{item.page}</Link>
                
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}


export default Navbar;
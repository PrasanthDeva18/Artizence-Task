import React from 'react'
import Navbar from '../Navbar/Navbar';
import './hero.css'

const Hero = () => {
  return (

            <div id="hero_div">
                <Navbar/>
                <div id="hero_text_div">
                    <h1>Hello Everyone!!</h1>
                    <h3>We are Artizences.</h3>
                </div>
                <div id="buttons_div">
                    {/* <a href="/" className="button button_main"></a> */}
                    <a href="/" className="button button_main">Learn more</a>
                </div>
            </div>
 
  )
}

export default Hero;

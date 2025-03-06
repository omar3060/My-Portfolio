import React from 'react'
import './home.css'
import Me from '../../assets/me.webp'
import CV from '../../assets/cv.pdf'
import HomeSocials from './HomeSocials'
import { FaArrowDown } from "react-icons/fa";


function Home() {
  return (
    <div className='home'>
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Omar Mahmoud</h1>
        <h4 className='text-light'>Frontend Developer</h4>

        <div className="btns">
          <a href={CV} className='btn' download>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

        <div className="me">
          <img src={Me} alt="My pic" />
        </div>
        <a href="#skills" className='scroll_down' data-aos="fade-left"><FaArrowDown /></a>
        <HomeSocials />
      </div>
    </div>
  )
}

export default Home
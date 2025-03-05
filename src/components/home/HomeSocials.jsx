import React from 'react'
import './home.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
function HomeSocials() {
  return (
    <div className='home_socials'>
      <a href="#" target='_blank'><FaLinkedin /></a>
      <a href="#" target='_blank'><FaGithub /></a>
      <a href="#" target='_blank'><FaDribbble /></a>
    </div>
  )
}

export default HomeSocials
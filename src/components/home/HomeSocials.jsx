import React from 'react'
import './home.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
function HomeSocials() {
  return (
    <div className='home_socials'>
      <a href="https://www.linkedin.com/in/omar-mahmoud-b70063163/" target='_blank'><FaLinkedin /></a>
      <a href="https://github.com/omar3060" target='_blank'><FaGithub /></a>
      <a href="https://www.codewars.com/users/omar3060" target='_blank'><SiCodewars /></a>
    </div>
  )
}

export default HomeSocials
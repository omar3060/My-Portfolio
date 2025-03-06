import React from 'react'
import './services.css'
import TopSection from '../topSection/TopSection'

import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
const Services = () => {
  return (
    <section className="services" id="services">
      <TopSection heading2="Services" heading5="What I Offer"/>
      <div className="container services_container">
        <article className='card' data-aos="fade-right">
          <MdDesignServices className='icon'/>
          <h3>Web Design</h3>
          <p>Creating visually appealing and user-friendly web designs.</p>
        </article>
        <article className='card'>
          <IoIosRocket className='icon'/>
          <h3>Fast Performance</h3>
          <p>Writing well-structured, scalable, maintainable, and efficient code.</p>
        </article>
        <article className='card' data-aos="fade-left">
          <FaCode className='icon'/>
          <h3>Clean Code</h3>
          <p>Writing well-structured, scalable, and maintainable code.</p>
        </article>
      </div>
    </section>

  )
}

export default Services
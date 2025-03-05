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
        <article className='card'>
          <MdDesignServices className='icon'/>
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vero quae labore beatae esse? Facere.</p>
        </article>
        <article className='card'>
          <IoIosRocket className='icon'/>
          <h3>Fast Performance</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vero quae labore beatae esse? Facere.</p>
        </article>
        <article className='card'>
          <FaCode className='icon'/>
          <h3>Clean Code</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vero quae labore beatae esse? Facere.</p>
        </article>
      </div>
    </section>

  )
}

export default Services
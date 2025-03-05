import React from 'react'
import './topSection.css'
const TopSection = ({heading5, heading2}) => {
  return (
    <div className='top_section'>
      <h5>{heading5}</h5>
      <h2>{heading2}</h2>
    </div>
  )
}

export default TopSection
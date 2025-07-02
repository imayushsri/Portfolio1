import { RiArrowUpLine } from '@remixicon/react'
import React from 'react'
import personalData from '../config/data'

const Footer = () => {
  return (
    <div id='footer' className='container-fluid py-4 mt-3'>
      <div className='row align-items-center'>
        
        {/* Left Empty Column */}
        <div className='col-12 col-md-4 text-center text-md-start mb-2 mb-md-0'>
          {/* Optional content or leave blank */}
        </div>

        {/* Centered Text */}
        <div className='col-12 col-md-4 text-center mb-2 mb-md-0'>
          <p className='mb-0 text-wrap fs-4'>
            Copyright &copy; 2025 {personalData.name} | All Rights Reserved
          </p>
        </div>

        <div className='col-12 footer-icon col-md-4 text-center text-md-end'>
          <a href="#" className='footer-icon'>
            <RiArrowUpLine />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Footer

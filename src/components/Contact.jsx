import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Contact = () => {

   useEffect(() => {
      AOS.init({ 
        duration: 1500,
      offset: 200,
      delay: 0,
      easing: 'ease-in-out',
      once: false,  
      });
    }, []);

  return (
    <>
      <div className='container-fluid contact py-5' id='contact'>
        <h2 className='heading text-center mt-5 mb-4' data-aos="fade-down">
          Contact <span>Me !</span>
        </h2>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12 contact-left mx-auto' data-aos="fade-right">
            <form className='contact form d-flex flex-wrap justify-content-center gap-3'>
              <input type='text' placeholder='Your Name' className='form-control input-box' />
              <input type='email' placeholder='Your Email' className='form-control input-box' />
              <input type='number' placeholder='Your Phone Number' className='form-control input-box' />
              <input type='text' placeholder='Subject' className='form-control input-box' />
              <textarea placeholder='Your Message'></textarea>
              <button className='btn my-3'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

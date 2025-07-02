import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import personalData from '../config/data';

const About = () => {

    useEffect(() => {
      AOS.init({ duration: 1500 });
    }, []);

  return (
    <>
      <div id="about" className="py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 about-img text-center" data-aos="flip-left">
            <img src={personalData.aboutImg} alt="" className="img-fluid" />
          </div>

          <div className="col-lg-6 col-md-12 about-content px-5" data-aos="fade-down">
            <h2 className="heading">About <span>Me</span></h2>
            <h3>{personalData.aboutTitle}</h3>
            <p>
              {personalData.aboutText}
            </p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

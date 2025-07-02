import {
  RiAndroidLine,
  RiCodeSSlashLine,
  RiPaletteLine
} from '@remixicon/react';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import personalData from '../config/data';

const Services = () => {

   useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);

  return (
    <>
      <div id="services" className="p-5 container">
        <h2 className="heading text-center" data-aos="fade-down">
          My <span>Services</span>
        </h2>

        <div className="row services-container" data-aos="fade-up">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card services-box mt-5">
              <div className="card-body text-center">
                <RiCodeSSlashLine className="services-i my-5" />
                <h3 className="card-title">{personalData.service1Title}</h3>
                <p className="card-text">
                  {personalData.service1Text}
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
            <div className="card services-box mt-5">
              <div className="card-body text-center">
                <RiPaletteLine className="services-i my-5" />
                <h3 className="card-title">{personalData.service2Title}</h3>
                <p className="card-text">
                  {personalData.service2Text}
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
            <div className="card services-box mt-5">
              <div className="card-body text-center">
                <RiAndroidLine className="services-i my-5" />
                <h3 className="card-title">{personalData.service3Title}</h3>
                <p className="card-text">
                  {personalData.service3Text}
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

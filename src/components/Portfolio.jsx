import { RiLink } from '@remixicon/react'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import personalData from '../config/data'

const Portfolio = () => {

   useEffect(() => {
      AOS.init({ duration: 1500 });
    }, []);

  return (
    <>
      <div className='container-fluid py-5' id='portfolio'>
        <h2 className='heading text-center mt-4' data-aos="fade-down">
          Latest <span>Projects</span>
        </h2>

        <div className="container pt-2">
          <div className="row portfolio-container my-5">
            {/* Project 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up">
              <div className="card portfolio-box">
                <img src={personalData.project1Img} alt="" className="card-img-top img-fluid" />
                <div className="portfolio-layer card-body">
                  <h4 className="card-title">{personalData.project1Title}</h4>
                  <p className="card-text">
                    {personalData.project1Text}
                  </p>
                  <a href="#"><RiLink /></a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up">
              <div className="card portfolio-box">
                <img src={personalData.project2Img} alt="" className="card-img-top img-fluid" />
                <div className="portfolio-layer card-body">
                  <h4 className="card-title">{personalData.project2Title}</h4>
                  <p className="card-text">
                    {personalData.project2Text}
                  </p>
                  <a href="#"><RiLink /></a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up">
              <div className="card portfolio-box">
                <img src={personalData.project3Img} alt="" className="card-img-top img-fluid" />
                <div className="portfolio-layer card-body">
                  <h4 className="card-title">{personalData.project3Title}</h4>
                  <p className="card-text">
                    {personalData.project3Text}
                  </p>
                  <a href="#"><RiLink /></a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up">
              <div className="card portfolio-box">
                <img src={personalData.project4Img} alt="" className="card-img-top img-fluid" />
                <div className="portfolio-layer card-body">
                  <h4 className="card-title">{personalData.project4Title}</h4>
                  <p className="card-text">
                    {personalData.project4Text}
                  </p>
                  <a href="#"><RiLink /></a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up">
              <div className="card portfolio-box">
                <img src={personalData.project5Img} alt="" className="card-img-top img-fluid" />
                <div className="portfolio-layer card-body">
                  <h4 className="card-title">{personalData.project5Title}</h4>
                  <p className="card-text">
                    {personalData.project5Text}
                  </p>
                  <a href="#"><RiLink /></a>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up">
              <div className="card portfolio-box">
                <img src={personalData.project6Img} alt="" className="card-img-top img-fluid" />
                <div className="portfolio-layer card-body">
                  <h4 className="card-title">{personalData.project6Title}</h4>
                  <p className="card-text">
                    {personalData.project6Text}
                  </p>
                  <a href="#"><RiLink /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio

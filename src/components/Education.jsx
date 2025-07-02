import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import personalData from '../config/data';

const Education = () => {

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
            <div className="container-fluid education py-5 px-4" id="education">
                <h2 className="heading text-center mb-4" data-aos="fade-down">
                    My <span>Education !</span>
                </h2>
                <div className="row justify-content-center" data-aos="fade-up">
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div className="eduBox shadow-lg py-5 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center">
                            <div className="eduContent text-center">
                                <span className="text-info fw-semibold d-block mb-2 fs-5">{personalData.edu1Year}</span>
                                <h3 className="text-white fw-bold mb-1 fs-4">{personalData.edu1Course} ({personalData.edu1Stream})</h3>
                                <p className="text-light mb-2 fs-5">{personalData.edu1College}</p>
                                <span className="badge bg-info text-dark fs-6 px-3 py-2">Grade: {personalData.edu1Grade}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div className="eduBox shadow-lg p-4 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center">
                            <div className="eduContent text-center">
                                <span className="text-info fw-semibold d-block mb-2 fs-5">{personalData.edu2Year}</span>
                                <h3 className="text-white fw-bold mb-1 fs-4">{personalData.edu2Course} ({personalData.edu2Stream})</h3>
                                <p className="text-light mb-2 fs-5">{personalData.edu2College}</p>
                                <span className="badge bg-info text-dark fs-6 px-3 py-2">Grade: {personalData.edu2Grade}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div className="eduBox shadow-lg p-4 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center">
                            <div className="eduContent text-center">
                                <span className="text-info fw-semibold d-block mb-2 fs-5">{personalData.edu3Year}</span>
                                <h3 className="text-white fw-bold mb-1 fs-4">{personalData.edu3Course} ({personalData.edu3Stream})</h3>
                                <p className="text-light mb-2 fs-5">{personalData.edu3College}</p>
                                <span className="badge bg-info text-dark fs-6 px-3 py-2">Grade: {personalData.edu3Grade}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;

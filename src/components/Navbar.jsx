import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md mx-0 position-sticky top-0 z-3 mb-5">
                <div className="container-fluid mx-0">
                    <a className="navbar-brand mx-5" href="#">
                        <span className="logo">Portfolio</span> 
                    </a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-lg-end justify-content-md-end me-5" id="navbarNav">
                        <ul className="navbar-nav navbar-text">
                            <li className="nav-item"><a href="#home" className="nav-link active">Home</a></li>
                            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
                            <li className="nav-item"><a href="#education" className="nav-link">Education</a></li>
                            <li className="nav-item"><a href="#portfolio" className="nav-link">Portfolio</a></li>
                            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar

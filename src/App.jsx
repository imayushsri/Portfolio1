import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'remixicon/fonts/remixicon.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';


const App = () => {
  return (
    <>
    <div className='container-fluid'>
      <Navbar />
      <Home />
      <About/>
      <Services/>
      <Education/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App

import React, { Fragment, useState } from 'react';
import './Navbar.css';// Import CSS for styling
import Slider from './Slider';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
          <nav className="navba">
      <div className="navbar-container">
        <div className="navbar-logo">Logo</div>
        <div className={isOpen ? 'navbar-menu active': 'navbar-menu'}>
          <ul className="navbar-items">
            <li className="navbar-item"><a href="#home">Home</a></li>
            <li className="navbar-item"><a href="#about">Services</a></li>
            <li className="navbar-item"><a href="#services">Gallery</a></li>
            <li className="navbar-item"><a href="#contact">Co-Traveler</a></li>
            <li className="navbar-item"><a href="#contact">FAQs</a></li>
            <li className="navbar-item"><a href="#contact">Contact Us</a></li>
            <li className="navbar-item"><a href="#contact">Register</a></li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
    <Slider />
   </Fragment>
  );
};

export default NavBar;

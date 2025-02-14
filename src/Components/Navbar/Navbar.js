import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">Tare Zameen Par</div>
      <nav className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        <ul className="navbar-list">
          <li className="navbar-item"><Link to="/">Home</Link></li>
          <li className="navbar-item"><Link to="/about">About Us</Link></li>

          {/* Dropdown for Services */}
          <li className="navbar-item dropdown">
            <Link to="/services" className="dropdown-toggle">Services</Link>
            <ul className="dropdown-list">
              <li className="dropdown-item"><Link to="/services/spark-curiosity">Spark of Curiosity</Link></li>
              <li className="dropdown-item"><Link to="/services/mobile-planetarium">Mobile Planetorium</Link></li>
              <li className="dropdown-item"><Link to="/services/mobile-science">Mobile Science Lab</Link></li>
              <li className="dropdown-item"><Link to="/services/webinar">Webinar</Link></li>
              <li className="dropdown-item"><Link to="/services/jupiter-curiosity">Jupiter of Curiosity</Link></li>
              <li className="dropdown-item"><Link to="/services/school-alliance">School of Alliance</Link></li>
            </ul>
          </li>

          <li className="navbar-item"><Link to="/csr">CSR</Link></li>
          <li className="navbar-item"><Link to="/gallery">Gallery</Link></li>
          <li className="navbar-item"><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Navbar;

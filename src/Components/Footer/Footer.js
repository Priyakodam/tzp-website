import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// import companyLogo from './images/png-1.png'
// import footerlogo from '../Footer/Images/png-1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon


const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footermainsection">
            
            {/* Logo Section */}
            <div className="footer-logo">
              <h3>Tare Zameen Par</h3>
            </div>

            {/* Quick Menu */}
            <div className="footer-section">
              <h3 className="footer-heading">Quick Menu</h3>
              <p><a href="/" className="footer-link">Home</a></p>
              <p><a href="/about" className="footer-link">About Us</a></p>
              <p><a href="/csr" className="footer-link">CSR</a></p>
              <p><a href="/gallery" className="footer-link">Gallery</a></p>
              <p><a href="/contact" className="footer-link">Contact Us</a></p>
            </div>

            {/* Contact Details */}
            <div className="footer-section">
              <h3 className="footer-heading">Contact Details</h3>
              <p className="footer-info">#52, 2nd Floor, 9th Main Road, Kaveri Nagar,</p>
              <p className="footer-info">Banashankari Stage II, Banashankari,</p>
              <p className="footer-info">City: Bengaluru</p>
              <p className="footer-info">State: Karnataka, 560070</p>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <section className="last-footer">
          <p className="last-footer-copyright">
            Copyright © 2024 SadāShri Ventures Private Limited. All rights reserved.
          </p>
         
          <div className="footer">
            <span className="float-left pr-2">
              © {new Date().getFullYear()} All rights reserved 
            </span>
            <span className="float-left">
              {/* <i className="fas fa-heart" aria-hidden="true"></i>  */}
              <FontAwesomeIcon  style={{color:'red', paddingLeft:'5px', paddingRight:'5px'}} icon={faHeart} aria-hidden="true" />
              by {" "}
              <a href="https://iiiqbets.com" target="_blank" rel="noopener noreferrer">
                iiiQBets
              </a>
            </span>
          </div>
        </section>

      </div>
    </footer>
  );
};

export default Footer;


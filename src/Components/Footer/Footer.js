import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedin, faDribbble, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from './images/TZP-WHITE-LOGO.png';
const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footermainsection">
            
            {/* Logo Section */}
            <div className="footer-logo">
    
              <img src={logo} alt="Tare Zameen Par Logo" className="logo-img" />
            </div>

            {/* Quick Menu */}
            <div className="footer-section">
              <h3 className="footer-heading">Quick Menu</h3>
              <p className="paragraph-element"><Link to="/" className="footer-link">Home</Link></p>
              <p className="paragraph-element"><Link to="/about" className="footer-link">About Us</Link></p>
              <p className="paragraph-element"><Link to="/csr" className="footer-link">CSR</Link></p>
              <p className="paragraph-element"><Link to="/gallery" className="footer-link">Gallery</Link></p>
              <p className="paragraph-element"><Link to="/contact" className="footer-link">Contact Us</Link></p>
            </div>

            {/* Contact Details */}
            <div className="footer-section">
              <h3 className="footer-heading">Contact Details</h3>
              <p className="paragraph-element">#52, 2nd Floor, 9th Main Road, Kaveri Nagar,</p>
              <p className="paragraph-element">Banashankari Stage II, Bengaluru</p>
              <p className="paragraph-element">Karnataka, 560070</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://www.facebook.com/tzp4u/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="social-icon facebook" />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FVarnaazTech_" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon twitter" />
            </a>
            <a href="https://www.instagram.com/tarezameenpartzp/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon google" />
            </a>
            <a href="https://www.linkedin.com/in/tare-zameen-par/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin" />
            </a>
           
          </div>

        </div>

        <hr className="footer-divider" />

        {/* Footer Bottom Section */}
        <section className="last-footer">
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} All rights reserved</span>
            <span>
              <FontAwesomeIcon style={{ color: 'red', padding: '0 5px' }} icon={faHeart} />
              by <a href="https://iiiqbets.com" target="_blank" rel="noopener noreferrer">iiiQBets</a>
            </span>
          </div>
        </section>

      </div>
    </footer>
  );
};

export default Footer;

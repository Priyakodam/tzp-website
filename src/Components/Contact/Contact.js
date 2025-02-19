import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import './Contact.css';
import { motion } from 'framer-motion';
import { Building } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faEnvelope, faTag, faComment } from '@fortawesome/free-solid-svg-icons';

const offices = [
  { city: "Bengaluru", icon: <Building size={24} /> },
  { city: "Goa", icon: <Building size={24} /> },
  { city: "Hubli", icon: <Building size={24} /> },
];

const Contact = () => {
  return (
    <div className="container mt-5">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="row justify-content-center"
    >
      <div className="col-md-6">
        <div className="contact-card p-4 shadow-lg contact-glass border-0">
          <h2 className="text-center mb-3">Book An Appointment</h2>
          <h6 className="text-center mb-4">
            Please complete the details below and then click on Submit and we’ll be in contact soon
          </h6>
          <form>
            {/** Name Field */}
            <div className="mb-3 position-relative">
              <label className="form-label">Name</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
            </div>

            {/** Email Field */}
            <div className="mb-3 position-relative">
              <label className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
            </div>

            {/** Subject Field */}
            <div className="mb-3 position-relative">
              <label className="form-label">Subject</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faTag} />
                </span>
                <input type="text" className="form-control" placeholder="Enter subject" required />
              </div>
            </div>

            {/** Message Field */}
            <div className="mb-3 position-relative">
              <label className="form-label">Message</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faComment} />
                </span>
                <textarea className="form-control" rows="2" placeholder="Enter your message" required></textarea>
              </div>
            </div>

            {/** Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn btn-gradient w-100"
            >
              Send Message
            </motion.button>
          </form>

          <div className="text-center mt-3">
            <h5>Call Us</h5>
            <p className="fw-bold">+91 9988776655</p>
          </div>
        </div>
      </div>
    </motion.div>

      <div className="row mt-5 text-center">
      {offices.map((office, index) => (
        <motion.div
          key={index}
          className="col-md-4 mb-4 border-end office-card"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="icon-container">{office.icon}</div>
          <h1>{office.city} Office</h1>
          <h5>{office.city} Office</h5>
          <p>#52, 2nd Floor, Some Address, {office.city}</p>
        </motion.div>
      ))}
    </div>

      <div className="row mt-5 align-items-center text-center text-md-start p-4 w-100" style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h5>Do you have any ideas?</h5>
              <h3>Let's talk about it..!</h3>
            </div>
            <div className="col-md-4 text-md-end">
              <button className="btn btn-light me-3">Join With Us</button>
              <span className="fw-bold">+91 9035013642</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 text-center">
        {[{ icon: <FaMapMarkerAlt />, title: "Our Head Office", text: "#52, 2nd Floor, 9th Main Road, Kaveri Nagar, Banashankari Stage II, Banashankari, Bengaluru, Karnataka 560070" },
          { icon: <FaEnvelope />, title: "Email", text: "info@tarezameenpar.org" },
          { icon: <FaPhone />, title: "Phone", text: "+91 90350 13642" }].map((info, index) => (
          <motion.div 
            key={index} 
            className="col-md-4 d-flex"
            whileHover={{ scale: 1.05 }}
          >
            <div className="contact-card p-4 shadow-lg flex-fill contact2-card">
              <div className="icon-container">
                {info.icon}
              </div>
              <h5>{info.title}</h5>
              <p className='icon-container-p'>{info.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
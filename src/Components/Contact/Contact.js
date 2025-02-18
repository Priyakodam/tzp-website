import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import './Contact.css';
import { motion } from 'framer-motion';

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
          <div className="card p-4 shadow-lg contact-glass border-0">
            <h2 className="text-center mb-3">Book An Appointment</h2>
            <h6 className="text-center mb-4">Please complete the details below and then click on Submit and we’ll be in contact soon</h6>
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Enter subject" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Enter your message" required></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }} 
                type="submit" 
                className="btn btn-primary w-100"
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
        {["Bengaluru", "Goa", "Hubli"].map((city, index) => (
          <motion.div 
            key={index} 
            className="col-md-4 mb-4 border-end" 
            whileHover={{ scale: 1.05 }}
          >
            <h1>{city} Office</h1>
            <h5>{city} Office</h5>
            <p>#52, 2nd Floor, Some Address, {city}</p>
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
            <div className="card p-4 shadow-lg flex-fill contact-card">
              <div className="icon-container">
                {info.icon}
              </div>
              <h5>{info.title}</h5>
              <p>{info.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
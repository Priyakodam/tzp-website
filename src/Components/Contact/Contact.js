import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-lg border-0">
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
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
            <div className="text-center mt-3">
              <h5>Call Us</h5>
              <p className="fw-bold">+91 9988776655</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 text-center">
        <div className="col-md-4 mb-4 border-end">
          <h1>Bengaluru Office</h1>
          <h5>Bengaluru Office</h5>
          <p>#52, 2nd Floor, 9th Main Road, Kaveri Nagar,<br />
            Banashankari Stage II, Banashankari,<br />
            Bengaluru, Karnataka 560070</p>
        </div>
        <div className="col-md-4 mb-4 border-end">
          <h1>Goa Office</h1>
          <h5>Goa Office</h5>
          <p>HNO-35, Abade Faria Road, Comba, Margao,<br />
            Salcete, Goa 403601</p>
        </div>
        <div className="col-md-4 mb-4">
          <h1>Hubli Office</h1>
          <h5>Hubli Office</h5>
          <p>#62, Rajnagar, Hubli, 580032</p>
        </div>
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
        <div className="col-md-4 d-flex">
          <div className="card p-4 shadow-lg flex-fill contact-card">
            <div className="icon-container">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <h5>Our Head Office</h5>
            <p>
              #52, 2nd Floor, 9th Main Road, Kaveri Nagar,<br />
              Banashankari Stage II, Banashankari,<br />
              Bengaluru, Karnataka 560070
            </p>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card p-4 shadow-lg flex-fill contact-card">
            <div className="icon-container">
              <FaEnvelope className="contact-icon" />
            </div>
            <h5>Email</h5>
            <p>info@tarezameenpar.org</p>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card p-4 shadow-lg flex-fill contact-card">
            <div className="icon-container">
              <FaPhone className="contact-icon" />
            </div>
            <h5>Phone</h5>
            <p>+91 90350 13642</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;

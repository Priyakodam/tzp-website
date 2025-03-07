// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
// import './Contact.css';
// import { motion } from 'framer-motion';
// import { Building } from "lucide-react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faTag, faComment } from '@fortawesome/free-solid-svg-icons';

// const offices = [
//   {
//     city: "Bengaluru",
//     icon: <Building size={24} />,
//     address: "#52, 2nd Floor, 9th Main Road, Kaveri Nagar, Banashankari Stage II, Banashankari, Bengaluru, Karnataka 560070",
//   },
//   {
//     city: "Goa",
//     icon: <Building size={24} />,
//     address: "H.No-35, Abade Faria road, Comba, Margao, Salcete, Goa 403601",
//   },
//   {
//     city: "Hubli",
//     icon: <Building size={24} />,
//     address: "#62, Rajnagar, Hubli, 580032",
//   },
// ];


// const Contact = () => {
//   return (
//     <div className="mt-5">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="row justify-content-center"
//       >
//         <div className="contact-page-container">
//           <div className="col-md-6">
//             <div className="contact-card p-4 shadow-lg contact-glass border-0">
//               <h2 className="text-center mb-3 color-c">Book An Appointment</h2>
//               <h6 className="text-center mb-4">
//                 Please complete the details below and then click on Submit and we’ll be in contact soon
//               </h6>
//               <form>
//                 {/** Name Field */}
//                 <div className="mb-3 position-relative">
//                   <label className="form-label">Name</label>
//                   <div className="input-group">
//                     <span className="input-group-text">
//                       <FontAwesomeIcon icon={faUser} />
//                     </span>
//                     <input type="text" className="form-control" placeholder="Enter your name" required />
//                   </div>
//                 </div>

//                 {/** Email Field */}
//                 <div className="mb-3 position-relative">
//                   <label className="form-label">Email</label>
//                   <div className="input-group">
//                     <span className="input-group-text">
//                       <FontAwesomeIcon icon={faEnvelope} />
//                     </span>
//                     <input type="email" className="form-control" placeholder="Enter your email" required />
//                   </div>
//                 </div>

//                 {/** Subject Field */}
//                 <div className="mb-3 position-relative">
//                   <label className="form-label">Subject</label>
//                   <div className="input-group">
//                     <span className="input-group-text">
//                       <FontAwesomeIcon icon={faTag} />
//                     </span>
//                     <input type="text" className="form-control" placeholder="Enter subject" required />
//                   </div>
//                 </div>

//                 {/** Message Field */}
//                 <div className="mb-3 position-relative">
//                   <label className="form-label">Message</label>
//                   <div className="input-group">
//                     <span className="input-group-text">
//                       <FontAwesomeIcon icon={faComment} />
//                     </span>
//                     <textarea className="form-control" rows="2" placeholder="Enter your message" required></textarea>
//                   </div>
//                 </div>

//                 {/** Submit Button */}
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   type="submit"
//                   className="btn btn-gradient w-100"
//                 >
//                   Send Message
//                 </motion.button>
//               </form>

//               <div className="text-center mt-3">
//                 <h5>Call Us</h5>
//                 <p className="fw-bold">+91 9988776655</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <div className="row mt-5 justify-content-center text-center">
//         {offices.map((office, index) => (
//           <div
//             key={index}
//             className={`col-md-4 col-sm-6 mb-4 office-card office-card-${index}`}
//           >
//             <div className="contact-icon-container">{office.icon}</div>
//             <h2 className="office-title">{office.city} Office</h2>
//             <h5 className="office-subtitle">{office.branch}</h5>
//             <p className="office-address">{office.address}</p>
//           </div>
//         ))}
//       </div>
//       <div
//         className="row mt-5 align-items-center text-center text-md-start p-4 w-100 contact-section"
//         style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '0' }}
//       >
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-8">
//               <h5>Do you have any ideas?</h5>
//               <h4>Let's talk about it..!</h4>
//             </div>
//             <div className="col-md-4 text-md-end contact-content">
//               <button className="btn btn-light me-3 contact-button">Join With Us</button>
//               <span className="fw-bold contact-number">+91 9035013642</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row mt-5 text-center">
//         {[{ icon: <FaMapMarkerAlt />, title: "Our Head Office", text: "#52, 2nd Floor, 9th Main Road, Kaveri Nagar, Banashankari Stage II, Banashankari, Bengaluru, Karnataka 560070" },
//         { icon: <FaEnvelope />, title: "Email", text: "info@tarezameenpar.org" },
//         { icon: <FaPhone />, title: "Phone", text: "+91 90350 13642" }].map((info, index) => (
//           <motion.div
//             key={index}
//             className="col-md-4 d-flex"
//             whileHover={{ scale: 1.05 }}
//           >
//             <div className="contact-card p-4 shadow-lg flex-fill contact2-card">
//               <div className="contact-icon-container">
//                 {info.icon}
//               </div>
//               <h5>{info.title}</h5>
//               <p className='contact-icon-container-p'>{info.text}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Contact;

























import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import './Contact.css';
import { motion } from 'framer-motion';
import { Building } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faTag, faComment } from '@fortawesome/free-solid-svg-icons';
import { db } from '../../Firebase/Firebase';  // Import Firestore
import { collection, addDoc, serverTimestamp } from "firebase/firestore";  // Import Firestore functions


const offices = [
  {
    city: "Bengaluru",
    icon: <Building size={24} />,
    address: "#52, 2nd Floor, 9th Main Road, Kaveri Nagar, Banashankari Stage II, Banashankari, Bengaluru, Karnataka 560070",
  },
  {
    city: "Goa",
    icon: <Building size={24} />,
    address: "H.No-35, Abade Faria road, Comba, Margao, Salcete, Goa 403601",
  },
  {
    city: "Hubli",
    icon: <Building size={24} />,
    address: "#62, Rajnagar, Hubli, 580032",
  },
];


const Contact = () => {


   // State for form inputs
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for submission status
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
  
    try {
      await addDoc(collection(db, "Contacts"), {
        ...formData,
        createdAt: serverTimestamp() // Store timestamp
      });
      
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
      console.error("Error adding document: ", error);
    }
  
    setLoading(false);
  };
  return (
    <div className="mt-5">
          <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="row justify-content-center"
      >
        <div className="contact-page-container">
          <div className="col-md-6">
            <div className="contact-card p-4 shadow-lg contact-glass border-0">
              <h2 className="text-center mb-3 color-c">Book An Appointment</h2>
              <h6 className="text-center mb-4">
                Please complete the details below and then click on Submit and we’ll be in contact soon
              </h6>
              <form onSubmit={handleSubmit}>
                {/** Name Field */}
                <div className="mb-3 position-relative">
                  <label className="form-label">Name</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/** Email Field */}
                <div className="mb-3 position-relative">
                  <label className="form-label">Email</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/** Subject Field */}
                <div className="mb-3 position-relative">
                  <label className="form-label">Subject</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faTag} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/** Message Field */}
                <div className="mb-3 position-relative">
                  <label className="form-label">Message</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faComment} />
                    </span>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="2"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                {/** Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn btn-gradient w-100"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>

              {successMessage && <p className="text-success mt-3">{successMessage}</p>}
              {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}

              <div className="text-center mt-3">
                <h5>Call Us</h5>
                <p className="fw-bold">+91 9988776655</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="row mt-5 justify-content-center text-center">
        {offices.map((office, index) => (
          <div
            key={index}
            className={`col-md-4 col-sm-6 mb-4 office-card office-card-${index}`}
          >
            <div className="contact-icon-container">{office.icon}</div>
            <h2 className="office-title">{office.city} Office</h2>
            <h5 className="office-subtitle">{office.branch}</h5>
            <p className="office-address">{office.address}</p>
          </div>
        ))}
      </div>
      <div
        className="row mt-5 align-items-center text-center text-md-start p-4 w-100 contact-section"
        style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '0' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h5>Do you have any ideas?</h5>
              <h4>Let's talk about it..!</h4>
            </div>
            <div className="col-md-4 text-md-end contact-content">
              <button className="btn btn-light me-3 contact-button">Join With Us</button>
              <span className="fw-bold contact-number">+91 9035013642</span>
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
              <div className="contact-icon-container">
                {info.icon}
              </div>
              <h5>{info.title}</h5>
              <p className='contact-icon-container-p'>{info.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
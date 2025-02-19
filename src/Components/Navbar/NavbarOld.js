// import React, { useState } from "react";
// import "./Navbar.css"; // Import the CSS for styling
// import mainlogo from "./images/Executables Logo_4.png";

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState(window.location.pathname);
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
//   const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

//   const handleSetActive = (link) => {
//     setActiveLink(link);
//     setIsOpen(false); // Close the menu when a link is clicked
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleServicesDropdown = () => {
//     setServicesDropdownOpen(!servicesDropdownOpen);
//   };

//   const toggleProductsDropdown = () => {
//     setProductsDropdownOpen(!productsDropdownOpen);
//   };

//   return (
//     <header>
//       {/* Logo */}
//       <div className="logo">
//         <a href="/"><img src={mainlogo} alt="Xecutables Logo" style={{ height: "40px", marginLeft:"20px" }} /></a>
//       </div>

//       {/* Hamburger toggle button */}
//       <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       {/* Navigation links */}
//       <nav className={`nav-links ${isOpen ? "open" : ""}`}>
//         <a
//           href="/"
//           className={`nav-item ${activeLink === "/" ? "active" : ""}`}
//           onClick={() => handleSetActive("/")}
//         >
//           Home
//         </a>

//         {/* Products dropdown */}
//         <div className="dropdown"
//           onMouseEnter={() => setProductsDropdownOpen(true)}
//           onMouseLeave={() => setProductsDropdownOpen(false)}
//         >
//           <span>
//             Solutions {productsDropdownOpen ? "▴" : "▾"}
//           </span>

//           <div className="dropdown-content">

//           <a
//               href="/employeemanagement"
//               className={`nav-item ${activeLink === "/employeemanagement" ? "active" : ""
//                 }`}
//               onClick={() => handleSetActive("/employeemanagement")}
//             >
//               Employee Management
//             </a>

//             <a
//               href="/visitormanagement"
//               className={`nav-item ${activeLink === "/visitormanagement" ? "active" : ""
//                 }`}
//               onClick={() => handleSetActive("/visitormanagement")}
//             >
//               Visitor Management
//             </a>

//           <a
//               href="/mobilecardmanagement"
//               className={`nav-item ${activeLink === "/mobilecardmanagement" ? "active" : ""
//                 }`}
//               onClick={() => handleSetActive("/mobilecardmanagement")}
//             >
//               Mobile Card Management
//             </a>


//             <a
//               href="/eventsmanagement"
//               className={`nav-item ${activeLink === "/eventsmanagement" ? "active" : ""
//                 }`}
//               onClick={() => handleSetActive("/eventsmanagement")}
//             >Alarms & Events Forensic
//             </a>

//             <a
//               href="/patientcare"
//               className={`nav-item ${activeLink === "/patientcare" ? "active" : ""
//                 }`}
//               onClick={() => handleSetActive("/patientcare")}
//             >
//               PatientCare 
//             </a>
          
           
//             <a
//               href="/lift&Parkingmanagement"
//               className={`nav-item ${activeLink === "/lift&Parkingmanagement" ? "active" : ""
//                 }`}
//               onClick={() => handleSetActive("/lift&Parkingmanagement")}
//             >
//               Lift&Parking Management
//             </a>
           
            
          

         
           
//           </div>
//         </div>


//         {/* Services dropdown */}
//         <div className="dropdown"
//         onMouseEnter={() => setServicesDropdownOpen(true)}
//         onMouseLeave={() => setServicesDropdownOpen(false)}
//         >
//           <span >
//             Services {servicesDropdownOpen ? "▴" : "▾"}
//           </span>
//           {servicesDropdownOpen && (
//             <div className="dropdown-content">
//               <a
//                 href="/engineering-services"
//                 className={`nav-item ${activeLink === "/engineering-services" ? "active" : ""
//                   }`}
//                 onClick={() => handleSetActive("/engineering-services")}
//               >
//                 Engineering Services
//               </a>
//               <a
//                 href="/professional-services"
//                 className={`nav-item ${activeLink === "/professional-services" ? "active" : ""
//                   }`}
//                 onClick={() => handleSetActive("/professional-services")}
//               >
//                 Professional Services
//               </a>
//               <a
//                 href="/maintenance"
//                 className={`nav-item ${activeLink === "/maintenance" ? "active" : ""
//                   }`}
//                 onClick={() => handleSetActive("/maintenance")}
//               >
//                 Service and Maintenance
//               </a>
//             </div>
//           )}
//         </div>

//         <a
//           href="/resourcecenter"
//           className={`nav-item ${activeLink === "/resourcecenter" ? "active" : ""
//             }`}
//           onClick={() => handleSetActive("/resourcecenter")}
//         >
//           Resource Center
//         </a>

//         <a
//           href="/about"
//           className={`nav-item ${activeLink === "/about" ? "active" : ""}`}
//           onClick={() => handleSetActive("/about")}
//         >
//           About Us
//         </a>
        
//         <a
//           href="/contact"
//           className={`nav-item ${activeLink === "/contact" ? "active" : ""}`}
//           onClick={() => handleSetActive("/contact")}
//         >
//           Contact Us
//         </a>
//       </nav>

//       {/* Buttons aligned to the right */}
//       <div className="buttons">
//         <a href="/contact" className="button primary">
//           Get in touch
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Navbar;





import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from './Images/TZP-WHITE-LOGO.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);
  const [isCsrDropdownOpen, setIsCsrDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (setDropdown) => {
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsGalleryDropdownOpen(false);
    setIsCsrDropdownOpen(false);
    setDropdown(true);
  };

  return (
    <header className="navbar">
      <div className="logo">Tare Zameen Par</div>
      {/* <div className="logo">
    <img src={logo} alt="Tare Zameen Par Logo" className="logo-img" />
  </div> */}
      <nav className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        <ul className="navbar-list">
          <li className="navbar-item"><a href="/">Home</a></li>
          
          {/* Dropdown for About Us */}
          <li className="navbar-item dropdown" onMouseEnter={() => toggleDropdown(setIsAboutDropdownOpen)} onMouseLeave={() => setIsAboutDropdownOpen(false)}>
            <a className="dropdown-toggle" href="/about">About Us</a>
            {isAboutDropdownOpen && (
              <ul className="dropdown-list">
                <li className="dropdown-item"><a href="/about/ourhistory">Our History</a></li>
                <li className="dropdown-item"><a href="/about/team">Team</a></li>
                <li className="dropdown-item"><a href="/about/missionvision">Mission & Vision</a></li>
                <li className="dropdown-item"><a href="/about/ourvalues">Our Values</a></li>
                <li className="dropdown-item"><a href="/about/supporters">Supporters</a></li>
                <li className="dropdown-item"><a href="/about/awards">Awards</a></li>
              </ul>
            )}
          </li>

          {/* Dropdown for Services */}
          <li className="navbar-item dropdown" onMouseEnter={() => toggleDropdown(setIsServicesDropdownOpen)} onMouseLeave={() => setIsServicesDropdownOpen(false)}>
            <a className="dropdown-toggle" href="/services/service">Services</a>
            {isServicesDropdownOpen && (
              <ul className="dropdown-list">
                <li className="dropdown-item"><a href="/services/spark-curiosity">Spark of Curiosity</a></li>
                <li className="dropdown-item"><a href="/services/mobile-planetarium">Mobile Planetarium</a></li>
                <li className="dropdown-item"><a href="/services/mobile-science">Mobile Science Lab</a></li>
                <li className="dropdown-item"><a href="/services/webinar">Webinar</a></li>
                <li className="dropdown-item"><a href="/services/jupiter-curiosity">Jupiter of Curiosity</a></li>
                <li className="dropdown-item"><a href="/services/school-alliance">School of Alliance</a></li>
              </ul>
            )}
          </li>

          {/* Dropdown for CSR */}
          <li className="navbar-item dropdown" onMouseEnter={() => toggleDropdown(setIsCsrDropdownOpen)} onMouseLeave={() => setIsCsrDropdownOpen(false)}>
            <a className="dropdown-toggle" href="/csr">CSR</a>
            {isCsrDropdownOpen && (
              <ul className="dropdown-list">
                <li className="dropdown-item"><a href="/synopsis">Synopsis</a></li>
                <li className="dropdown-item"><a href="/motilal-oswal-foundation">MotilalOswal</a></li>
                <li className="dropdown-item"><a href="/aviratha">Aviratha</a></li>
                <li className="dropdown-item"><a href="/lti">LTI</a></li>
                <li className="dropdown-item"><a href="/ksteps-categories">ksteps</a></li>
              </ul>
            )}
          </li>

          {/* Dropdown for Gallery */}
          <li className="navbar-item dropdown" onMouseEnter={() => toggleDropdown(setIsGalleryDropdownOpen)} onMouseLeave={() => setIsGalleryDropdownOpen(false)}>
            <a className="dropdown-toggle" href="/gallery">Gallery</a>
            {isGalleryDropdownOpen && (
              <ul className="dropdown-list">
                <li className="dropdown-item"><a href="/gallery/testimonials">Testimonials</a></li>
                <li className="dropdown-item"><a href="/gallery/photos">Photos</a></li>
              </ul>
            )}
          </li>

          <li className="navbar-item"><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Navbar;
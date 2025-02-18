// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import './Navbar.css';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = (e) => {
//     if (!e.target.closest('.dropdown')) {
//       setIsDropdownOpen(false);
//     }
//   };

//   return (
//     <header className="navbar" onClick={closeDropdown}>
//       <div className="logo">Tare Zameen Par</div>
//       <nav className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
//         <ul className="navbar-list">
//           <li className="navbar-item"><Link to="/">Home</Link></li>
//           {/* <li className="navbar-item"><Link to="/about">About Us</Link></li> */}

//             {/* Dropdown for Aboutus */}
//             <li className={`navbar-item dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
//             <Link className="dropdown-toggle">About Us</Link>
//             {isDropdownOpen && (
//               <ul className="dropdown-list">
//                 <li className="dropdown-item"><Link to="/about/ourhistory">Our History</Link></li>
//                 <li className="dropdown-item"><Link to="/services/mobile-planetarium">Blog</Link></li>
//                 <li className="dropdown-item"><Link to="/about/team">Team</Link></li>
//                 <li className="dropdown-item"><Link to="/about/missionvision">Mission & Vision</Link></li>
//                 <li className="dropdown-item"><Link to="/about/ourvalues">Our Values</Link></li>
//                 <li className="dropdown-item"><Link to="/about/supporters">Supporters</Link></li>
//                 <li className="dropdown-item"><Link to="/about/awards">Awards</Link></li>
//               </ul>
//             )}
//           </li>

//           {/* Dropdown for Services */}
//           <li className={`navbar-item dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
//             <Link className="dropdown-toggle">Services</Link>
//             {isDropdownOpen && (
//               <ul className="dropdown-list">
//                 <li className="dropdown-item"><Link to="/services/spark-curiosity">Spark of Curiosity</Link></li>
//                 <li className="dropdown-item"><Link to="/services/mobile-planetarium">Mobile Planetarium</Link></li>
//                 <li className="dropdown-item"><Link to="/services/mobile-science">Mobile Science Lab</Link></li>
//                 <li className="dropdown-item"><Link to="/services/webinar">Webinar</Link></li>
//                 <li className="dropdown-item"><Link to="/services/jupiter-curiosity">Jupiter of Curiosity</Link></li>
//                 <li className="dropdown-item"><Link to="/services/school-alliance">School of Alliance</Link></li>
//               </ul>
//             )}
//           </li>

//           <li className="navbar-item"><Link to="/csr">CSR</Link></li>
//           {/* <li className="navbar-item"><Link to="/gallery">Gallery</Link></li> */}

//           <li className={`navbar-item dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
//             <Link className="dropdown-toggle">Gallery</Link>
//             {isDropdownOpen && (
//               <ul className="dropdown-list">
//                 <li className="dropdown-item"><Link to="/gallery/testimonials">Testimonials</Link></li>
//                 <li className="dropdown-item"><Link to="/gallery/photos">Photos</Link></li>
                
//               </ul>
//             )}
//           </li>

//           <li className="navbar-item"><Link to="/contact">Contact Us</Link></li>
//         </ul>
//       </nav>
//       <div className="hamburger-menu" onClick={toggleMenu}>
//         {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//       </div>
//     </header>
//   );
// };

// export default Navbar;














import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);
  const [isCsrDropdownOpen, setIsCsrDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsServicesDropdownOpen(false); // Close other dropdowns
    setIsGalleryDropdownOpen(false); // Close other dropdowns
    setIsCsrDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsAboutDropdownOpen(false); // Close other dropdowns
    setIsGalleryDropdownOpen(false); // Close other dropdowns
    setIsCsrDropdownOpen(false);
  };

  const toggleGalleryDropdown = () => {
    setIsGalleryDropdownOpen(!isGalleryDropdownOpen);
    setIsAboutDropdownOpen(false); // Close other dropdowns
    setIsServicesDropdownOpen(false); // Close other dropdowns
    setIsCsrDropdownOpen(false);
  };

  const toggleCsrDropdown = () => {
    setIsGalleryDropdownOpen(!isCsrDropdownOpen);
    setIsAboutDropdownOpen(false); // Close other dropdowns
    setIsServicesDropdownOpen(false); // Close other dropdowns
  };

  const closeDropdown = (e) => {
    if (!e.target.closest('.dropdown')) {
      setIsAboutDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      setIsGalleryDropdownOpen(false);
      setIsCsrDropdownOpen(false);
    }
  };

  return (
    <header className="navbar" onClick={closeDropdown}>
      <div className="logo">Tare Zameen Par</div>
      <nav className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        <ul className="navbar-list">
          <li className="navbar-item"><Link to="/">Home</Link></li>
          
          {/* Dropdown for About Us */}
          <li className={`navbar-item dropdown ${isAboutDropdownOpen ? 'open' : ''}`} 
              onMouseEnter={toggleAboutDropdown} onMouseLeave={() => setIsAboutDropdownOpen(false)}>
            <Link className="dropdown-toggle" to="/about">About Us</Link>
            {isAboutDropdownOpen && (
              <ul className="dropdown-list">
                <li className="dropdown-item"><Link to="/about/ourhistory">Our History</Link></li>
                <li className="dropdown-item"><Link to="/about/team">Team</Link></li>
                <li className="dropdown-item"><Link to="/about/missionvision">Mission & Vision</Link></li>
                <li className="dropdown-item"><Link to="/about/ourvalues">Our Values</Link></li>
                <li className="dropdown-item"><Link to="/about/supporters">Supporters</Link></li>
                <li className="dropdown-item"><Link to="/about/awards">Awards</Link></li>
              </ul>
            )}
          </li>

          {/* Dropdown for Services */}
          <li className={`navbar-item dropdown ${isServicesDropdownOpen ? 'open' : ''}`} 
              onMouseEnter={toggleServicesDropdown} onMouseLeave={() => setIsServicesDropdownOpen(false)}>
            <Link to="/services/service" className="dropdown-toggle">Services</Link>
            {isServicesDropdownOpen && (
              <ul className="dropdown-list">
                <li className="dropdown-item"><Link to="/services/spark-curiosity">Spark of Curiosity</Link></li>
                <li className="dropdown-item"><Link to="/services/mobile-planetarium">Mobile Planetarium</Link></li>
                <li className="dropdown-item"><Link to="/services/mobile-science">Mobile Science Lab</Link></li>
                <li className="dropdown-item"><Link to="/services/webinar">Webinar</Link></li>
                <li className="dropdown-item"><Link to="/services/jupiter-curiosity">Jupiter of Curiosity</Link></li>
                <li className="dropdown-item"><Link to="/services/school-alliance">School of Alliance</Link></li>
              </ul>
            )}
          </li>

          {/* <li className="navbar-item"><Link to="/csr">CSR</Link></li> */}
          
          {/* Dropdown for Gallery */}
          <li className={`navbar-item dropdown ${isCsrDropdownOpen ? 'open' : ''}`} 
              onMouseEnter={toggleCsrDropdown} onMouseLeave={() => setIsGalleryDropdownOpen(false)}>
            <Link className="dropdown-toggle" to="/csr">CSR</Link>
            {isGalleryDropdownOpen && (
              <ul className="dropdown-list">
                <li className="dropdown-item"><Link to="/synopsis">Synopsis</Link></li>
                <li className="dropdown-item"><Link to="/motilal-oswal-foundation">MotilalOswal</Link></li>
                <li className="dropdown-item"><Link to="/aviratha">Aviratha</Link></li>
                <li className="dropdown-item"><Link to="/lti">LTI</Link></li>
                <li className="dropdown-item"><Link to="/ksteps-categories">ksteps</Link></li>

              </ul>
            )}
          </li>

          {/* Dropdown for Gallery */}
          <li className={`navbar-item dropdown ${isGalleryDropdownOpen ? 'open' : ''}`} 
              onMouseEnter={toggleGalleryDropdown} onMouseLeave={() => setIsGalleryDropdownOpen(false)}>
            <Link className="dropdown-toggle" to="/gallery">Gallery</Link>
            {isGalleryDropdownOpen && (
              <ul className="dropdown-list">
                <li className="dropdown-item"><Link to="/gallery/testimonials">Testimonials</Link></li>
                <li className="dropdown-item"><Link to="/gallery/photos">Photos</Link></li>
              </ul>
            )}
          </li>

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


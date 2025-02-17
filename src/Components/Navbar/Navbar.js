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

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsServicesDropdownOpen(false); // Close other dropdowns
    setIsGalleryDropdownOpen(false); // Close other dropdowns
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsAboutDropdownOpen(false); // Close other dropdowns
    setIsGalleryDropdownOpen(false); // Close other dropdowns
  };

  const toggleGalleryDropdown = () => {
    setIsGalleryDropdownOpen(!isGalleryDropdownOpen);
    setIsAboutDropdownOpen(false); // Close other dropdowns
    setIsServicesDropdownOpen(false); // Close other dropdowns
  };

  const closeDropdown = (e) => {
    if (!e.target.closest('.dropdown')) {
      setIsAboutDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      setIsGalleryDropdownOpen(false);
    }
  };

  return (
    <header className="navbar" onClick={closeDropdown}>
      <div className="logo">Tare Zameen Par</div>
      <nav className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        <ul className="navbar-list">
          <li className="navbar-item"><Link to="/">Home</Link></li>
          
          {/* Dropdown for About Us */}
          <li className={`navbar-item dropdown ${isAboutDropdownOpen ? 'open' : ''}`} onClick={toggleAboutDropdown}>
            <Link className="dropdown-toggle">About Us</Link>
            {isAboutDropdownOpen && (
              <ul className="dropdown-list">
                <li className="dropdown-item"><Link to="/about/ourhistory">Our History</Link></li>
                {/* <li className="dropdown-item"><Link to="/services/mobile-planetarium">Blog</Link></li> */}
                <li className="dropdown-item"><Link to="/about/team">Team</Link></li>
                <li className="dropdown-item"><Link to="/about/missionvision">Mission & Vision</Link></li>
                <li className="dropdown-item"><Link to="/about/ourvalues">Our Values</Link></li>
                <li className="dropdown-item"><Link to="/about/supporters">Supporters</Link></li>
                <li className="dropdown-item"><Link to="/about/awards">Awards</Link></li>
              </ul>
            )}
          </li>

          {/* Dropdown for Services */}
          <li className={`navbar-item dropdown ${isServicesDropdownOpen ? 'open' : ''}`} onClick={toggleServicesDropdown}>
            <Link className="dropdown-toggle">Services</Link>
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

          <li className="navbar-item"><Link to="/csr">CSR</Link></li>

          {/* Dropdown for Gallery */}
          <li className={`navbar-item dropdown ${isGalleryDropdownOpen ? 'open' : ''}`} onClick={toggleGalleryDropdown}>
            <Link className="dropdown-toggle">Gallery</Link>
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

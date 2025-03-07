import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUsers,
  FaRegCalendarAlt ,
  FaUserCheck,
  FaPaperPlane ,
  FaBuilding,
  FaParking,
  FaMobileAlt,
  FaUserTie ,
  FaCommentDots 
} from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import "./AdminDashboard.css";
import Logout from "./LogOut";
import logo from "../../Components/Navbar/Images/TZP-WHITE-LOGO.png";

const AdminDashboard = ({ onToggleSidebar }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();


  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    onToggleSidebar(!collapsed);
  };

  const handleNavItemClick = () => {
    if (window.innerWidth <= 768) {
      setCollapsed(true);
    }
  };

  return (
    <>
      <div className="admin-header">
        <div className="admin-header-left">

          <div
            className={`admin-sidebar-toggle ${collapsed ? 'collapsed' : ''}`}
            onClick={toggleSidebar}
          >
            <IoHomeOutline className="toggle-icon" />
          </div> &nbsp;&nbsp;
          <img src={logo} alt="Logo" className="Admin-company-logo" />
        </div>
        <div className="admin-header-right">
          <div className="logout-button">
            <Logout />
          </div>
        </div>
      </div>

      <div className={`admin-sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="admin-position-sticky">
          <ul className="nav flex-column">

            <h2 className="text-center">Admin</h2>

            {/* <li className={`admin-nav-item ${location.pathname === '/admin-csr' ? 'active' : ''}`}>
              <Link className="nav-link" to="/admin-csr" onClick={handleNavItemClick}>
                <FaUsers className="admin-nav-icon" />
                {!collapsed && <span className="link_text">CSR </span>}
              </Link>
            </li> */}
            {/* <li className={`admin-nav-item ${location.pathname === '/admin-education' ? 'active' : ''}`}>
              <Link className="nav-link" to="/admin-education" onClick={handleNavItemClick}>
                <FaUserTie className="admin-nav-icon" />
                {!collapsed && <span className="link_text">Education </span>}
              </Link>
            </li> */}
            {/* <li className={`admin-nav-item ${location.pathname === '/admin-planetorium' ? 'active' : ''}`}>
              <Link className="nav-link" to="/admin-planetorium" onClick={handleNavItemClick}>
                <FaBuilding className="admin-nav-icon" />
                {!collapsed && <span className="link_text">Planetarium Shows</span>}
              </Link>
            </li> */}

            {/* <li className={`admin-nav-item ${location.pathname === '/admin-stemlabs' ? 'active' : ''}`}>
              <Link className="nav-link" to="/admin-stemlabs" onClick={handleNavItemClick}>
                <FaParking  className="admin-nav-icon" />
                {!collapsed && <span className="link_text">STEM Labs</span>}
                </Link>
                </li> */}


            
            <li className={`admin-nav-item ${location.pathname === '/admin-blogupload' ? 'active' : ''}`}>
              <Link className="nav-link" to="/admin-blogupload" onClick={handleNavItemClick}>
                <FaMobileAlt className="admin-nav-icon" />
                {!collapsed && <span className="link_text">Blog- Uploads</span>}
              </Link>
            </li>
            <li className={`admin-nav-item ${location.pathname === '/admin-contacts' ? 'active' : ''}`}>
              <Link className="nav-link" to="/admin-contacts" onClick={handleNavItemClick}>
                <FaMobileAlt className="admin-nav-icon" />
                {!collapsed && <span className="link_text">Contacts</span>}
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

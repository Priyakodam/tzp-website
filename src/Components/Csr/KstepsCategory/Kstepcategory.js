import React, { useState } from "react";
import "./Kstepcategory.css"; // Import CSS
import image1 from '../Images/catcsr1.png'
import image2 from '../Images/catcsr2.png'
import image3 from '../Images/catedu1.jpg'
import image4 from '../Images/catedu2.png'
import image5 from '../Images/catedu3.jpg'
import image6 from '../Images/catedu4.jpg'
import image7 from '../Images/catedu5.png'
import image8 from '../Images/catedu6.png'
import image9 from '../Images/catplane1.jpg'
import image10 from '../Images/catplane2.jpg'
import image11 from '../Images/stemlabs.jpg'
import { useNavigate } from "react-router-dom";

const categories = {
  CSR: [
    {
      title: "Role of CSR in Bridging the Education Gap for Underprivileged Children",
      image: image1,
      path: "/csrcard1",
    },
    {
      title: "Lunar Lessons: How CSR Brightens the Future of Planetarium Outreach",
      image: image2,
      path: "/csrcard2",
    },
  ],
  Education: [
    { title: "Immersive Learning - Transformation of Modern Education with VR and AR", image: image3, path: "/educard1" },
    { title: "Celebration of National Space Day: India's Journey to the Moon", image: image4, path: "/educard2" },
    { title: "From Fields to Classrooms: Thoughts by the Founder", image: image5, path: "/educard3" },
    { title: "SDG4: Thoughts by the Co-Founder",image: image6,  path: "/educard4" },
    { title: "The Need for Science Outreach Programs Under SDG4",image: image7, path: "/educard5" },
    { title: "Hands-On Science: Engaging Students with Science Kits",image: image8, path: "/educard6" },
  ],
  Planetarium: [
    { title: "Bringing the Universe to You: Portable 360 Dome-Based Planetariums for Schools", image: image9, path: "/planecard1" },
    { title: "The Benefits of Planetarium Shows for Education and Outreach", image: image10, path: "/planecard2" },
  ],
  "STEM Labs": [{ title: "Transform Your Classroom with a STEM Lab", image: image11, path: "/stemcard" }],
};

const CategoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState("CSR");
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path) navigate(path);
  };

  return (
    <div className="categories-container">
      <div className="fixed-sidebar">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`category-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <h1>Explore {activeCategory}</h1>
      <div className="content">
        <div className="subcategories">
          {categories[activeCategory].map((subcategory, index) => (
            <div
              key={index}
              className="ksteps-category-card"
              onClick={() => handleNavigation(subcategory.path)}
              style={{ cursor: "pointer" }} // Show clickable effect
            >
              {subcategory.image && <img src={subcategory.image} alt={subcategory.title} className="ksteps-category-card-img" />}
              <h2 className="ksteps-category-card-title">{subcategory.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;

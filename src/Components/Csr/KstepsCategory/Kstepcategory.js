import React, { useState } from "react";
import "./Kstepcategory.css"; // Import CSS

const categories = {
  CSR: [
    "Role of CSR in Bridging the Education Gap for Underprivileged Children",
    "Lunar Lessons: How CSR Brightens the Future of Planetarium Outreach",
  ],
  Education: [
    "Celebration of National Space Day: India's Journey to the Moon",
    "Immersive Learning - Transformation of Modern Education with VR and AR",
    "From Fields to Classrooms: Thoughts by the Founder",
    "From Fields to Classrooms: Thoughts by the Founder",
    "From Fields to Classrooms: Thoughts by the Founder",
    
    
  ],
  Planetorium: [
    "Bringing the Universe to You: Portable 360 Dome-Based Planetariums for Schools",
    "The Benefits of Planetarium Shows for Education and Outreach",
  ],
  "STEM Labs": ["Transform Your Classroom with a STEM Lab"],
};

const CategoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState("CSR");

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
        {/* Subcategories (Cards) */}
        <div className="subcategories">
          {categories[activeCategory].map((subcategory, index) => (
            <div key={index} className="ksteps-category-card">
              <h2 className="ksteps-category-card-title">{subcategory}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;

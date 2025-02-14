import React from "react";
import './Csr.css';
import csr1 from "./Images/csr1.jpg";
import csr2 from "./Images/csr2.png";
import csr3 from "./Images/csr3.jpeg";
import csr4 from "./Images/csr4.jpeg";
import csr5 from "./Images/csr5.jpeg";

const Csr = () => {
  const cards = [
    { 
      title: "Synopsis for Food", 
      imgSrc: csr1, 
      content: "Providing nutritious meals to the underprivileged and reducing food waste." 
    },
    { 
      title: "LTI", 
      imgSrc: csr2, 
      content: "LTI’s initiative focuses on skill development and community welfare programs." 
    },
    { 
      title: "Motilal Oswal Foundation", 
      imgSrc: csr3, 
      content: "Supporting education and healthcare for the less fortunate." 
    },
    { 
      title: "Ksteps", 
      imgSrc: csr4, 
      content: "Empowering students with scholarships and vocational training." 
    },
    { 
      title: "Aviratha", 
      imgSrc: csr5, 
      content: "Dedicated to environmental sustainability and rural development." 
    }
  ];

  return (
    <div className="csr-card-container">
      {cards.map((card, index) => (
        <div key={index} className="csr-card">
          <img src={card.imgSrc} alt={card.title} className="csr-card-image" />
          <h3 className="Sub-Heading csr-card-title">{card.title}</h3>
          <p className="csr-card-content paragraph-element">{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Csr;

import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Csr.css";
import csr1 from "./Images/csr1.jpg";
import csr2 from "./Images/csr2.png";
import csr3 from "./Images/csr3.jpeg";
import csr4 from "./Images/csr4.jpeg";
import csr5 from "./Images/csr5.jpeg";

const Csr = () => {
  const [showCards, setShowCards] = useState(false);
  const cardsRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const cards = [
    { title: "Synopsis for Food", imgSrc: csr1, content: "Providing nutritious meals to the underprivileged and reducing food waste.", path: "/synopsis" },
    { title: "LTI", imgSrc: csr2, content: "LTI’s initiative focuses on skill development and community welfare programs.",path: "/lti" },
    { title: "Motilal Oswal Foundation", imgSrc: csr3, content: "Supporting education and healthcare for the less fortunate.", path: "/motilal-oswal-foundation" },
    { title: "Ksteps", imgSrc: csr4, content: "Empowering students with scholarships and vocational training.", path: "/ksteps-categories" },
    { title: "Aviratha", imgSrc: csr5, content: "Dedicated to environmental sustainability and rural development.", path: "/aviratha" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (cardsRef.current) {
        const cardsTop = cardsRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardsTop < windowHeight * 0.75) {
          setShowCards(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="csr-card-container" ref={cardsRef}>
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`csr-card ${showCards ? "show" : ""}`} 
          onClick={() => card.path && handleNavigation(card.path)}
          style={{ cursor: card.path ? "pointer" : "default" }}
        >
          <img src={card.imgSrc} alt={card.title} className="csr-card-image" />
          <h3 className="csr-card-title">{card.title}</h3>
          <p className="paragraph-element">{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Csr;

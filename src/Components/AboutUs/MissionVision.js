import React from 'react';
import './MissionVision.css'; // External CSS file

const MissionVision = () => {
  return (
    <div className="mission-vision-container">
      <div className="mission-section">
        <h2>Mission</h2>
        <p>
          Tare Zameen Par’s mission is to break down the barriers that have historically limited the access of rural 
          students to modern educational resources. We are committed to bringing the wonders of astronomy, science, 
          and mathematics to the doorstep of every child in India. Our mobile science labs, portable planetariums, 
          science kits, and toys are designed to provide immersive, experiential, and inspirational learning experiences.
        </p>
      </div>

      <div className="vision-section">
        <h2>Vision</h2>
        <p>
          Tare Zameen Par envisions a future where the brilliance of India’s youth knows no geographical bounds. Our 
          vision is to empower every student, regardless of their location, with the tools and knowledge to excel in the 
          fields of science, astronomy, and mathematics. We believe that every young mind, be it in a bustling metropolis 
          or a remote village, should have the opportunity to reach for the stars.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;

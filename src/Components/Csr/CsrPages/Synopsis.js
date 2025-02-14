import React from "react";
import "./Synopsis.css";
import Synopsis1 from "../Images/synopsis1.jpg";

const SynopsisofFood = () => {
  return (
    <div className="spark-container">
      
      <div className="spark-text">
        <h2 className="Sub-Heading">Spark of Curiosity</h2>
        <p className="paragraph-element">
          Spark of Curiosity is a flagship project of <strong>Tare Zameen Par</strong>, 
          supported by <strong>Synopsys</strong>, that provides immersive experiential and inspirational 
          learning to remote area students. It is a combination of various programs that aims 
          to ignite curiosity for science concepts.
        </p>

        <h3>It Includes…!!</h3>
        <ul>
          <li>Digital Mobile Planetarium Shows</li>
          <li>Science Kits Distribution</li>
          <li>Offline Lectures</li>
          <li>Virtual Lectures</li>
          <li>Virtual Teacher Training</li>
          <li>Group Activities by Students</li>
          <li>Interaction with Indian Scientists</li>
          <li>Quiz Competition</li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="spark-image">
        <img
          src={Synopsis1} // Replace with actual image URL
          alt="Spark of Curiosity"
        />
      </div>
    </div>
  );
};

export default SynopsisofFood;

import React from "react";
import "./SparkCuriosity.css";
import curiosityImage from "./images/soc44.png"; // Import your image

const SparkCuriosity = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Side - Card */}
        <div className="col-12 col-md-6">
          <div className="card p-4">
            <div className="card-body">
              <p className="paragraph-element">
                Spark of Curiosity is a flagship project of Tare Zameen Par Trust that provides immersive experiential and inspirational learning to remote area students. It is a combination of various programs that aims to ignite the curiosity to learn science concepts.
              </p>
              <p className="paragraph-element">It Includes…!!</p>

              {/* Two-column list */}
              <div className="row">
                <div className="col-6">
                  <ul className="program-list">
                    <li>Digital Mobile Planetarium Shows</li>
                    <li>Science Kits Distribution</li>
                    <li>Offline Lectures</li>
                    <li>Virtual Lectures</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="program-list">
                    <li>Virtual Teacher Training</li>
                    <li>Group Activities by Students</li>
                    <li>Interaction with Indian Scientists</li>
                    <li>Quiz Competition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="col-12 col-md-6 text-center">
          <img src={curiosityImage} alt="Curiosity" className="img-fluid curiosity-image" />
        </div>
      </div>
    </div>
  );
};

export default SparkCuriosity;

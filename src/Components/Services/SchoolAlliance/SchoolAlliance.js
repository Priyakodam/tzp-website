import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SchoolAlliance.css';

// Importing images from the local folder
import image1 from './images/image1.png';
import image2 from './images/image2.jpeg';
import image3 from './images/image3.png';
import image4 from './images/image4.png';

const SchoolAlliance = () => {
  return (
    <div className="school-alliance-container text-center">
      {/* <h2 className="section-title">Explore Our Mobile Digital Planetarium</h2>
      <p className="section-subtitle">Bringing astronomy education to your school with immersive 360° experiences</p> */}

      <div className="row justify-content-center align-items-center mb-3 school-alliance-fade-in">
        <div className="col-md-10 col-lg-8 school-alliance-card-container">
          <div className="school-alliance-card">
            <img src={image1} alt="Alliance 1" className="school-alliance-card-img-top school-alliance-zoom-effect" />
            <div className="school-alliance-card-body">
              <p className="school-alliance-card-text">This state-of-the-art six-meter digital mobile planetarium cinema dome brings the 360° experience into your school.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center align-items-center mb-3 school-alliance-fade-in">
        <div className="col-md-10 col-lg-8 school-alliance-card-container">
          <div className="school-alliance-card">
            <img src={image2} alt="Alliance 2" className="school-alliance-card-img-top school-alliance-zoom-effect" />
            <div className="school-alliance-card-body">
              <p className="school-alliance-card-text">A Mobile Digital Planetarium is destined to being portable educational environment for almost all topics. The Shows can be conducted at school at any available time and hence the time is not wasted.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center align-items-center mb-3 school-alliance-fade-in">
        <div className="col-md-10 col-lg-8 school-alliance-card-container">
          <div className="school-alliance-card">
            <img src={image3} alt="Alliance 3" className="school-alliance-card-img-top school-alliance-zoom-effect" />
            <div className="school-alliance-card-body">
              <p className="school-alliance-card-text">The dome is easy to transport and quick to set up. It comes with an astronomy expert who can present live planetarium cinema shows and/or play 360° full dome films on a variety of topics.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center align-items-center mb-3 school-alliance-fade-in">
        <div className="col-md-10 col-lg-8 school-alliance-card-container">
          <div className="school-alliance-card">
            <img src={image4} alt="Alliance 4" className="school-alliance-card-img-top school-alliance-zoom-effect" />
            <div className="school-alliance-card-body">
              <p className="school-alliance-card-text">With our mobile planetarium, we reach children in remote areas, providing immersive astronomy education. We can accommodate 35-50 students per show and cover 500 students in a single day.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolAlliance;

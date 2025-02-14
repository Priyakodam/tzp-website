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
    <div className="container text-center py-4">
      <div className="row align-items-center mb-3">
        <div className="col-md-6">
          <img src={image1} alt="Alliance 1" className="img-fluid" />
        </div>
        <div className="col-md-6 text-start">
          <p>This huge state-of-the-art six-meter digital mobile planetarium cinema dome can bring the 360° experience into your school.</p>
        </div>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-md-6">
          <img src={image2} alt="Alliance 2" className="img-fluid" />
        </div>
        <div className="col-md-6 text-start">
          <p>A Mobile Digital Planetarium is destined to being portable educational environment for almost all topics. The Shows can be conducted at school at any available time and hence the time is not wasted.</p>
        </div>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-md-6">
          <img src={image3} alt="Alliance 3" className="img-fluid" />
        </div>
        <div className="col-md-6 text-start">
          <p>The dome is easy to transport and quick to set up. It comes with an astronomy expert who can present live planetarium cinema shows and/or play 360° full dome films on a variety of topics.</p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-12 text-start">
          <p>Astronomy education is easier with planetariums so children at interior areas are also benefited with Mobile System. We accommodate 35-50 Students in one show. We cover 500 students in one day.</p>
        </div>
        <div className="col-md-12 text-center">
          <img src={image4} alt="Alliance 4" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default SchoolAlliance;
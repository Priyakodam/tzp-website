import React from 'react';
import MobileScienceImg1 from './images/Mobile-Science-Lab1.jpeg';
import MobileScienceImg2 from './images/MobileScienceImg2.jpeg'
import MobileScienceImg3 from './images/MobileScienceImg3.jpg'
import MobileScienceImg4 from './images/MobileScienceImg4.jpeg'
import MobileScienceImg5 from './images/MobileScienceImg5.jpeg'
import './MobileScience.css';


const MobileScience = () => {
  return (
    <>
      {/* First Section */}
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Left side - Content */}
          <div className="col-md-6">
            <p className="paragraph-element">
              Instead of mugging up textbooks, science concepts can be understood more effectively through experiments. But far-flung schools neither have a well-equipped laboratory nor a good teacher to explain the science math concepts in depth through experiments. Therefore, TZP has successfully conceptualized and delivered Mobile Science Labs that provide modern lab facilities to students in remote areas.
            </p>
            <p className="paragraph-element">
              Recently, we have delivered three such mobile science labs to the education department of Ladakh. Among them, one is operating in Kargil and the other two are operating in the Chungtang region near the China border.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="col-md-6 text-center">
            <img src={MobileScienceImg1} alt="Mobile Planetarium" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="container-fluid mt-5 py-4 bg-section">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <p className="Sub-Heading  sub-headMSL text-center">These MSLs have the following features:</p>
        <ul className="paragraph-element">
          <li className="mt-3">It is a customized van carrying innovative science kits and exhibits that can explain around 100 science experiments.</li>
          <li className="mt-4">On one side of the bus, there is a 75-inch huge LED smart TV, which can be used to show video content and also connect students to renowned persons virtually.</li>
          <li className="mt-4">The TV is surrounded by interesting science exhibits and working science models, such as Petrol and Diesel engines, a Heart model, the Working of the Kidney, etc.</li>
          <li className="mt-4">On the other side of the bus, there is an interactive window where the teacher can sit and perform science experiments.</li>
          <li className="mt-4">A public addressing system for better interaction.</li>
          <li className="mt-4">Graphics on the MSL are designed in such a way that students will be engaged by seeing attractive designs showing pictures/diagrams of science concepts, math tricks, puzzles, and interesting science facts.</li>
        </ul>
        <p className="paragraph-element" style={{ color: 'red', fontWeight: '600' }}>
          Note: As it is conceptualized and designed by us, more features can be added as per the requirement.
        </p>
      </div>
    </div>
  </div>
</div>

      <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left side - Images in a responsive layout */}
        <div className="col-md-12">
          <div className="row">
            <div className="col-6 col-md-6 mb-3">
              <img src={MobileScienceImg2} alt="Image 1 image" className="img-fluid  w-100 custom-border-radius" />
            </div>
            <div className="col-6 col-md-6 mb-3">
              <img src={MobileScienceImg4} alt="Image 3 image" className="img-fluid w-100 custom-border-radius" />
            </div>
            <div className="col-6 col-md-6 mb-3">
              <img src={MobileScienceImg3} alt="Image 2 image" className="img-fluid  w-100 custom-border-radius" />
            </div>
           
            <div className="col-6 col-md-6 mb-3">
              <img src={MobileScienceImg5} alt="Image 4 image" className="img-fluid  w-100 custom-border-radius" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MobileScience;

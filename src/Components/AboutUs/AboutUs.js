import React from 'react';
import Navbar from '../Navbar/Navbar';
import './AboutUs.css';
import aboutimage from './Images/aboutusmainimage.webp'

import about1 from './Images/img01.jpg'
import about2 from './Images/img01 (1).jpg'
import about3 from './Images/img01 (2).jpg'

import image1 from './Images/Nalini-Aparanji-3.jpg'
import image2 from './Images/Dinesh-Badagandi-768x1152.jpg'
import image3 from './Images/abhi-2.jpg'

import imaget1 from './Images/anilkakodkar_img-1.jpg'
import imaget2 from './Images/DAT-Don-Thomas-with-Discovery-002-e1571322555534.jpg'
import imaget3 from './Images/U_R_Rao.jpg.webp'

import tele from "./Images/telescope-neo50360-5-300x300.jpg"
import teachers from "./Images/teachersimage.jpeg"
import students from "./Images/schoolimage.jpeg"
import school from "./Images/noofschool.jpeg"
import plantorum from "./Images/plantorim.jpeg"





const steps = [
  {
    title: "Need Assessment",
    // Replace with your actual image for Need Assessment
    image: { about1 },
  },
  {
    title: "Program Design",
    // Replace with your actual image for Program Design
    image: { about2 },
  },
  {
    title: "Impactful Execution",
    // Replace with your actual image for Impactful Execution
    image: { about3 },
  },
];

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <div className="image-container">
          <img src={aboutimage} alt="About Us" />
        </div>
        <div className="content-container">
          <h2>Hello We Are Here To Educate You With Planetarium</h2>
          <p>
            <strong>Varnaaz Technologies</strong> is an innovative technology start-up serving various customers in the private, public, and government sectors with innovative products for process automation. Varnaaz Technologies has been constantly innovating and has successfully produced products like a GPS tracker, a farmer horticulture mobile app (connecting farmers with horticulture and agriculture experts), a mobile planetarium for immersive learning, etc.
          </p>

          <hr />
          <h3>Call To Ask Any Question</h3>
          <p>+91 90350 13642</p>
        </div>
      </div>




      <section className="our-steps-section">
        {/* Animated Explore Button */}
        <div className="explore-button-container">
          <button className="explore-button">Explore</button>
        </div>

        {/* Our Steps Title */}
        <h2 className="our-steps-title">Our Steps</h2>

        {/* Circular Step Cards */}
        <div className="steps-cards">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="card-content">
                <span className="step-number">{index + 1}</span>
                <h3 className="step-title">{step.title}</h3>
              </div>
              <div className="card-image">
                <img src={step.image} alt={step.title} />
              </div>
            </div>
          ))}
        </div>
      </section>



      <div className="timeline-container">
        <h2 className="timeline-title">Our Journey</h2>

        {/* Timeline Item 1 */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>2016</h3>
            <h4>Company Established / Piolet Project</h4>
            <p>In Dec-2016 Started Piolet Project at Chikkaballapur District.</p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>2017</h3>
            <h4>Extension to KKDRB</h4>
            <p>Planetariums extended to all the Districts of KKDRB.</p>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>2019</h3>
            <h4>Extension of Division</h4>
            <p>
              After the success of Piolet Project, 4 more planetariums were added to
              the fleet, and we won the Elevate 100 Award.
            </p>
          </div>
        </div>
      </div>


      <div className="team-section">
      <h2 className="team-title">Our Team</h2>
      <div className="team-cards">
        
        {/* Card 1 */}
        <div className="team-card">
          <img 
            src={image1} 
            alt="Founder" 
            className="team-image" 
          />
          <h3 className="team-name">Mrs. Nalini Aparanji</h3>
          <p className="team-role">Founder</p>
        </div>
        
        {/* Card 2 */}
        <div className="team-card">
          <img 
            src={image2} 
            alt="Co-Founder" 
            className="team-image" 
          />
          <h3 className="team-name">Mr. Dinesh Badagandi</h3>
          <p className="team-role">Co-Founder</p>
        </div>
        
        {/* Card 3 */}
        <div className="team-card">
          <img 
            src={image3} 
            alt="Head of Operations" 
            className="team-image" 
          />
          <h3 className="team-name">Mr. Abhijeet Chaudhari</h3>
          <p className="team-role">Head of Operations</p>
        </div>
      </div>
    </div>

    <section className="testimonial-section">
      <h2 className="testimonial-title">Our Testimonials</h2>
      
      <div className="testimonial-container">

        {/* Card 1 */}
        <div className="testimonial-card">
          <div className="testimonial-body">
            <p>
              “Working with this team has been a fantastic experience. 
              Their expertise and support helped us achieve our goals 
              faster than we expected.”
            </p>
          </div>
          <div className="testimonial-footer">
            {/* Small circular image (avatar) */}
            <img
              src={imaget1} 
              alt="Person One" 
              className="testimonial-avatar"
            />
            <h3 className="testimonial-name">John Doe</h3>
            <h4 className="testimonial-role">CEO, TechCorp</h4>
          </div>
        </div>

        {/* Card 2 */}
        <div className="testimonial-card">
          <div className="testimonial-body">
            <p>
              “I’ve never experienced such dedication and professionalism. 
              Their solutions truly transformed our business processes.”
            </p>
          </div>
          <div className="testimonial-footer">
            <img
              src={imaget2}
              alt="Person Two"
              className="testimonial-avatar"
            />
            <h3 className="testimonial-name">Jane Smith</h3>
            <h4 className="testimonial-role">Founder, Creative Studio</h4>
          </div>
        </div>

        {/* Card 3 */}
        <div className="testimonial-card">
          <div className="testimonial-body">
            <p>
              “The team’s innovative approach and consistent support 
              have been game-changers for our growth. Highly recommended!”
            </p>
          </div>
          <div className="testimonial-footer">
            <img
              src={imaget3}
              alt="Person Three"
              className="testimonial-avatar"
            />
            <h3 className="testimonial-name">Bob Johnson</h3>
            <h4 className="testimonial-role">Head of Operations, FinTech</h4>
          </div>
        </div>

      </div>
    </section>


    <section className="stats-section">
      <div className="stats-container">

        {/* 1) Planetariums */}
        <div className="stat-item">
          <img 
            src={plantorum} 
            alt="Planetariums Icon" 
            className="stat-icon" 
          />
          <h3 className="stat-number">20</h3>
          <p className="stat-label">No of Planetariums</p>
        </div>

        {/* 2) Schools */}
        <div className="stat-item">
          <img 
            src={school} 
            alt="Schools Icon" 
            className="stat-icon" 
          />
          <h3 className="stat-number">9500+</h3>
          <p className="stat-label">No of Schools</p>
        </div>

        {/* 3) Students */}
        <div className="stat-item">
          <img 
            src={students} 
            alt="Students Icon" 
            className="stat-icon" 
          />
          <h3 className="stat-number">2.5 M+</h3>
          <p className="stat-label">No of Students</p>
        </div>

        {/* 4) Teachers */}
        <div className="stat-item">
          <img 
            src={teachers} 
            alt="Teachers Icon" 
            className="stat-icon" 
          />
          <h3 className="stat-number">80000+</h3>
          <p className="stat-label">No of Teachers</p>
        </div>

        {/* 5) Telescopes */}
        <div className="stat-item">
          <img 
            src={tele} 
            alt="Telescopes Icon" 
            className="stat-icon" 
          />
          <h3 className="stat-number">3+</h3>
          <p className="stat-label">No of Telescopes</p>
        </div>

      </div>
    </section>

    </div>
  );
};

export default AboutUs;

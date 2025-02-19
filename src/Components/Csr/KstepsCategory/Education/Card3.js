import React from 'react';
import image1 from '../../Images/catedu1.jpg'

const Card3 = () => {
  return (
    <div className="kstep-container mt-4">
      <h2 className="text-primary text-center mb-4 kstep-main-heading">
        Immersive Learning - Transformation of Modern Education with VR and AR
      </h2>
      
      <div className="kstep-row justify-content-center">
                <div className="kstep-col-md-6 d-flex justify-content-center align-items-center">
                    <img src={image1} alt="Card 1" className="img-fluid" />
                </div>
            </div>

      <section className="mt-4">
        <p className='kstep-paragraph-element'>
          Immersive learning is changing the way modern education is designed in order to make learning interactive,
          experiential, and practical through the use of Virtual Reality (VR) and Augmented Reality (AR). These technologies
          place virtual lifelike worlds at students’ fingertips and make complex subjects accessible. In Tare Zameen Par (TZP),
          immersive learning forms the base of our mobile planetarium initiatives, bringing the cosmos right into the palms of
          students’ hands with the help of VR.
        </p>
      </section>
      
      <h5 className='kstep-Sub-Heading'>What is Immersive Learning?</h5>
      <section className="mt-4">
        <p className='kstep-paragraph-element'>
          Immersive learning is the way of teaching which creates incredible, interactive environments for the students. Using VR
          in schools and AR in schools, students can visualize abstract ideas and experience things that could not be accomplished
          through traditional learning methods.
        </p>
      </section>
      
      <h5 className='kstep-Sub-Heading'>How Immersive Learning Works at Tare Zameen Par</h5>
      <section className="mt-4">
        <p className='kstep-paragraph-element'>
          We take students on space travel to its depths through VR planetarium shows at TZP. Through virtual learning environments,
          the students come out with a practical understanding of astronomy connected to something better.
        </p>
      </section>
      
      <h5 className='kstep-Sub-Heading'>Benefits of Immersive Learning</h5>
      <section className="mt-4">
        <ul>
          <li><strong>High Retention with Active Participation:</strong> Immersive learning involves students retaining much information because they actively interact with the material, increasing retention rates and participation.</li>
          <li><strong>High Engagement:</strong> Immersive learning keeps students much more attentive and interested, particularly in STEM education, where abstract concepts are made understandable.</li>
        </ul>
      </section>
      
      <h5 className='kstep-Sub-Heading'>Role of Technology in Immersive Education</h5>
      <section className="mt-4">
        <p className='kstep-paragraph-element'>
          VR, AR, and Artificial Intelligence (AI) are some of the key emerging trends in immersive technology in education. At TZP,
          we use VR tech to take students on virtual tours of space while AR overlays classroom experiences with 3D models of space.
          These make learning more vibrant and accessible.
        </p>
      </section>
      
      <h5 className='kstep-Sub-Heading'>Real-World Examples from Tare Zameen Par</h5>
      <section className="mt-4">
        <p className='kstep-paragraph-element'>Our VR planetarium shows at TZP enable students to:</p>
        <ul>
          <li>Embark on planetary surface expeditions</li>
          <li>Witness how stars are born and die</li>
          <li>Experience traveling through asteroid belts</li>
        </ul>
        <p className='kstep-paragraph-element'>
          These experiences provide hands-on knowledge of astronomy and allow students to visualize processes that textbooks can only describe.
        </p>
      </section>
      
      <h5 className='kstep-Sub-Heading'>Effect of Immersive Learning on Students</h5>
      <section className="mt-4">
        <ul>
          <li><strong>Enhancing Student Performance:</strong> Students who take part in immersive environments perform better in subjects like astronomy than those using traditional learning approaches.</li>
          <li><strong>Developing Interest in STEM Fields:</strong> This experience helps students understand deep concepts, leading them to engage in science and technology fields.</li>
        </ul>
      </section>
      
      <h5 className='kstep-Sub-Heading'>Conclusion</h5>
      <section className="mt-4">
        <p className='kstep-paragraph-element'>
          Immersive learning is not just a passing trend; it is indeed the future of education. Tare Zameen Par is setting standards
          and leading the country in adopting VR and AR into our planetarium programs, offering students experiences that change them.
          As immersive technologies continue to develop, they will play an even greater role in shaping the future of education.
        </p>
      </section>
    </div>
  );
};

export default Card3;
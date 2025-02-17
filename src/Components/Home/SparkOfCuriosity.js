import React from "react";
import "./SparkOfCuriosity.css"; // Import CSS
import centerImage from "./Images/soc44.png"; // Import your image
import img1 from "./Images/Picture1.png"; // Import your images
import img2 from "./Images/Picture3.png"; 


import imgd1 from "./Images/dk1.png"; // Import your images
import imgd2 from "./Images/dk2.png";
import imgd3 from "./Images/dk3.png";
import imgd4 from "./Images/dk4.png";
import imgd5 from "./Images/dk5.png";
import imgd6 from "./Images/dk6.png";
const CenteredImageSection = () => {
  return (
        <div>
    <section className="centered-section">
      <div className="content-container">
        <img src={centerImage} alt="Educational Innovation" className="center-image" />
      </div>

      <p className="description">Spark of Curiosity is a flagship project of tare zameen par Trust that provides immersive experiential and inspirational learning to remote area students, It is a combination of various programs that aims to ignite the curiosity to learn the science concepts. </p>
    </section>

    <section className="includes-section">
      <h2 className="section-title">It Includes…!!</h2>
      <div className="includes-container">
        <ul className="includes-list">
          <li>✅ Digital Mobile Planetarium Shows.</li>
          <li>✅ Science kits distribution.</li>
          <li>✅ Offline Lectures.</li>
          <li>✅ Virtual Lectures.</li>
        </ul>
        <ul className="includes-list">
          <li>✅ Virtual Teacher Training.</li>
          <li>✅ Group Activities by Students.</li>
          <li>✅ Interaction with Indian Scientist.</li>
          <li>✅ Quiz Competition.</li>
        </ul>
      </div>
    </section>

    <section className="inauguration-section">
      <h2 className="section-title">Inauguration Event</h2>
      <p className="event-description">
        The inauguration event was held at Government School in Saligrama Village in the Mysore district. Keeping COVID-related protocols in account, it was organized in both offline and virtual modes. The Chief guests and Guests of honor were present virtually.
      </p>

      <div className="event-details">
        <div className="event-block">
          <strong>Guest:</strong>
          <p>
            The science kits were virtually inaugurated by Hon. Chief Guest Sri Kiran Kumar, the renowned Indian Scientist and the former chairman of ISRO. In the virtual presence of Guest of Honor Sri Raja Subramanyam, VP, Application Engineering, Synopsys, Sri A.B. Basavaraj KAS, Director (Technical), KSTePS, and the special guests Sri Mukesh B.A., Director Finance, Synopsys, Sri Chandrashekar B.U., Principal R&D Engineer, Synopsys, Sri Dinesh Badagandi, Founder, Tare Zameen Par, Sri Raveesh S R, Proprietor, Sara Vidya Mandir, Smt Vatsala S K, Vice Principal, Govt Junior College, Saligrama.
          </p>
        </div>

        <div className="event-block">
          <strong>Event Highlights:</strong>
          <p>
            Around 300 students from Saligrama High School and nearby schools attended the inauguration. Guests interacted with students through a big screen. After the formal inauguration, the Guest of Honor addressed the students. Then, Hon. Chief Guest Sri Kiran Kumar shared his valuable experience and had an interaction session where students asked questions. Later, we distributed science kits to all students. Simultaneously, they also experienced the Digital Mobile Planetarium shows.
          </p>
        </div>

        <div className="event-block">
          <strong>Replication:</strong>
          <p>
            After the first successful event, we have replicated this during all the next phases of Science Kit distribution.
          </p>
        </div>

        <div className="event-block">
          <strong>Glimpses:</strong>
          <p>
            (Add images or gallery section if needed)
          </p>
        </div>
      </div>
    </section>


    <section className="mini-science-fair">
      <h2 className="section-title">Success of Mini Science Fair</h2>

      <div className="content">
        <div className="info">
          <p><strong>Student’s Name:</strong> Karthik Katavate</p>
          <p><strong>Project:</strong> Rain Detector for Farmers</p>
          <p>
            <strong>Achievement:</strong> The student’s innovative rain detector model was showcased at the Mini Science Fair and caught the attention of the Guest of Honor, Mr. Anand Kadakol.
          </p>
          <p>
            <strong>Reward:</strong> Impressed with the idea and efforts, Mr. Kadakol generously awarded the student with a grant of ₹10,000 to develop a working prototype of the rain detector.
          </p>
          <p>
            <strong>Commercial Potential:</strong> Mr. Kadakol expressed keen interest in potentially commercializing the model if it proves successful.
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="image-grid">
        <img src={img1} alt="Project Showcase" />
        <img src={img2} alt="Student with Award" />
      </div>
    </section>


    </div>
  );
};

export default CenteredImageSection;

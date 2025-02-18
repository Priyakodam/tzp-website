import React, { useEffect, useRef } from "react";
import "./SparkCuriosity.css";
import curiosityImage from "./images/soc44.png";
import GlimpsesImage from "./images/Glimpses.png";
import KitImage from "./images/KITIMAGE.png";
import fairImage1 from "./images/Picture1.png";
import fairImage2 from "./images/Picture3.png";
import OfflineLecture1 from "./images/Lecture1.jpg"; 
import OfflineLecture2 from "./images/Lecture2.jpeg";
import OfflineLectures3 from "./images/Lecture3.png";
import OfflineLecture4 from "./images/Lecture4.jpeg"; 
import OfflineLecture5 from "./images/Lecture5.jpeg";
import OfflineLecture6 from "./images/Lecture6.jpeg";
import OfflineLecture7 from "./images/Lecture7.jpg"; 
import OfflineLecture8 from "./images/Lecture8.jpeg";
import OfflineLecture9 from "./images/Lecture9.jpg";
import trainingImage1 from "./images/Training1.jpg"; 
import trainingImage2 from "./images/Training2.jpg";
import trainingImage3 from "./images/Training3.jpg";
import trainingImage4 from "./images/Training4.jpg";
import VtrainingImage1 from "./images/V-Lectures1.jpeg";
import VtrainingImage2 from "./images/V-Lectures2.jpeg";
import VtrainingImage3 from "./images/V-Lectures3.jpeg";
import VtrainingImage4 from "./images/V-Lectures4.jpg";
import Goal1 from "./images/Goal1.jpeg";
import Goal2 from "./images/Goal2.jpg";
import Goal3 from "./images/Goal3.jpg";
import Goal4 from "./images/Goal4.jpeg";
import Goal5 from "./images/Goal5.jpg";
import Goal6 from "./images/Goal6.jpeg";
import Goal7 from "./images/Goal7.jpg";
import Goal8 from "./images/Goal8.jpeg";
import Goal9 from "./images/Goal9.jpg";


// Image list for scrolling sections
const OfflineLectures = [OfflineLecture1, OfflineLecture2, OfflineLectures3, OfflineLecture4, OfflineLecture5, OfflineLecture6, OfflineLecture7, OfflineLecture8, OfflineLecture9 ];

const AutoScrollingImages = ({ images, direction = 1 }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 2; // Adjust speed for smooth scrolling
    let scrollDirection = direction; // Pass direction as a prop (1 = Forward, -1 = Reverse)

    const scrollInterval = setInterval(() => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollDirection = -1; // Reverse at the end
      } else if (scrollContainer.scrollLeft <= 0) {
        scrollDirection = 1; // Reverse at the start
      }
      scrollContainer.scrollLeft += scrollSpeed * scrollDirection;
    }, 50);

    return () => clearInterval(scrollInterval);
  }, [direction]);

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      {images.map((src, index) => (
        <div key={index} className="image-container-service-scroll">
          <img src={src} alt={`Scrolling Image ${index + 1}`} className="scroll-image" />
        </div>
      ))}
    </div>
  );
};

const SparkCuriosity = () => {
  return (
    <>
      {/* Spark of Curiosity Section */}
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Left Side - Card */}
          <div className="col-12 col-md-6">
            <div className="card p-4">
              <div className="card-body">
                <p className="paragraph-element">
                  Spark of Curiosity is a flagship project of Tare Zameen Par Trust that provides immersive experiential and inspirational learning to remote area students. It is a combination of various programs that aims to ignite curiosity in learning science concepts.
                </p>
                <p className="paragraph-element">It Includes…!!</p>

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
            <img src={curiosityImage} alt="Curiosity Program" className="img-fluid curiosity-image" />
          </div>
        </div>
      </div>

      {/* Inauguration Event */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="main-heading">Inauguration Event</h2>
            <p className="paragraph-element">
              The inauguration event was held at Government School in Saligrama Village in the Mysore district. It was organized in both offline and virtual modes, with the Chief guests and Guests of honor attending virtually.
            </p>
          </div>

          <div className="col-12 text-center">
            <ul className="paragraph-element">
              <li className="mt-3"><strong>Guest :</strong> The science kits were inaugurated by Hon. Chief Guest Sri Kiran Kumar, former chairman of ISRO.</li>
              <li className="mt-4"><strong>Event Highlights:</strong> Around 300 students attended. Guests interacted with students, and science kits were distributed.</li>
              <li className="mt-4"><strong>Replication :</strong> The same process was followed in future Science Kit distributions.</li>
              <li className="mt-4">
                <strong>Glimpses:</strong>
                
              </li>
              <img src={GlimpsesImage} alt="Glimpses" className="img-fluid glimpses-image glimpses-text-image " />
            </ul>
          </div>
        </div>
      </div>

      {/* Success of Mini Science Fair */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <h2 className="main-heading text-center">Success of Mini Science Fair</h2>

          {/* Left Side - Card Content */}
          <div className="col-12 col-md-6">
            <div className="card p-4 card-height">
              <div className="card-body">
                <p className="paragraph-element"><strong>Student’s Name:</strong> Karthik Katavate</p>
                <p className="paragraph-element"><strong>Project:</strong> Rain Detector for Farmers</p>
                <p className="paragraph-element"><strong>Achievement:</strong> The model caught the attention of Mr. Anand Kadakol.</p>
                <p className="paragraph-element"><strong>Reward:</strong> A grant of ₹10,000 was awarded to develop a working prototype.</p>
                <p className="paragraph-element"><strong>Commercial Potential:</strong> The model has potential for commercialization.</p>
              </div>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="col-12 col-md-6 text-center">
  <div className="image-container-service">
    <img src={fairImage1} alt="Science Fair 1" className="fair-image img-stacked" />
    <img src={fairImage2} alt="Science Fair 2" className="fair-image img-stacked" />
  </div>
</div>

        </div>
      </div>

      {/* Distribution of Kits Section with Auto Scrolling Images */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="main-heading">Distribution of Kits</h2>
            <p className="paragraph-element">
              3000 students across Karnataka received science kits in 26 schools, ensuring they understood each element's benefits.
            </p>
          </div>

          {/* Auto-Scrolling Images */}
          <div className="col-12 text-center mt-5">
            {/* <AutoScrollingImages /> */}
            <img src={KitImage} alt="Glimpses" className="img-fluid glimpses-image" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
  <div className="row">
    <div className="col-12 text-center">
      <h2 className="main-heading">Offline Lectures</h2>
      <p className="paragraph-element">
        We always focus on conceptual learning. Learning science is more effective and useful if the concept is understood more practically keeping the topics and experiment in mind. We had arranged offline lectures where our science teachers used to explain the deep concept behind the experiments, Origami activities, and career guidance have helped students to choose the right path in their career.
      </p>
    </div>

    {/* Forward Scrolling */}
    <div className="col-12 text-center mt-3 image-container-service-scroll">
      <AutoScrollingImages images={OfflineLectures} direction={1} /> 
    </div>
  </div>
</div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="main-heading">Teacher’s Training</h2>
            <p className="paragraph-element">
            We organized a two-day residential training camp in Mysore for at least one teacher from each school and the cluster head. A well-known academician who developed the Muni International method of education Mr. Ashok Thakur, and well-known trainer and Speaker Mr. Chetan Ram mentored all teachers. During this training, teachers from targeted rural schools learned innovative teaching methods and 21st-century life skills that they can apply to their regular teaching. To aid them further, we provided a free online platform with access to the latest learning tools, animated education content, and assessment platform for teachers and students. The teachers were thrilled to be a part of this training and expressed their gratitude to Synopsys and Tare Zameen Par team for this opportunity.
            </p>
          </div>

          {/* Auto-Scrolling Images */}
          <div className="col-12 text-center mt-3">
          <div className="image-grid">
            <img src={trainingImage1} alt="Teacher Training 1" className="grid-image" />
            <img src={trainingImage2} alt="Teacher Training 2" className="grid-image" />
            <img src={trainingImage3} alt="Teacher Training 3" className="grid-image" />
            <img src={trainingImage4} alt="Teacher Training 4" className="grid-image" />
          </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="main-heading">Virtual Lectures</h2>
            <p className="paragraph-element">
               We also arranged the lectures over ZOOM. Some schools don’t have a projector and internet facilities. We discussed with teachers to form groups of students and give them their smartphones to attend the zoom lectures. This went well and it could help us to keep in their touch to solve any problem related to science kits.
            </p>
          </div>

          {/* Auto-Scrolling Images */}
          <div className="col-12 text-center mt-3">
          <div className="image-grid">
            <img src={VtrainingImage1} alt="Virtual Lectures 1" className="grid-image" />
            <img src={VtrainingImage2} alt="Virtual Lectures 2" className="grid-image" />
            <img src={VtrainingImage3} alt="Virtual Lectures 3" className="grid-image" />
            <img src={VtrainingImage4} alt="Virtual Lectures 4" className="grid-image" />
          </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
  <div className="row">
    <div className="col-12 text-center">
      <h2 className="main-heading">Our Goals</h2>
      <p className="paragraph-element">
        We also arranged the lectures over ZOOM. Some schools don’t have a projector and internet facilities. We discussed with teachers to form groups of students and give them their smartphones to attend the zoom lectures. This went well and it could help us to keep in their touch to solve any problem related to science kits.
      </p>
    </div>

  

    {/* Numbered List */}
    <div className="col-12 text-center mt-3">
      <ol className="paragraph-element">
        <li className="mt-3">
          <strong>Importance of Rural Education :</strong> In India, education in the rural segment is not only important to eradicate poverty and illiteracy, but also for a variety of other social, economic, cultural, and political reasons.
        </li>
        <li className="mt-4">
          <strong>Schools in Rural India:</strong> Eighty-seven percent of the schools in India are in the country’s villages. Government statistics and independent surveys have revealed that over 90 percent of the rural schools at the elementary level are run by the government.
        </li>
        <li className="mt-4">
          <strong>Importance of Science Education:</strong> Science education gives students the opportunity to gain a better knowledge of how and why things function. Science can teach children about the world that surrounds them. Beyond the potential scientific breakthroughs, there are individual benefits to learning science, such as developing our ability to ask questions, collect information, organize and test our ideas, solve problems, and apply what we learn.
        </li>
        <li className="mt-4">
          <strong>Challenges in Learning Science:</strong> Science can be learned better practically. But the government-run schools from rural areas are not able to provide quality education. They do not have a well-equipped lab, a good teacher, or access to the latest technologies. Even they find it very difficult to go and visit the Science centers that are located in metro cities.
        </li>
      </ol>
    </div>
      {/* Reverse Scrolling */}
      <div className="col-12 text-center mt-3">
      <AutoScrollingImages images={[Goal1, Goal2, Goal3, Goal4, Goal5, Goal6, Goal7,Goal8, Goal9]} direction={-1} />
    </div>
  </div>
</div>

    </>
  );
};

export default SparkCuriosity;

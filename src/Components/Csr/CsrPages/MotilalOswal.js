import React from "react";
import "./MotilalOswal.css";
import motilal1 from "../Images/motilal1.jpg";
import motilal2 from "../Images/motilal2.jpg";
import motilal3 from "../Images/motilal3.jpg";

const MotilalOswal = () => {
  return (
    <div className="motilal-container">
      {/* Text Content */}
      <div className="motilal-text">
        <h2>Astronomy Outreach Program</h2>
        <p className="paragraph-element">
          At <strong>Saare Tare Zameen Par Trust</strong>, we firmly believe that knowledge has the
          power to illuminate young minds and shape a brighter future. Our commitment
          to making a difference took flight through a remarkable Astronomy Outreach Program,
          generously funded by <strong>Motilal Oswal Foundation</strong>. This initiative left an
          indelible mark on the curious minds of children in Wada Taluk, Maharashtra.
        </p>

        <h3>🌟 Objective</h3>
        <p className="paragraph-element">
          The primary aim was to introduce the wonders of the cosmos to young students and
          foster an enduring interest in science and astronomy.
        </p>
        <div className="row">
            <div className="col-md-6">

        <h3>🚀 Program Highlights</h3>
        <ul>
          <li><strong>Planetarium Shows:</strong> Over 4000 students experienced immersive space journeys.</li>
          <li><strong>Telescope Demonstration:</strong> Hands-on experience with celestial observations.</li>
          <li><strong>Interactive Sessions:</strong> Q&A with experts, fostering curiosity and critical thinking.</li>
        </ul>
        
        <h3>🌍 Impact</h3>
        <ul>
          <li>Ignited a passion for science and astronomy in young minds.</li>
          <li>Encouraged students to explore STEM fields.</li>
          <li>Brought advanced educational opportunities to rural areas.</li>
          <li>Strengthened bonds between communities and organizations.</li>
        </ul>
        </div>
        {/* <div className="col-md-6 motilalimg-1">
        <img src={motilal2} alt="Astronomy Program 1" /> 

        </div> */}

          <div className="col-md-6 motilal-video">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/-VfvC07jQuk" 
          title="YouTube Video"
          allowFullScreen
        ></iframe>
      </div>
        </div>
        <h3>🙏 Gratitude</h3>
        <p className="paragraph-element">
          We extend heartfelt gratitude to the <strong>Motilal Oswal Foundation</strong> for their support
          in making this program a reality.
        </p>

        <h3>🌠 Conclusion</h3>
        <p className="paragraph-element">
          This initiative showcased our dedication to nurturing young minds. Stay tuned for more updates
          as we continue to inspire children to reach for the stars.
        </p>
      </div>

      {/* Video Section */}
      {/* <div className="motilal-video">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/-VfvC07jQuk?start=45" 
          title="YouTube Video"
          allowFullScreen
        ></iframe>
      </div> */}

      {/* Image Section */}
      <div className="motilal-images">
        <img src={motilal1} alt="Astronomy Program 1" />
        <img src={motilal2} alt="Astronomy Program 2" />
        <img src={motilal3} alt="Astronomy Program 3" />
      </div>
    </div>
  );
};

export default MotilalOswal;

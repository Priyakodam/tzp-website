import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Webinar.css"; // Importing the CSS file for background animation


const Webinar = () => {
  return (
    <div className="webinar-container">
 
      <div className="container my-5">
        {/* Webinar Introduction */}
        <motion.div
          className="row justify-content-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="col-12">
            <motion.div
              className="card shadow p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="text-center text-primary main-heading">
                🌟 Monthly Webinar Series 🌟
              </h2>
              <p className="text-center paragraph-element">
                <strong>Saare Tare Zameen Par Trust</strong> is hosting a webinar titled:{" "}
                <span className="text-danger paragraph-element">
                  “ಮಕ್ಕಳಲ್ಲಿ ವಿಜ್ಞಾನ ಮತ್ತು ಗಣಿತದ ಕಲಿಕೆಯ ಹುರುಪನ್ನು ಹೇಗೆ ಹೆಚ್ಚಿಸಬಹುದು?”
                </span>{" "}
                (How to enhance children's interest in Science & Mathematics?).
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Key Details Section */}
        <motion.div
          className="row mt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="col-12">
            <motion.div
              className="card p-4 shadow"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <h4 className="text-center text-success main-heading">📌 Webinar Highlights</h4>
              <ol className="list-group list-group-flush paragraph-element">
                <li className="list-group-item"><strong>Frequency:</strong> Two webinars every month.</li>
                <li className="list-group-item"><strong>Target Audience:</strong> Students in remote areas.</li>
                <li className="list-group-item"><strong>Audience Size:</strong> Over 30,000 students per session.</li>
                <li className="list-group-item"><strong>Impact:</strong> Igniting curiosity and a love for learning.</li>
              </ol>
            </motion.div>
          </div>
        </motion.div>

        {/* Resource Persons List */}
        <motion.div
          className="row justify-content-center mt-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
         <div className="col-12">
  <motion.div className="card p-4 shadow">
    <h4 className="text-center text-warning main-heading">🎙️ Resource Persons</h4>
    <ul className="list-group list-group-flush paragraph-element">
      <li className="list-group-item"><strong>Dr. Gururaj Karajagi:</strong> Well-known Academician and Chairman of Academy for Creative Teaching, Bangalore.</li>
      <li className="list-group-item"><strong>Dr. Shivaprasad Khened:</strong> Advisor, Chhatrapati Shivaji Maharaj VastuSangrahalay, Mumbai. Former Director, Nehru Science Centre, Mumbai, National Science Centre, Delhi, Visvesvaraya Museum, Bangalore, and National Gallery of Modern Art, Mumbai.</li>
      <li className="list-group-item"><strong>Sri. VSS Sastry:</strong> Science and Math Communicator, Science Writer, Origamian.</li>
      <li className="list-group-item"><strong>Dr. Suresh H Jangamashetti:</strong> Hon’ble Chancellor, Haveri University, Haveri.</li>
      <li className="list-group-item"><strong>Sri. Kollegala Sharma:</strong> Retired Chief Scientist, CSIR-Central Food Technological Research Institute, Mysore, and Science Writer and Communicator.</li>
      <li className="list-group-item"><strong>Dr. Ashok Alur:</strong> Vice Chancellor, Kodagu University, Kodagu.</li>
      <li className="list-group-item"><strong>Sri. Shreeram Bhat:</strong> Science Teacher, and State Level Science Resource Person.</li>
      <li className="list-group-item"><strong>Sri. CN Lakshminarayan Hebbar:</strong> Retired District Science Officer, District Science Centre, NCSM, Kalaburagi.</li>
      <li className="list-group-item"><strong>Dr. Raghavendra R:</strong> Teaching Faculty, IISC Challakere, Chitradurga.</li>
      <li className="list-group-item"><strong>Sri. S.V. Burli:</strong> State Awardee, Headmaster, B.V.V High School, Thidagundi, Dist. Vijaypur.</li>
      <li className="list-group-item"><strong>Sri. Narayan Babanagar:</strong> State Awardee, Headmaster, Government High School, Chimmalagi, Vijayapura.</li>
      <li className="list-group-item"><strong>Sri. A Ramaswamy:</strong> National Best Teacher Awardee.</li>
      <li className="list-group-item"><strong>Sri. Rajesh P Bhat:</strong> Physics and Mathematics Teacher.</li>
      <li className="list-group-item"><strong>Dr. Prayag H.S:</strong> Chief Veterinary Officer, Government of Karnataka.</li>
      <li className="list-group-item"><strong>Acharya Prof. Dr. Suresha K Narpavi:</strong> Director, Department of Yoga, Yoga Sanskritum University, Florida, USA (Religious University).</li>
    </ul>
  </motion.div>
</div>

        </motion.div>

        {/* Video Section */}
        <motion.div
          className="row justify-content-center mt-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="col-12">
            <div className="card shadow p-4 text-center">
              <h4 className="text-info main-heading">🎥 Watch Our Latest Webinar</h4>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }}>
                <iframe
                  className="embed-responsive-item"
                  width="100%"
                  height="450"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                  src="https://www.youtube.com/embed/GSZSiTSIjks?start=2"
                  title="Embedded Webinar Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Webinar;
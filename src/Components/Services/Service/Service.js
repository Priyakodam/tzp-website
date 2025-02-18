import React, { useState } from "react";
import "./Service.css"; // Import CSS file for styling

const services = [
  {
    title: "Mobile Planetarium Shows",
    description:
      "Engaging and educational planetarium shows are brought directly to the schools. These shows use high-quality visuals and narration to introduce students to the wonders of astronomy and the universe.",
  },
  {
    title: "Science Models",
    description:
      "Expert teachers accompany the project and bring a variety of science models to the schools. These models are designed to illustrate scientific principles and concepts in a visual and interactive manner.",
  },
  {
    title: "Hands-On Learning",
    description:
      "The project focuses on hands-on learning experiences. Students actively participate in scientific experiments and activities, allowing them to apply theoretical knowledge and gain a deeper understanding of scientific concepts.",
  },
  {
    title: "Experiential Workshops",
    description:
      "The project offers experiential workshops that encourage students to explore science through practical engagement. These workshops may cover a range of scientific disciplines, from physics and chemistry to biology and environmental science.",
  },
  {
    title: "Teacher Training",
    description:
      "In addition to benefiting students, the project provides training and support to teachers. Educators learn how to effectively use the provided resources and teaching materials to enhance their science education curriculum.",
  },
  {
    title: "Community Engagement",
    description:
      "The project fosters community involvement by encouraging parents and local residents to participate in its activities. This engagement can create a supportive learning environment for students and build a sense of community around science education.",
  },
  {
    title: "Curriculum Integration",
    description:
      "The project aims to complement and enhance the regular curriculum of the schools involved. By providing interactive and practical learning experiences, it helps students better grasp and retain scientific knowledge.",
  },
  {
    title: "Educational Resources",
    description:
      "Beyond the in-person activities, the project may also provide educational resources such as books, materials, or digital content to support ongoing learning and exploration.",
  },
];

const Service = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <p className="main-heading">Services</p>
          <ol className="service-list">
            {services.map((service, index) => (
              <li key={index} className="service-item">
                <div className="question" onClick={() => toggleService(index)}>
                  <strong className="service-title">
                    {service.title}
                  </strong>
                  <span className="toggle-icon">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={`answer ${openIndex === index ? "open" : ""}`}
                >
                  <p className="paragraph-element">{service.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Service;

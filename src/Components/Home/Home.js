import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import ban1 from './Images/homenewlogo.png'
import ban2 from './Images/homenewlogo2.png'
import ban3 from './Images/valuesimage.webp'
import product1 from "./Images/domehome1.jpg";
import product2 from "./Images/bushome2.jpeg";
import product3 from "./Images/Mobile-Science-Labhome3.jpeg";
import product4 from "./Images/home4.jpg";
import product5 from "./Images/home5.jpg";
import product6 from "./Images/starscopehome6.jpg";
import team1 from "./Images/Nalini-Aparanji-3.jpg"; // Import your images
import team2 from "./Images/Dinesh-Badagandi-768x1152.jpg";
import team3 from "./Images/abhi-2.jpg";
import gallery1 from "./Images/gal1.jpeg";
import gallery2 from "./Images/gal2.jpeg";
import gallery3 from "./Images/gal3.jpeg";
import gallery4 from "./Images/gal4.jpeg";
import gallery5 from "./Images/gal5.jpeg";
import gallery6 from "./Images/gal6.png";
import gallery7 from "./Images/gal6.png";
import gallery8 from "./Images/gal7.jpeg";
import gallery9 from "./Images/gal8.jpeg";

import { FaSchool, FaCampground, FaStar } from "react-icons/fa";

import { FaBook, FaChalkboardTeacher, FaQuestionCircle, FaLightbulb, FaUserTie } from "react-icons/fa";
import { 
  Users, Search, Trophy, Handshake, Shield, Truck, PaintBucket, Compass 
} from "lucide-react";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: ban1, // Replace with actual image URL
      title: "A Planetarium On Wheels! Bringing Space Down To Earth For India’s Rural Kids!",
      buttonText: "Learn More",
    },
    {
      image: ban2, // Replace with actual image URL
      title: "Dome Based Learning Through Portable Planetarium",
      titile2:"Tare Zameen Par Provides mobile planetarium to schools creating the same experience in visiting a science planetarium but at a low cost.",
      buttonText: "Learn More",
    },
  ];

  const events = [
    {
      icon: <FaSchool className="icon" />, // School events icon
      title: "FOR SCHOOL EVENTS",
      description:
        "Our planetarium will engage, amaze, and inspire as we take you on a Space adventure. Suitable for Primary Schools, High Schools, and Families. Programs include Indigenous Astronomy, Scientific discoveries, Space Technology, The hunt for extraterrestrial life, and more.",
    },
    {
      icon: <FaCampground className="icon" />, // Summer camp icon
      title: "FOR SUMMER CAMPS",
      description:
        "Tare Zameen Par presents over 50 unique shows for preschool, elementary, middle school, and high school kids. Keep your kids learning and having fun all summer long with engaging and inspiring astronomy and space experiences.",
    },
    {
      icon: <FaStar className="icon" />, // Special events icon
      title: "FOR SPECIAL EVENTS",
      description:
        "Our mobile planetarium can be hired for special events (annual function, family function, Birthday party, etc.). Such as Corporate events organized by MNC Companies and other IT Companies. It's always a thrilling and new experience for their families and friends.",
    },
  ];


  const services = [
    {
      icon: <FaBook />,
      title: "Science Outreach Programs",
      description:
        "Our innovative Science outreach Program includes Digital Planetarium Shows, Science experiments demonstration and training.",
        link: "/spark-curiosity",

    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Teachers Training Programs",
      description:
        "The Technology is always getting updated. We train Teachers and introduce them to the latest Pedagogy so Students can learn more effectively.",
        link: "/spark-curiosity",

    },
    {
      icon: <FaQuestionCircle />,
      title: "Quiz Competitions",
      description:
        'The Quiz competition like "Kaun Banega Saupati" (Inspired by Television Show Kaun Banega Karodpati). That Brings Joy and Fun While Learning New Things.',
        link: "/spark-curiosity",

    },
    {
      icon: <FaLightbulb />,
      title: "Eradication of Superstitious Belief",
      description:
        "Even in the 21st Century, many people have fear and misunderstanding. Our programs bring awareness to help them get rid of superstitious beliefs.",
        link: "/spark-curiosity",

    },
    {
      icon: <FaUserTie />,
      title: "Expert Talk",
      description:
        "We bring experts from institutions like BARC, ISRO, etc., to interact with students and youth. These programs are conducted online as well as offline.",
        link: "/spark-curiosity",

    },
  ];


  const values = [
    { icon: <Compass size={24} />, text: "Inclusivity" },
    { icon: <Search size={24} />, text: "Innovation" },
    { icon: <Trophy size={24} />, text: "Excellence" },
    { icon: <Handshake size={24} />, text: "Collaboration" },
    { icon: <Shield size={24} />, text: "Integrity" },
    { icon: <PaintBucket size={24} />, text: "Impact" },
    { icon: <Truck size={24} />, text: "Passion" },
    { icon: <Users size={24} />, text: "Empowerment" },
  ];


  const productImages = [
    { image: product1, title: "Digital Mobile Planetarium" },
    { image: product2, title: "Mobile Science Lab" },
    { image: product3, title: "Mobile Science Exhibition" },
    { image: product4, title: "Science Kits and Toys" },
    { image: product5, title: "Science Exhibits" },
    { image: product6, title: "Telescope" }
  ];


  const teamMembers = [
    { image: team1, name: "Mrs. Nalini Aparanji", designation: " Founder" },
    { image: team2, name: "Mr. Dinesh Badagandi", designation: "Co-Founder" },
    { image: team3, name: "Mr. Abhijeet Chaudhari", designation: "Head Operations" }

  ];



const galleryImages = [
  { src: gallery1, title: "Co-Founder of Infosys Sri Nandan Nilekani visited TZP Planetarium gallery" },
  { src: gallery2, title: "Honb'le Chief Minister Sri Siddaramaiah Experiencing Mobile Planetarium Showgallery"},
  { src: gallery3, title: "Former ISRO Chairman Dr.AS Kiran Kumar unveiling Spark of Curiosity Science kitgallery"},
  { src: gallery4, title: "Gallery" },
  { src: gallery5, title: " " },
  { src: gallery6, title: " " },
  { src: gallery7, title: "Founder of TZP Mr. Dinesh Badagandi felicitating Sri Mukesh B A Director Finance Synopsys INCgallery" },
  { src: gallery8, title: "Former ISRO Chairman prof UR Rao experiencing planetarium showsgallery"},
  { src: gallery9, title: "Gallery " }
];
  


  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);





  return (
    <div>
    <div className="home-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt="Slide" className="slide-image" />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="slide-content"
            >
              <h2 className="Sub-Heading">{slide.title}</h2>
              <p className="paragraph-element">{slide.titile2}</p>
              <button className="learn-more-btn">{slide.buttonText}</button>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
    <div className="event-cards-container">
      {events.map((event, index) => (
        <div key={index} className="event-card">
          {event.icon}
          <h3 className="Sub-Heading">{event.title}</h3>
          <p className="paragraph-element">{event.description}</p>
        </div>
      ))}
    </div>

    <div className="services-container">
      <h2 className="section-title">
          Our <span className="highlight">Services</span>
        </h2>
      <p>Under the brand name Tare Zameen Par, we provide the following services:</p>

      {/* First row - Always visible */}
      <div className="cards-container">
        {services.slice(0, 3).map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3 className="Sub-Heading" >{service.title}</h3>
            <p className="paragraph-element">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Second row - Appears after clicking */}
      {showAll && (
        <div className="cards-container">
          {services.slice(3, 5).map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3 className="Sub-Heading">{service.title}</h3>
              <p  className="paragraph-element">{service.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Toggle between "View More" and "No More" buttons */}
      <button className="toggle-button" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Read Less" : "Read More"}
      </button>
    </div>


    <section className="values-section">
      <div className="container">
        <h2 className="section-title">
          Our <span className="highlight">Values</span>
        </h2>
        <p className="section-subtitle">Values on which Tare Zameen Par follows:</p>

        <div className="values-content">
          {/* Image Section */}
          <div className="image-container">
            <img src={ban3} alt="Values" className="values-image" />
          </div>

          {/* Values Grid */}
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="icon-container">{value.icon}</div>
                <span className="value-text">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


    <section className="products-section">
  <div className="container">
    <h2 className="products-title">Our <span className="highlight">Products</span></h2>
    <p className="products-description">
      Tare Zameen Par is always dedicatedly working to bring the most innovative products 
      that would take education to the next level. Our major products are:
    </p>

    {/* Products Grid */}
    <div className="products-grid">
      {productImages.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt="Product" className="product-image" />
          <div className="product-info">
            <h3 className="product-text">{product.title}</h3>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="team-section">
      <div className="container">
        <h2 className="team-title">Our <span className="highlight">Team</span></h2>
        <p className="team-description">
          Meet the passionate professionals behind our success. Our team is dedicated to innovation and excellence.
        </p>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt="Team Member" className="team-image" />
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-designation">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="gallery-section">
      <div className="g-container">
        <h2 className="gallery-title">Our <span className="highlight">Gallery</span></h2>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-card">
              <img src={image.src} alt={image.title} className="h-gallery-image" />
              <div className="overlay">
                <span className="image-title">{image.title}</span>
                <button className="zoom-btn" onClick={() => setSelectedImage(image.src)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enlarged Image Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <span className="close">&times;</span>
            <img src={selectedImage} alt="Enlarged View" className="modal-image" />
          </div>
        </div>
      )}
    </section>

    </div>

  );
};

export default Home;

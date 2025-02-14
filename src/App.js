import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import CSR from "./Components/Csr/Csr";
import Gallery from "./Components/Gallery/Gallery";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import SparkCuriosity from "./Components/Services/SparkCuriosity/SparkCuriosity";
import MobilePlanetrium from "./Components/Services/MobilePlanetrium/MobilePlanetrium";
import MobileScience from "./Components/Services/MobileScience/MobileScience";
import Webinar from "./Components/Services/Webinar/Webinar_old";
import JupiterCuriosity from "./Components/Services/JupiterCuriosity/JupiterCuriosity";
import SchoolAlliance from "./Components/Services/SchoolAlliance/SchoolAlliance";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />

          {/* Routes for Individual Services */}
          <Route
            path="/services/spark-curiosity"
            element={<SparkCuriosity />}
          />
          <Route
            path="/services/mobile-planetarium"
            element={<MobilePlanetrium />}
          />
          <Route path="/services/mobile-science" element={<MobileScience />} />
          <Route path="/services/webinar" element={<Webinar />} />
          <Route
            path="/services/jupiter-curiosity"
            element={<JupiterCuriosity />}
          />
          <Route
            path="/services/school-alliance"
            element={<SchoolAlliance />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

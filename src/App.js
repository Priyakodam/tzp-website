import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import CSR from "./Components/Csr/Csr";
import Gallery from "./Components/Gallery/Gallery";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import SynopsisofFood from "./Components/Csr/CsrPages/Synopsis";
import MotilalOswal from "./Components/Csr/CsrPages/MotilalOswal";
import Aviratha from "./Components/Csr/CsrPages/Aviratha";
import Lti from "./Components/Csr/CsrPages/Lti";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/synopsis" element={<SynopsisofFood />} />
          <Route path="/motilal-oswal-foundation" element={<MotilalOswal />} />
          <Route path="/aviratha" element={<Aviratha />} />
          <Route path="/lti" element={<Lti />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

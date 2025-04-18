// import React from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./Components/Home/Home";
// import About from "./Components/AboutUs/AboutUs";
// import OurHistory from "./Components/AboutUs/OurHistory";
// import Team from "./Components/AboutUs/Team";
// import MissionVision from "./Components/AboutUs/MissionVision";
// import OurValues from "./Components/AboutUs/OurValues";
// import Supporters from './Components/AboutUs/Supporters'
// import Awards from './Components/AboutUs/Awards'
// import Contact from "./Components/Contact/Contact";
// import CSR from "./Components/Csr/Csr";
// import Gallery from "./Components/Gallery/Gallery";
// import Testimonials from "./Components/Gallery/Testimonials";
// import Photos from "./Components/Gallery/Photos";
// import Navbar from "./Components/Navbar/Navbar";
// import Services from "./Components/Services/Services";
// import SynopsisofFood from "./Components/Csr/CsrPages/Synopsis";
// import MotilalOswal from "./Components/Csr/CsrPages/MotilalOswal";
// import Aviratha from "./Components/Csr/CsrPages/Aviratha";
// import Lti from "./Components/Csr/CsrPages/Lti";
// import Service from "./Components/Services/Service/Service";
// import SparkCuriosity from "./Components/Services/SparkCuriosity/SparkCuriosity";
// import MobilePlanetrium from "./Components/Services/MobilePlanetrium/MobilePlanetrium";
// import MobileScience from "./Components/Services/MobileScience/MobileScience";
// import Webinar from "./Components/Services/Webinar/Webinar_old";
// import JupiterCuriosity from "./Components/Services/JupiterCuriosity/JupiterCuriosity";
// import SchoolAlliance from "./Components/Services/SchoolAlliance/SchoolAlliance";

// import Footer from "./Components/Footer/Footer";


// import KstepsCategory from "./Components/Csr/KstepsCategory/Kstepcategory";
// import Card1 from "./Components/Csr/KstepsCategory/CSR/Card1";
// import Card2 from "./Components/Csr/KstepsCategory/CSR/Card2";
// import Card3 from "./Components/Csr/KstepsCategory/Education/Card3";
// import Card4 from "./Components/Csr/KstepsCategory/Education/Card4";
// import Card5 from "./Components/Csr/KstepsCategory/Education/Card5";
// import Card6 from "./Components/Csr/KstepsCategory/Education/Card6";
// import Card7 from "./Components/Csr/KstepsCategory/Education/Card7";
// import Card8 from "./Components/Csr/KstepsCategory/Education/Card8";
// import Card9 from "./Components/Csr/KstepsCategory/Planetorium/Card9";
// import Card10 from "./Components/Csr/KstepsCategory/Planetorium/Card10";
// import Card11 from "./Components/Csr/KstepsCategory/STEMLabs/Card11";
// import DaanUtsav from "./Components/Contact/DaanUtsav";
// import TermsAndConditions from "./Components/AboutUs/TermsAndConditions";
// import Login from './Admin/AdminLogin/Login'
// import AdminDashboard from './Admin/Dashboard/AdminDashboard'
// import BlogUpload from './Admin/BlogUploads/BlogUpload'
// import Csr from './Admin/CSR/Csr'
// import Education from './Admin/Education/Education'
// import PlanetoriumShow from './Admin/PlanetoriumShows/PlanetoriumShow'
// import StemLabs from './Admin/STEMLabs/StemLabs'


// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} /> 
//           <Route path="/about/ourhistory" element={<OurHistory />} />
//           <Route path="/about/team" element={<Team />} />
//           <Route path="/about/missionvision" element={<MissionVision />} />
//           <Route path="/about/ourvalues" element={<OurValues />} />
//           <Route path="/about/supporters" element={<Supporters />} />
//           <Route path="/about/awards" element={<Awards />} />

//           <Route path="/contact" element={<Contact />} />
//           <Route path="/csr" element={<CSR />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/gallery/testimonials" element={<Testimonials />} />
//           <Route path="/gallery/photos" element={<Photos />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/synopsis" element={<SynopsisofFood />} />
//           <Route path="/motilal-oswal-foundation" element={<MotilalOswal />} />
//           <Route path="/aviratha" element={<Aviratha />} />
//           <Route path="/lti" element={<Lti />} />
//           <Route path="/ksteps-categories" element={<KstepsCategory />} />
//           {/* Routes for Individual Services */}
//           <Route
//             path="/services/service"
//             element={<Service />}
//           />
//           <Route
//             path="/services/spark-curiosity"
//             element={<SparkCuriosity />}
//           />
//           <Route
//             path="/services/mobile-planetarium"
//             element={<MobilePlanetrium />}
//           />
//           <Route path="/services/mobile-science" element={<MobileScience />} />
//           <Route path="/services/webinar" element={<Webinar />} />
//           <Route
//             path="/services/jupiter-curiosity"
//             element={<JupiterCuriosity />}
//           />
//           <Route
//             path="/services/school-alliance"
//             element={<SchoolAlliance />}
//           />
          
//           {/* csr category cards */}
//           <Route path="/csrcard1" element={<Card1 />} />
//           <Route path="/csrcard2" element={<Card2 />} />

//           {/* Education category cards */}
//           <Route path="/educard1" element={<Card3 />} />
//           <Route path="/educard2" element={<Card4 />} />
//           <Route path="/educard3" element={<Card5 />} />
//           <Route path="/educard4" element={<Card6 />} />
//           <Route path="/educard5" element={<Card7 />} />
//           <Route path="/educard6" element={<Card8 />} />

//           {/* Planetorium category cards */}
//           <Route path="/planecard1" element={<Card9 />} />
//           <Route path="/planecard2" element={<Card10 />} />
          
//           {/* STEM category cards */}
//           <Route path="/stemcard" element={<Card11 />} />
//           <Route path="/contact/daanutsav" element={<DaanUtsav />} />
//           <Route path="/termsandconditions" element={<TermsAndConditions />} />

//           <Route path="/admin-login" element={<Login/>}/>
//           <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
//           <Route path="/admin-blogupload" element={<BlogUpload/>}/>
//           <Route path="/admin-csr" element={<Csr/>}/>
//           <Route path="/admin-education" element={<Education/>}/>
//           <Route path="/admin-planetorium" element={<PlanetoriumShow/>}/>
//           <Route path="/admin-stemlabs" element={<StemLabs/>}/>





//         </Routes>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;




import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/AboutUs";
import OurHistory from "./Components/AboutUs/OurHistory";
import Blog from "./Components/AboutUs/Blog";
import Team from "./Components/AboutUs/Team";
import MissionVision from "./Components/AboutUs/MissionVision";
import OurValues from "./Components/AboutUs/OurValues";
import Supporters from './Components/AboutUs/Supporters'
import Awards from './Components/AboutUs/Awards'
import Contact from "./Components/Contact/Contact";
import CSR from "./Components/Csr/Csr";
import Gallery from "./Components/Gallery/Gallery";
import Testimonials from "./Components/Gallery/Testimonials";
import Photos from "./Components/Gallery/Photos";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import SynopsisofFood from "./Components/Csr/CsrPages/Synopsis";
import MotilalOswal from "./Components/Csr/CsrPages/MotilalOswal";
import Aviratha from "./Components/Csr/CsrPages/Aviratha";
import Lti from "./Components/Csr/CsrPages/Lti";
import Service from "./Components/Services/Service/Service";
import SparkCuriosity from "./Components/Services/SparkCuriosity/SparkCuriosity";
import MobilePlanetrium from "./Components/Services/MobilePlanetrium/MobilePlanetrium";
import MobileScience from "./Components/Services/MobileScience/MobileScience";
import Webinar from "./Components/Services/Webinar/Webinar_old";
import JupiterCuriosity from "./Components/Services/JupiterCuriosity/JupiterCuriosity";
import SchoolAlliance from "./Components/Services/SchoolAlliance/SchoolAlliance";

import Footer from "./Components/Footer/Footer";


import KstepsCategory from "./Components/Csr/KstepsCategory/Kstepcategory";
import Card1 from "./Components/Csr/KstepsCategory/CSR/Card1";
import Card2 from "./Components/Csr/KstepsCategory/CSR/Card2";
import Card3 from "./Components/Csr/KstepsCategory/Education/Card3";
import Card4 from "./Components/Csr/KstepsCategory/Education/Card4";
import Card5 from "./Components/Csr/KstepsCategory/Education/Card5";
import Card6 from "./Components/Csr/KstepsCategory/Education/Card6";
import Card7 from "./Components/Csr/KstepsCategory/Education/Card7";
import Card8 from "./Components/Csr/KstepsCategory/Education/Card8";
import Card9 from "./Components/Csr/KstepsCategory/Planetorium/Card9";
import Card10 from "./Components/Csr/KstepsCategory/Planetorium/Card10";
import Card11 from "./Components/Csr/KstepsCategory/STEMLabs/Card11";
import DaanUtsav from "./Components/Contact/DaanUtsav";
import TermsAndConditions from "./Components/AboutUs/TermsAndConditions";

import Login from "./Admin/AdminLogin/Login";
import AdminDashboard from "./Admin/Dashboard/AdminDashboard";
import BlogUpload from "./Admin/BlogUploads/BlogUpload";
import Csr from "./Admin/CSR/Csr";
import Education from "./Admin/Education/Education";
import PlanetoriumShow from "./Admin/PlanetoriumShows/PlanetoriumShow";
import StemLabs from "./Admin/STEMLabs/StemLabs";
import Contacts from "./Admin/Contacts/Contacts";


// Function to handle conditional rendering of Navbar and Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <div className="content">{children}</div>
      {!isAdminRoute && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/about/ourhistory" element={<OurHistory />} />
          <Route path="/about/blog" element={<Blog />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/missionvision" element={<MissionVision />} />
          <Route path="/about/ourvalues" element={<OurValues />} />
          <Route path="/about/supporters" element={<Supporters />} />
          <Route path="/about/awards" element={<Awards />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/testimonials" element={<Testimonials />} />
          <Route path="/gallery/photos" element={<Photos />} />
          <Route path="/services" element={<Services />} />
          <Route path="/synopsis" element={<SynopsisofFood />} />
          <Route path="/motilal-oswal-foundation" element={<MotilalOswal />} />
          <Route path="/aviratha" element={<Aviratha />} />
          <Route path="/lti" element={<Lti />} />
          <Route path="/ksteps-categories" element={<KstepsCategory />} />
          {/* Routes for Individual Services */}
          <Route
            path="/services/service"
            element={<Service />}
          />
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
          
          {/* csr category cards */}
          <Route path="/csrcard1" element={<Card1 />} />
          <Route path="/csrcard2" element={<Card2 />} />

          {/* Education category cards */}
          <Route path="/educard1" element={<Card3 />} />
          <Route path="/educard2" element={<Card4 />} />
          <Route path="/educard3" element={<Card5 />} />
          <Route path="/educard4" element={<Card6 />} />
          <Route path="/educard5" element={<Card7 />} />
          <Route path="/educard6" element={<Card8 />} />

          {/* Planetorium category cards */}
          <Route path="/planecard1" element={<Card9 />} />
          <Route path="/planecard2" element={<Card10 />} />
          
          {/* STEM category cards */}
          <Route path="/stemcard" element={<Card11 />} />
          <Route path="/contact/daanutsav" element={<DaanUtsav />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />



          {/* Admin Routes (Navbar and Footer Hidden) */}
          <Route path="/admin" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-blogupload" element={<BlogUpload />} />
          <Route path="/admin-csr" element={<Csr />} />
          <Route path="/admin-education" element={<Education />} />
          <Route path="/admin-planetorium" element={<PlanetoriumShow />} />
          <Route path="/admin-stemlabs" element={<StemLabs />} />
          <Route path="/admin-contacts" element={<Contacts />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './Awards.css';
import image1 from './Images/isroimg.jpg'
import image2 from './Images/evateimage.jpg'
import image3 from './Images/globalsumit2022img.jpeg'
import image4 from './Images/prci-1024x768.jpg'
import image5 from './Images/Image-5-1.jpeg'
import image6 from './Images/Beyond-bengaluru-2023.jpeg.jpg'
import image7 from './Images/bcicimage.jpeg'
import image8 from './Images/lotawardsimage.jpg'
import image9 from './Images/Indian-Army.jpeg.jpg'
import image10 from './Images/prciiin-1024x508.jpg'
import image11 from './Images/aeifimage.jpg'


const Awards = () => {
        return (
                <div>
                        <div className="awards-container">
                                {/* Left Side - Image */}
                                <div className="awards-image">
                                        <img src={image1} alt="Award" />
                                </div>

                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p>
                                        Tare Zameen Par Has been recognized by <strong>ISRO </strong>  as their official partner for their space outreach program (Space Tutor) 
                                        </p>
                                </div>
                        </div>

                        <div className="awards-container">
                                {/* Left Side - Image */}


                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p>
                                        Our Founder Receiving the <strong> Elevate 100 Award</strong>  from Govt. of Karnataka for being recognized as one of the most innovative startups in Karnataka for Rural Outreach  Education Program.
                                        </p>
                                </div>

                                <div className="awards-image">
                                        <img src={image2} alt="Award" />
                                </div>
                        </div>
                        <div className="awards-container">
                                {/* Left Side - Image */}
                                <div className="awards-image">
                                        <img src={image3} alt="Award" />
                                </div>

                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p>
                                        Tare Zameen Par received special appreciation and INR 30 Lakhs grants. Ms. Nalini was the only Indian woman entrepreneur among the top 6 pitching her social entrepreneurship at the grand finale in <strong>Tie Global Summit.</strong>
                                        </p>
                                </div>
                        </div>

                        <div className="awards-container">
                                {/* Left Side - Image */}


                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p>
                                        Tare Zameen Par has won awards from <strong>PRCI (Public Relation Council of India) </strong>for Excellence in Education.
                                        </p>
                                </div>

                                <div className="awards-image">
                                        <img src={image4} alt="Award" />
                                </div>
                        </div>
                        <div className="awards-container">
                                {/* Left Side - Image */}
                                <div className="awards-image">
                                        <img src={image5} alt="Award" />
                                </div>

                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p>
                                        Tare Zameen Par received <strong>most promising startup award </strong>from the CM of Karnataka Sh. Basavaraj Bommai and Cricket Veteran Sh. Kapil Dev.
                                        </p>
                                </div>
                        </div>

                        <div className="awards-container">
                                {/* Left Side - Image */}


                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p>
                                        Tare Zameen Par has been awarded the 1st prize as best start-up of <strong>Beyond Bengaluru at Mysore.</strong>
                                        </p>
                                </div>

                                <div className="awards-image">
                                        <img src={image6} alt="Award" />
                                </div>
                        </div>
                        <div className="awards-container">
                                {/* Left Side - Image */}
                                <div className="awards-image">
                                        <img src={image7} alt="Award" />
                                </div>

                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p>
                  Tare Zameen Par has won the best <strong>Women Led Startup</strong> award from <strong>BCIC (Bangalore Chamber of Industry and Commerce)</strong>
                                        </p>
                                </div>
                        </div>

                        <div className="awards-container">
                                {/* Left Side - Image */}


                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p>Nominated for Leaders of tomorrow Season 10 Awards in the Education Category organized by <strong>ETNOW</strong>
                                        </p>
                                </div>

                                <div className="awards-image">
                                        <img src={image8} alt="Award" />
                                </div>
                        </div>
                        <div className="awards-container">
                                {/* Left Side - Image */}
                                <div className="awards-image">
                                        <img src={image9} alt="Award" />
                                </div>

                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p>
                                              
Tare Zameen Par has Received special Appreciation by Indian Army for its Initiative.
                                        </p>
                                </div>
                        </div>

                        <div className="awards-container">
                                {/* Left Side - Image */}


                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p>
                                        Tare Zameen Par has won two awards from <strong>PRCI</strong> (Public Relation Council of India) for Excellence in Education and best start up idea of the year.
                                        </p>
                                </div>

                                <div className="awards-image">
                                        <img src={image10} alt="Award" />
                                </div>
                        </div>

                        <div className="awards-container">
                                {/* Left Side - Image */}
                                <div className="awards-image">
                                        <img src={image11} alt="Award" />
                                </div>

                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p>
                                        Mr. Dinesh Badagandi has received well-deserved recognition and accolades from <strong>AEiF</strong> (Ajeet Entrepreneurship & Innovation Forum) and <strong>TiE</strong> Chapter Bangalore. His commendable efforts in promoting the integration of technology to foster educational equity.

                                        </p>
                                </div>
                        </div>
                </div>
        );
};

export default Awards;

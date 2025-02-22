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
                                        <p className='paragraph-element'>
                                        Tare Zameen Par Has been recognized by <span className='Sub-Heading sub-head'>ISRO </span>  as their official partner for their space outreach program (Space Tutor) 
                                        </p>
                                </div>
                        </div>

                        <div className="awards-container">
                                {/* Left Side - Image */}


                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p className='paragraph-element'>
                                        Our Founder Receiving the <span className='Sub-Heading sub-head'> Elevate 100 Award</span>  from Govt. of Karnataka for being recognized as one of the most innovative startups in Karnataka for Rural Outreach  Education Program.
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
                                        <p className='paragraph-element'>
                                        Tare Zameen Par received special appreciation and INR 30 Lakhs grants. Ms. Nalini was the only Indian woman entrepreneur among the top 6 pitching her social entrepreneurship at the grand finale in <span className='Sub-Heading sub-head'>Tie Global Summit.</span>
                                        </p>
                                </div>
                        </div>

                        <div className="awards-container">
                                {/* Left Side - Image */}


                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p className='paragraph-element'>
                                        Tare Zameen Par has won awards from <span className='Sub-Heading sub-head'>PRCI (Public Relation Council of India) </span>for Excellence in Education.
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
                                        <p className='paragraph-element'>
                                        Tare Zameen Par received <span className='Sub-Heading sub-head'>most promising startup award </span>from the CM of Karnataka Sh. Basavaraj Bommai and Cricket Veteran Sh. Kapil Dev.
                                        </p>
                                </div>
                        </div>

                        <div className="awards-container">
                                {/* Left Side - Image */}


                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p className='paragraph-element'>
                                        Tare Zameen Par has been awarded the 1st prize as best start-up of <span className='Sub-Heading sub-head'>Beyond Bengaluru at Mysore.</span>
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
                                        <p className='paragraph-element'>
                  Tare Zameen Par has won the best <span className='Sub-Heading sub-head'>Women Led Startup</span> award from <span className='Sub-Heading sub-head'>BCIC (Bangalore Chamber of Industry and Commerce)</span>
                                        </p>
                                </div>
                        </div>

                        <div className="awards-container">
                                {/* Left Side - Image */}


                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p className='paragraph-element'>Nominated for Leaders of tomorrow Season 10 Awards in the Education Category organized by <span className='Sub-Heading sub-head'>ETNOW</span>
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
                                        <p className='paragraph-element'>
                                              
Tare Zameen Par has Received special Appreciation by Indian Army for its Initiative.
                                        </p>
                                </div>
                        </div>

                        <div className="awards-container">
                                {/* Left Side - Image */}


                                {/* Right Side - Content */}
                                <div className="awards-content">
                                        <p className='paragraph-element'>
                                        Tare Zameen Par has won two awards from <span className='Sub-Heading sub-head'>PRCI</span> (Public Relation Council of India) for Excellence in Education and best start up idea of the year.
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
                                        <p className='paragraph-element'>
                                        Mr. Dinesh Badagandi has received well-deserved recognition and accolades from <span className='Sub-Heading sub-head'>AEiF</span> (Ajeet Entrepreneurship & Innovation Forum) and <span className='Sub-Heading sub-head'>TiE</span> Chapter Bangalore. His commendable efforts in promoting the integration of technology to foster educational equity.

                                        </p>
                                </div>
                        </div>
                </div>
        );
};

export default Awards;

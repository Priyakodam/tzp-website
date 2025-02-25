import React from 'react';
import './MobilePlanitorium.css';
import img from '../AboutUs/Images/INSIDE-DOME.jpeg'
import img1 from '../AboutUs/Images/PLANETARIUM-1-1024x461.jpeg'
import img2 from '../AboutUs/Images/output-onlinejpgtools-4.png'
import imag3 from '../AboutUs/Images/output-onlinepngtools.png'
import imag4 from '../AboutUs/Images/lastimage.webp'

const MobilePlanitorium = () => {
        return (
                <div>
                        <section className="mobile-planetarium">
                                <h2 className="mobile-planetarium-heading">Why Mobile Planetarium?</h2>
                                <ul className="mobile-planetarium-list">
                                        <li>
                                                The children based near to a Planetarium can visit there and get the planetarium experience.
                                        </li>
                                        <li>
                                                But for the children in interior areas, this experience is often missed. With a Mobile Planetarium, it is possible to reach these children and provide them with the same experience and education available in larger planetariums.
                                        </li>
                                </ul>
                        </section>
                        <section className="benefits-section">
                                <h2 className="benefits-heading">Benefits</h2>
                                <p className="benefits-paragraph">
                                        Digital Mobile Planetarium is our most appreciated project that gives immersive learning experience. It is an inflatable dome with 360° projection system. There are well-established planetariums in metro cities. But, students from remote areas cannot afford to visit them. But our Digital Mobile Planetarium takes that experience to the doorsteps of remote area students. Along with Astronomy, we have other science-related content in English and other regional languages. We had arranged Planetarium shows during each phase of science kit distribution.
                                </p>
                                <div className="benefits-images">
                                        <img
                                                src={img}
                                                alt="Benefit Image 1"
                                                className="benefit-image"
                                        />
                                        <img
                                                src={img1}
                                                alt="Benefit Image 2"
                                                className="benefit-image"
                                        />
                                </div>

                                <p className="benefits-paragraph">Immersive Learning Techniques are proven to be the best pedagogy of teaching as prescribed by the international Educational Scientists. Dome based learning is one such effective method of learning which is mobile and easy to set up in all places with very less effort and time. As the Cap Ex involved in setting up such infrastructure which involves domes/projectors/High quality content/Audio video equipment/software is quite high, Not every school can afford to own or build the on their own.</p>

                                <p className="benefits-paragraph">Planetarium is the most advanced immersive classroom, a place where people can come to learn just about anything and feel as though they are there.</p>

                                <p className="benefits-paragraph">The phrase “The Sky is the Limit” just got a whole new meaning when it
                                        comes to the immersive classroom.</p>
                        </section>


                        <div className="gallery-container">
                                <div className="image-grid">
                                        <img src={img2} alt="Image 1 image" className="gallery-image" />
                                        <img src={imag3} alt="Image 2 image" className="gallery-image" />
                                        <img src={imag4} alt="Image 3 image" className="gallery-image" />
                                </div>
                        </div>


                        <div className="products-container">
                                <h2 className="products-heading">Our Products Include</h2>
                                <ul className="products-list">
                                        <li>Customized Vans to carry the equipment to remote places.</li>
                                        <li>Inflatable domes of 5 and 6-meter diameter, which are easy to set up.</li>
                                        <li>High-end Fish Eye Lens Digistar Projectors for creating a 360° viewing angle.</li>
                                        <li>Software consisting of Live Sky Projection, Show Builder, and STEM-related show projection.</li>
                                        <li>State-of-the-art audio-visual content for creating an immersive learning environment.</li>
                                        <li>Indigenous content in both English and local Indian languages.</li>
                                        <li>A short local language movie shown while kids wait to enter the dome, depicting nature’s truths and superstitions.</li>
                                </ul>
                        </div>


                </div>

        );
};

export default MobilePlanitorium;

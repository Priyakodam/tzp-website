import React from 'react';
import './Supporters.css';
import image1 from './Images/maxresdefault.jpg'
import image2 from './Images/synopsys-vector-logo.png'
import image3 from './Images/LTI_Lets_solve.png'
import image4 from './Images/download-e1572505233349.png'
import image5 from './Images/Untitled.jpeg'
import image6 from './Images/MO_Foundation_Logo.png'
import image7 from './Images/81ImEps4wBL._AC_UF8941000_QL80_.jpg'

const Supporters = () => {
    return (
        <div className="supporters-container">
            <h2 className="main-heading">Supporters - Tare Zameen Par Trust</h2>

            {/* First Row - 4 Images */}
            <div className="supporters-row">
                <img src={image1} alt="Supporter 1 image" className="supporter-img" />
                <img src={image2} alt="Supporter 2 image" className="supporter-img" />
                <img src={image3} alt="Supporter 3 image" className="supporter-img" />
                <img src={image4} alt="Supporter 4 image" className="supporter-img" />
            </div>

            {/* Second Row - 3 Images */}
            <div className="supporters-row">
                <img src={image5} alt="Supporter 5 image" className="supporter-img" />
                <img src={image6} alt="Supporter 6 image" className="supporter-img" />
                <img src={image7} alt="Supporter 7 image" className="supporter-img" />
            </div>
        </div>
    );
};

export default Supporters;

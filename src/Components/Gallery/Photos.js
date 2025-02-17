import React from 'react';
import './Photos.css';
import bus from '../AboutUs/Images/bus.jpeg'
import dome from '../AboutUs/Images/dome.jpg'
import { useNavigate } from 'react-router-dom';

const Photos = () => {
        // Call useNavigate inside the functional component body
        const navigate = useNavigate();
      
        const handleViewMore = () => {
          navigate('/mobileplanitorium'); // Adjust the route as needed
        };
  return (
    <section className="photos-page">
      {/* <h2 className="photos-title">Photos</h2> */}
      <div className="photos-container">

        {/* Card 1 */}
        <div className="photo-card">
          <img
            src={bus}
            alt="Photo 1"
            className="photo-image"
          />
          <h2 className="photo-heading">Mobile Science Lab </h2>
          <button className="viewmore-button">View More</button>
        </div>

        {/* Card 2 */}
        <div className="photo-card">
          <img
            src={dome}
            alt="Photo 2"
            className="photo-image"
          />
          <h1 className="photo-heading">Mobile Planetarium
          </h1>
          <button className="viewmore-button"   onClick={handleViewMore}>View More</button>
        </div>

      </div>
    </section>
  );
};

export default Photos;

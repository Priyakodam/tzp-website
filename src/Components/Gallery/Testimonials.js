import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      {/* <h2>Testimonials</h2> */}
      <div className="video-responsive">
        <iframe
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"  // Replace YOUR_VIDEO_ID with your actual video ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Testimonials;

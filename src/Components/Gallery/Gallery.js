import React from 'react';
import './Gallery.css'; // Ensure to create this CSS file for styling
import img1 from '../Gallery/Images/image1.png';
import img2 from '../Gallery/Images/image2.jpg';
import img3 from '../Gallery/Images/image3.jpeg';
import img4 from '../Gallery/Images/image4.jpg';
import img5 from '../Gallery/Images/image5.jpeg';
import img6 from '../Gallery/Images/image6.jpg';

import img7 from '../Gallery/Images/imageh1.jpg';
import img8 from '../Gallery/Images/imageh2.jpg';
import img9 from '../Gallery/Images/imageh3.jpg';
import img10 from '../Gallery/Images/image4.jpg';
import img11 from '../Gallery/Images/imageh5.jpeg';
import img12 from '../Gallery/Images/imageh6.jpg';

import img13 from '../Gallery/Images/imagep1.jpg';
import img14 from '../Gallery/Images/imagep2.jpeg';
import img15 from '../Gallery/Images/imagep3.jpg';
import img16 from '../Gallery/Images/imagep4.jpeg';
import img17 from '../Gallery/Images/imagep5.jpg';
import img18 from '../Gallery/Images/imagep6.jpeg';

import img19 from '../Gallery/Images/imageS1.png';
import img20 from '../Gallery/Images/imageS2.jpeg';
import img21 from '../Gallery/Images/imageS3.jpg';
import img22 from '../Gallery/Images/imageS4.jpeg';
import img23 from '../Gallery/Images/imageS5.jpeg';
import img24 from '../Gallery/Images/imageS6.jpeg';

import img25 from '../Gallery/Images/imageN1.jpg';
import img26 from '../Gallery/Images/imageN2.jpg';
import img27 from '../Gallery/Images/imageN3.jpg';
import img28 from '../Gallery/Images/imageN4.jpg';
import img29 from '../Gallery/Images/imageN5.jpg';
import img30 from '../Gallery/Images/imageN6.jpg';

const Gallery = () => {



  return (
    <div>
      <div className="photo-gallery">
        <div className="picture-grid">
          <img src={img1} alt="Photo 1" className="gallery-photo" />
          <img src={img2} alt="Photo 2" className="gallery-photo" />
          <img src={img3} alt="Photo 3" className="gallery-photo" />
        </div>
        <div className="picture-grid">
          <img src={img4} alt="Photo 1" className="gallery-photo" />
          <img src={img5} alt="Photo 2" className="gallery-photo" />
          <img src={img6} alt="Photo 3" className="gallery-photo" />
        </div>
      </div>

      <div className="photo-gallery">
        <h1 >Honorable Guest</h1>
        <div className="picture-grid">
          <img src={img7} alt="Photo 1" className="gallery-photo" />
          <img src={img8} alt="Photo 2" className="gallery-photo" />
          <img src={img9} alt="Photo 3" className="gallery-photo" />
        </div>
        <div className="picture-grid">
          <img src={img10} alt="Photo 1" className="gallery-photo" />
          <img src={img11} alt="Photo 2" className="gallery-photo" />
          <img src={img12} alt="Photo 3" className="gallery-photo" />
        </div>
      </div>

      <div className="photo-gallery">
      <h1 >Planetarium</h1>

        <div className="picture-grid">
          <img src={img13} alt="Photo 1" className="gallery-photo" />
          <img src={img14} alt="Photo 2" className="gallery-photo" />
          <img src={img15} alt="Photo 3" className="gallery-photo" />
        </div>
        <div className="picture-grid">
          <img src={img16} alt="Photo 1" className="gallery-photo" />
          <img src={img17} alt="Photo 2" className="gallery-photo" />
          <img src={img18} alt="Photo 3" className="gallery-photo" />
        </div>
      </div>

      <div className="photo-gallery">
      <h1 >Spark of Curiosity</h1>

        <div className="picture-grid">
          <img src={img19} alt="Photo 1" className="gallery-photo" />
          <img src={img20} alt="Photo 2" className="gallery-photo" />
          <img src={img21} alt="Photo 3" className="gallery-photo" />
        </div>
        <div className="picture-grid">
          <img src={img22} alt="Photo 1" className="gallery-photo" />
          <img src={img23} alt="Photo 2" className="gallery-photo" />
          <img src={img24} alt="Photo 3" className="gallery-photo" />
        </div>
      </div>

      <div className="photo-gallery">
      <h1 >Newspaper</h1>

        <div className="picture-grid">
          <img src={img25} alt="Photo 1" className="gallery-photo" />
          <img src={img26} alt="Photo 2" className="gallery-photo" />
          <img src={img27} alt="Photo 3" className="gallery-photo" />
        </div>
        <div className="picture-grid">
          <img src={img28} alt="Photo 1" className="gallery-photo" />
          <img src={img29} alt="Photo 2" className="gallery-photo" />
          <img src={img30} alt="Photo 3" className="gallery-photo" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
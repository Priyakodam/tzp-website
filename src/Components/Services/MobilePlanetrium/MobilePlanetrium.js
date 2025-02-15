import React from 'react'
import benefits1 from './images/benefits1.jpeg'
import benefits2 from './images/Benefits2.jpeg'
import planetarium1 from './images/planetarium1.png'
import planetarium2 from './images/planetarium2.png'
import planetarium3 from './images/planetarium3.webp' // Corrected import

const MobilePlanetrium = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <p className="main-heading">Why Mobile Planetarium?</p>
          <ul className="paragraph-element">
            <li className="mt-3">The children based near to a Planetarium can visit there and get the planetarium experience.</li>
            <li className="mt-4">But for the children in interior areas, they always miss this experience. So with Mobile planetarium, it is possible to reach these children and give them the same experience and education that is available in bigger planetariums.</li>
          </ul>
        </div>

        <div className="col-12 text-center">
          <h2 className="main-heading">Benefits</h2>
          <p className="paragraph-element">
            Digital Mobile Planetarium is our most appreciated project that gives immersive learning experience. It is an inflatable dome with a 360° projection system. There are well-established planetariums in metro cities. But, students from remote areas cannot afford to visit them. Our Digital Mobile Planetarium takes that experience to the doorsteps of remote-area students. Along with Astronomy, we have other science-related content in English and regional languages. We had arranged Planetarium shows during each phase of science kit distribution.
          </p>
        </div>

        {/* 2 images side by side */}
        <div className="col-12 text-center">
          <div className="row">
            <div className="col-md-6 mb-4">
              <img src={benefits1} alt="Planetarium 1" className="img-fluid" />
            </div>
            <div className="col-md-6 mb-4">
              <img src={benefits2} alt="Planetarium 2" className="img-fluid" />
            </div>
          </div>
          <p className="paragraph-element">Immersive Learning Techniques are proven to be the best pedagogy of teaching as prescribed by the international Educational Scientists. Dome based learning is one such effective method of learning which is mobile and easy to set up in all places with very less effort and time. As the Cap Ex involved in setting up such infrastructure which involves domes/projectors/High quality content/Audio video equipment/software is quite high, Not every school can afford to own or build the on their own.</p>
        
          <p className="paragraph-element"> Planetarium is the most advanced immersive classroom, a place where people can come to learn just about anything and feel as though they are there.</p>
          <p className="paragraph-element">The phrase “The Sky is the Limit” just got a whole new meaning when it comes to the immersive classroom.</p>
        </div>

        {/* 3 images side by side */}
        <div className="col-12 text-center">
          <div className="row">
            <div className="col-md-4 mb-4">
              <img src={planetarium3} alt="Planetarium 3" className="img-fluid" />
            </div>
            <div className="col-md-4 mb-4">
              <img src={planetarium1} alt="Planetarium 1" className="img-fluid" />
            </div>
            <div className="col-md-4 mb-4">
              <img src={planetarium2} alt="Planetarium 2" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="col-12 ">
     
          <h2 className="main-heading">Our Products Include</h2>
            <ul className="paragraph-element">
              <li className="mt-3"><strong>Guest :</strong> The science kits were inaugurated by Hon. Chief Guest Sri Kiran Kumar, former chairman of ISRO.</li>
              <li className="mt-4"><strong>Event Highlights:</strong> Around 300 students attended. Guests interacted with students, and science kits were distributed.</li>
              <li className="mt-4"><strong>Replication :</strong> The same process was followed in future Science Kit distributions.</li>
              
            </ul>
          </div>
      </div>
    </div>
  )
}

export default MobilePlanetrium

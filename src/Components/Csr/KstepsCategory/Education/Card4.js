import React from 'react';
import image2 from '../../Images/catedu2.png'

const Card4 = () => {
  return (
    <div className="kstep-container mt-4">
      <h2 className="text-primary text-center mb-4 kstep-main-heading">
        Celebration of National Space Day: India's Journey to the Moon
      </h2>

      <div className="kstep-row d-flex align-items-center">
        <div className="kstep-col-md-6">
          <h4 className='kstep-Sub-Heading'>Celebration of National Space Day: India’s Journey to the Moon</h4>

          <h5 className='kstep-Sub-Heading mt-4'>National Space Day Significance</h5>
          <p className='kstep-paragraph-element'>
            National Space Day is celebrated on August 23 to mark and rejoice in the success and progress made in space travel.
            It is used as a venue to inform people about the relevance of space missions and to inspire new generations of
            scientists and explorers. We highlight the year’s outstanding contributions from India to lunar exploration via
            its Chandrayaan missions.
          </p>
        </div>
        <div className="kstep-col-md-6 d-flex justify-content-center">
          <img src={image2} alt="Card 2" className="kstep-img " />
        </div>
      </div>


      <section className="mt-4">
        <h5 className='kstep-Sub-Heading'>Chandrayaan 1</h5>
        <p className='kstep-paragraph-element'>
          Chandrayaan 1 was India’s first lunar mission, launched on October 22, 2008. Carried out by the Indian Space Research Organisation, this mission’s idea was basically to chart the moon’s surface and study its mineral composition. Success eluded none other than this mission, as it later detected water molecules on the surface of the moon, which was an absolute breakthrough in space exploration, with very wide repercussions for future lunar missions.
        </p>
      </section>

      <section className="mt-4">
        <h5 className='kstep-Sub-Heading'>Chandrayaan 2</h5>
        <p className='kstep-paragraph-element'>
          Building on the success of Chandrayaan 1, ISRO launched Chandrayaan 2 on July 22, 2019. This mission was more ambitious, featuring an orbiter, a lander (Vikram), and a rover (Pragyan). While the lander experienced a hard landing, the Orbiter continues to send valuable data about the Moon’s surface and exosphere. Chandrayaan 2 highlighted India's growing capabilities in space technology and its commitment to lunar exploration.
        </p>
        <p className='kstep-paragraph-element'>
          The “15 minutes of terror” during Chandrayaan 2’s mission referred to the critical and tense final descent of the Vikram lander—a period filled with uncertainty and high stakes as the spacecraft attempted to land on the Moon’s surface.
        </p>
      </section>


      <section className="mt-4">
        <h5 className='kstep-Sub-Heading'>Chandrayaan 3</h5>
        <p className='kstep-paragraph-element'>
          Chandrayaan-3 was a follow-on mission to Chandrayaan-2 to demonstrate end-to-end capability in safe landing and roving on the lunar surface. It consisted of Lander and Rover configuration. It was launched by LVM3 from SDSC SHAR, Sriharikota. The propulsion module carried the lander and rover configuration till 100 km lunar orbit. The propulsion module had a SHAPE payload with spectro-polarimetry to study spectral and polarimetric measurements of Earth from the lunar orbit for the habitable planet Earth. The Pragyan rover on India’s Chandrayaan-3 mission confirmed the presence of sulfur on the moon’s surface near the south pole.
        </p>
      </section>

      <section className="mt-4">
        <h5 className='kstep-Sub-Heading'>Tare Zameen Par: Spreading Knowledge and Inspiration</h5>
        <p className='kstep-paragraph-element'>
          Tare Zameen Par is an initiative that has been at the forefront of disseminating knowledge through several educational interventions. The mission resonates perfectly with the spirit of National Space Day.
        </p>
        <p className='kstep-paragraph-element'>
          Tare Zameen Par has a young astronomer program which includes satellite-making workshops, mobile planetarium shows, and seminars with renowned scientists from institutions like NASA. The Astro Club engages students every week with activities focused on astronomy.
        </p>
      </section>


      <section className="mt-4">
        <h5 className='kstep-Sub-Heading'>Conclusion</h5>
        <p className='kstep-paragraph-element'>
          As we celebrate August 23 as National Space Day, let us indeed take time out to recognize the magnificent progress India has made in lunar exploration with the Chandrayaan missions. Organizations like Tare Zameen Par are critical in educating and inspiring the next generation so that this spirit of exploration and discovery not only continues but also thrives. Together, we can look forward to a future where space will serve not as a frontier but as a venue rife with promise for all.
        </p>
      </section>
    </div>
  );
};

export default Card4;

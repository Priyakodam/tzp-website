import React from 'react';
import image4 from '../../Images/catedu4.jpg'

const Card6 = () => {
  return (
    <div className="kstep-container mt-4">
      <h2 className="text-primary text-center mb-4 kstep-main-heading">
        SDG4: Thoughts by the Co-Founder
      </h2>

      <div className="kstep-row justify-content-center">
                <div className="kstep-col-md-6 d-flex justify-content-center align-items-center">
                    <img src={image4} alt="Card 4" className="img-fluid" />
                </div>
            </div>

      <section className="mt-4">
        <p className='kstep-paragraph-element'>
        Development in rural education is crucial, as highlighted by personal experiences of individuals from villages. Growing up in a small village, the lack of access to latest knowledge updates compared to urban areas was a common challenge. Visits to cities like Thane, Pune, and Dombivli exposed them to modern amenities such as television channels showcasing new cartoons, music, and movies, which were not available in their village. This disparity in exposure created a feeling of inadequacy and demotivation, hindering their confidence and communication skills in social settings.
        </p>
      </section>

      <section className="mt-4">
        <p className='kstep-paragraph-element'>
        Transitioning from a Marathi medium education to an English medium college in Mumbai University further highlighted the gap in knowledge and language proficiency. The inability to relate real-life examples to technical subjects due to language barriers and lack of exposure to English medium education eroded confidence levels and hindered academic performance. Bridging this gap in education is essential not only to boost rural students’ confidence but also to unlock new opportunities for their careers, ultimately contributing to the country’s development.
        </p>
      </section>

      <section className="mt-4">
        <p className='kstep-paragraph-element'>
        Science outreach programs play a vital role in exposing students from remote areas to innovative tools and advancements in science and technology. By broadening their horizons and instilling the belief that they too can contribute to the nation’s progress, these programs empower rural students to dream beyond their current circumstances. Such initiatives are crucial in nurturing young minds and fostering a sense of inclusion and empowerment among rural youth.
        </p>
      </section>

      <section className="mt-4">
        <p className='kstep-paragraph-element'>
        In conclusion, addressing the educational disparities between rural and urban areas through science outreach programs is essential for uplifting the rural youth and equipping them with the skills and confidence needed to succeed in a rapidly evolving world. By investing in the education and development of rural students, we can unlock their full potential and drive holistic progress in the country.
        </p>
      </section>
    </div>
  );
};

export default Card6;

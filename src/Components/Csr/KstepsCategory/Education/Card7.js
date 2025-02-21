import React from 'react';
import image5 from '../../Images/catedu5.png'

const Card7 = () => {
  return (
    <div className="kstep-container mt-4">
      <h2 className="text-primary text-center mb-4 kstep-main-heading">
        The Need for Science Outreach Programs Under SDG4
      </h2>

      <div className="kstep-row d-flex align-items-center">
        <div className="kstep-col-md-6">
          <p className='kstep-paragraph-element'>
            Science outreach programs have become instrumental in the realization of targets and goals set by SDG4,
            which aims at ensuring inclusive and equitable quality education and promotion of lifelong learning
            opportunities for all. They therefore create a very important missing link that promotes scientific
            knowledge and understanding to a wider audience, making it approachable and relevant to ordinary life
            in an appropriate manner.
          </p>
        </div>
        <div className="kstep-col-md-6 d-flex justify-content-center">
          <img src={image5} alt="Card 5" className="kstep-img " />
        </div>
      </div>


      <section className="mt-4">
        <p className='kstep-paragraph-element'>
          Science illiteracy is not merely a lack of knowledge but the absence of critical thinking, problem-solving, and informed decision-making. Through outreach Regular scientific activities in the form of projects, experiments, and demonstrations(done in a group by enthusiastic professors). This makes science less scary and daunting, removing a lot of the stigma and misunderstanding that often surrounds it.
        </p>
      </section>

      <section className="mt-4">
        <p className='kstep-paragraph-element'>
          Science outreach may be valuable because we are inspiring and engaging the minds of the young. These programs not only get children and teenagers excited, but they get them passionate about science, with wonderful and interactive learning experiences. This early experience is important in order to inspire the next generation to study in the STEM (Science, Technologies, Engineering and Mathematics) domains that are needed for the future work and innovation.
        </p>
      </section>

      <section className="mt-4">
        <p className='kstep-paragraph-element'>
          Science outreach efforts play a crucial role in bridging the gap toward social equity as they specifically aim to include individuals who find it challenging to connect with the scientific world. Such initiatives ensure that every student regardless of their financial background receives an opportunity to secure a comprehensive science education. Inclusivity is a key element of SDG4 which aims at reducing education inequalities and ensuring equal opportunities for everyone.
        </p>
      </section>

      <section className="mt-4">
        <p className='kstep-paragraph-element'>
          Science outreach programmes are as much about positive contributions to the wider community as they are about individual development. They create a climate of scientific inquiry and evidence-based reflection, which is fundamental to finding solutions to global problems such as climate change, health emergencies, and developments in technology. These programs also work to create a more knowledgeable and active public when it comes to science.
        </p>
      </section>

      <section className="mt-4">
        <p className='kstep-paragraph-element'>
          In conclusion, the science outreach programs are what will make the achievement of SDG4 objectives a reality. These do not only bring along greater scientific literacy and inspiration for the future, but also arc toward social equity and local empowerment. Such ambitions guarantee that the future investments must support programs and attract funding for the creation of an educated, equitable world that is scientifically engaged toward sustainable development.
        </p>
      </section>
    </div>
  );
};

export default Card7;

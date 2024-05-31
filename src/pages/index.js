import React, { useRef, useEffect } from 'react';
import HomepageLayout from '../layouts/homepage';
import '../sass/styles.scss';
import acupunture from '../files/images/acupuncture.png';
import massage from '../files/images/massage.png';
import soundHealing from '../files/images/soundhealing.png';
import arrow from '../files/icons/arrow-right.svg';
import BookNow from '../components/cta/booknow';


const HomePage = () => {

 
  return (
    <HomepageLayout>
       <BookNow />
      <section className='homepage-services'>
        <div className='container'>
          <div className='row'>
          <h2>Services Offered</h2>
          <div className='individual-services'>
            <div className='service '>
              <img src={acupunture} />
              <p>Acupuncture</p>
            </div>
            <div className='service '>
              <img src={massage} />
              <p>Massage</p>
            </div>
            {/* <div className='service '>
              <img src={soundHealing} />
              <p>Sound Healing</p>
            </div> */}
          </div>
          <div className='learnmore-btn'>
            <a href='/services'>Learn more<img src={arrow} /></a>
          </div></div>
        </div>
      </section>
    
    </HomepageLayout>
  );
};

export default HomePage;
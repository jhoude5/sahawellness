import React, { useRef, useEffect, useState } from 'react';
import HomepageLayout from '../layouts/homepage';
import '../sass/styles.scss';
import acupunture from '../files/images/acupuncture.png';
import massage from '../files/images/massage.png';
import cupping from '../files/images/cupping.jpg';
import arrow from '../files/icons/arrow-right.svg';
import BookNow from '../components/cta/booknow';
import SEO from '../components/seo';



const HomePage = () => {

 
  return (
    <HomepageLayout>
       <BookNow />

      <section className='homepage-services'>
        <div className='container'>
          <div className='row'>
          <h2>Services Offered</h2>
          <div className='individual-services'>
            <div className='service'><a href='/acupuncture-kelowna'>
              <img src={acupunture} />
              <p>Acupuncture</p></a>
            </div>
            {/* <div className='service'><a href='/massage-kelowna'>
              <img src={massage} />
              <p>Massage</p></a>
            </div> */}
            <div className='service'><a href='/cupping-kelowna'>
              <img src={cupping} />
              <p>Cupping</p></a>
            </div>
          </div>
          {/* <div className='learnmore-btn'>
            <a href='/about-us/services'>Learn more<img src={arrow} /></a>
          </div> */}
          </div>
        </div>
      </section>
    
    </HomepageLayout>
  );
};

export default HomePage;
export const Head = () => (
  <SEO
    title='Homepage'
    description='Acupuncture in Kelowna for Pain Relief & Wellness'
  />
);
import React, { useRef } from 'react';
import office1 from '../../files/images/tour/office1.jpg';
import office2 from '../../files/images/tour/office2.jpeg';
// import office3 from '../../files/images/tour/office3.jpg';
import arrow from '../../files/icons/arrow-right-white.svg';

const TourNow = () =>  {

  return (
    <section className='tour-cta'>
      <div className='container'>
        <div className='row'>
            <h2>Take a Tour</h2>
            <div className='tour-imgs col-md-4'>
              <img src={office1}></img>
            </div>
            <div className='tour-imgs col-md-4'>
              <img src={office2}></img>
            </div>
            {/* <div className='tour-imgs col-md-4'>
              <img src={office3}></img>
            </div> */}
            <div className='tour-link'>
              <a href='/tour'>See more <img src={arrow} /></a>
            </div>
            
        </div>
      </div>
   </section>
  )
}

export default TourNow;


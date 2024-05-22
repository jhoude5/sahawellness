import React, { useRef } from 'react';
import office1 from '../files/images/tour/office1.jpg';
import office2 from '../files/images/tour/office2.jpg';

const TourNow = () =>  {

  return (
   <div className='container'>
    <div className='row'>
        <h2>Take a Tour</h2>
        <img src={office1}></img>
        <img src={office2}></img>
    </div>
   </div>
  )
}

export default TourNow;


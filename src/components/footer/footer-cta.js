import React, { useRef } from 'react';

const FooterCTA = ({className}) =>  {

  return (
    <div className='footer-cta'>
        <div className='container'>
            <div className='row'>
                <div className='row-item col-md-4'>
                <h2 className='footer-cta-heading'>Location</h2>
                <p>Temporary Location</p>
                <p>515 Bay Ave. Kelowna, BC V1Y 7J8</p>
            </div>
            <div className='row-item col-md-4'>
                <h2 className='footer-cta-heading'>Contact</h2>
                <p>jaddabboudacu@gmail.com <br/> 604-446-7154</p>
            </div></div>
        </div>
   </div>
  )
}

export default FooterCTA;


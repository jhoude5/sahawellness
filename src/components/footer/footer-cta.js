import React, { useRef } from 'react';

const FooterCTA = ({className}) =>  {

  return (
    <div className='footer-cta'>
        <div className='container'>
            <div className='row'>
                <div className='row-item col-md-4'>
                <h2 className='footer-cta-heading'>Location</h2>
                <p className="location-heading">Westboro Location</p>
                <p>310 Beechgrove Ave, Suite A, Ottawa</p>
                <p className="location-heading">Downtown Location</p>
                <p>190 Somerset Street West #208</p>
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


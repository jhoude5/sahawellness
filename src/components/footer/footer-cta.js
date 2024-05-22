import React, { useRef } from 'react';

const FooterCTA = () =>  {

  return (
    <div className='footer-cta'>
        <div className='container'>
            <div className='row'>
                <div className='row-item'>
                <h2 className='footer-cta-heading'>Location</h2>
                <p>123 Kelowna Blvd. <br/> Kelowna BC, V1V 1V1</p>
            </div>
            <div className='row-item'>
                <h2 className='footer-cta-heading'>Hours</h2>
                <p>Monday-Friday <br/>9:00am - 4:00pm</p>
            </div>
            <div className='row-item'>
                <h2 className='footer-cta-heading'>Contact</h2>
                <p>info@elementalkelowna.ca <br/> 555-555-5555</p>
            </div></div>
        </div>
   </div>
  )
}

export default FooterCTA;


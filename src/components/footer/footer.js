import React, { useRef } from 'react';
import instagram from '../../files/icons/instagram.svg';
import facebook from '../../files/icons/facebook.svg';
import logo from '../../files/logo.png';

const Footer = () =>  {

  return (
   <footer >
    <div className='container'>
        <div className='row'>
        <nav className='col-md-9'><ul className='footer-menu'>
            <li><a href='/about-us'>About</a>
            <ul className='sub-footer-menu'>
                {/* <li><a href='/team'>Meet the team</a></li> */}
                <li><a href='/acupuncture-kelowna'>Acupuncture</a></li>
                <li><a href='/cupping-kelowna'>Cupping</a></li>
            </ul></li>
            <li><a href='/store'>Store</a></li>
            <li><a href='/contact-us'>Contact Us</a></li>
            <li><a href='/tour'>Tour</a></li>
            </ul></nav>
        <div className='footer-logo col-md-3'>
            <img src={logo} alt='saha wellness logo' />
        </div>
        
        <div className=''>
    <a className='btn btn-primary' href='https://continuumfitness.janeapp.com/#/staff_member/14'>Book Continuum Fitness</a>
            <a className='btn btn-primary' href='https://jaddabboudacupuncture.janeapp.com/#staff_member/1'>Book Verve Movement</a>
        </div>
        <div className='col-md-9'>
            <p className='copyright'>©All rights reserved - Jadd Abboud</p>
        </div>
        <div className='social-icons col-md-3'>
            <div className='social-icons-wrapper'>
                <a href='https://www.instagram.com/jaddabboud_acupuncture/?hl=en' className='social-icon'><img src={instagram}/></a> 
                <a href='https://www.facebook.com/p/Jadd-Abboud-Acupuncture-100047763417237/?paipv=0&eav=Afa1iVW3O4i-j43ZmjeZNZSwicDOX4rJ8WcJJ578LuxLMZN1QGaIvDrM6yBN9-xuNVU&_rdr' className='social-icon'><img src={facebook}/></a>
            </div>
        </div></div>
    </div>
    
   </footer>
  )
}

export default Footer;


import React, { useRef } from 'react';
import instagram from '../../files/icons/instagram.svg';
import facebook from '../../files/icons/facebook.svg';

const Footer = () =>  {

  return (
   <footer >
    <div className='container'>
        <div className='row'>
        <nav className='col-md-9'><ul className='footer-menu'>
            <li><a href='/about'>About</a>
            <ul className='sub-footer-menu'>
                {/* <li><a href='/team'>Meet the team</a></li> */}
                <li><a href='/services'>Services</a></li>
            </ul></li>
            <li><a href='/store'>Store</a></li>
            <li><a href='/contact-us'>Contact Us</a></li>
            <li><a href='/tour'>Tour</a></li>
            </ul></nav>
        <div className='footer-logo col-md-3'>
            <a href='/'>Elemental Health</a>
        </div>
        
        <div className=''>
            <a className='btn btn-primary'>Book an appoinment</a>
        </div>
        <div className='col-md-9'>
            <p className='copyright'>©All rights reserved - Jadd Abboud</p>
        </div>
        <div className='social-icons col-md-3'>
            <div className='social-icons-wrapper'>
                <a href='/' className='social-icon'><img src={instagram}/></a> 
                <a href='/' className='social-icon'><img src={facebook}/></a>
            </div>
        </div></div>
    </div>
    
   </footer>
  )
}

export default Footer;


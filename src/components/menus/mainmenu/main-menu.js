import React from 'react'
import { Link } from 'gatsby';
import logo from '../../../files/logo.png';

const MainMenu = () => {

  return (
    <nav className='navbar navbar-expand-lg'>
        <Link to='/' className='navbar-brand'><img className='logo-icon' src={logo} /></Link>
        <div className="collapse navbar-collapse nav-menu">
            <ul className='navbar-nav'>
            
                <li className='nav-item'><Link className='nav-link' to='/about-us'>About</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/tour'>Tour</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/store'>Store</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/contact-us'>Contact us</Link></li>
    <a className='book-appt-button btn btn-primary' href='https://continuumfitness.janeapp.com/#/staff_member/14'>Book Westboro</a>
                <a className='book-appt-button btn btn-primary' href='https://jaddabboudacupuncture.janeapp.com/#staff_member/1'>Book Somerset</a>
            </ul>
        </div>
     
    </nav>
  )
}

export default MainMenu;

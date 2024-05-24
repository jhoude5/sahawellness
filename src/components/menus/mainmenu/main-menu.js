import React from 'react'
import { Link } from 'gatsby';

const MainMenu = () => {

  return (
    <nav className='navbar navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>Elemental Health</Link>
        <div className="collapse navbar-collapse nav-menu">
            <ul className='navbar-nav'>
            
                <li className='nav-item'><Link className='nav-link' to='/about-us'>About</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/tour'>Tour</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/store'>Store</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/contact-us'>Contact us</Link></li>
                <a className='book-appt-button btn btn-primary' href='https://accounts.janeapp.com/'>Book an appointment</a>
            </ul>
        </div>
     
    </nav>
  )
}

export default MainMenu;

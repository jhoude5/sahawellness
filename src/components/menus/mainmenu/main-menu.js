import React, { useRef } from 'react'
import { Link } from 'gatsby';
import PropTypes from 'prop-types'

const MainMenu = ({ redHeader }) => {

  return (
    <nav className='navbar navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>Elemental</Link>
        <div className="collapse navbar-collapse nav-menu">
            <ul className='navbar-nav'>
            
                <li className='nav-item'><Link className='nav-link' to='/about-us'>About</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/tour'>Tour</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/store'>Store</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/contact-us'>Contact us</Link></li>
                <Link className='book-appt-button btn btn-primary' to='https://accounts.janeapp.com/'>Book an appointment</Link>
            </ul>
        </div>
     
    </nav>
  )
}

export default MainMenu;

MainMenu.propTypes = {
  redHeader: PropTypes.bool
};
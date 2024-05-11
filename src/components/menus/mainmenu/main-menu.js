import React, { useRef } from 'react'
import { Link } from 'gatsby';
import PropTypes from 'prop-types'

const MainMenu = ({ redHeader }) => {

  return (
    <nav className='header-nav'>
      <ul className="menu--list">
        
        <li
          className='menu--list__item'>
          <span
            className="heading"
            tabIndex={0}
          >
            About
          </span>
          <ul>
            <li><Link to="/about/bios">Bios</Link></li>
            <li><Link to="/about/services">Services</Link></li>
          </ul>
        </li>
        <li className='menu--list__item'><Link to='/tour'>Tour</Link></li>
        <li className='menu--list__item'><Link to='/store'>Store</Link></li>
        <li className='menu--list__item'><Link to='/store'>Contact us</Link></li>
        <Link className='btn btn-primary' to='https://accounts.janeapp.com/'>Book an appointment</Link>
      </ul>
    </nav>
  )
}

export default MainMenu;

MainMenu.propTypes = {
  redHeader: PropTypes.bool
};
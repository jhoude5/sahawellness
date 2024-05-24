import React, { useRef } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'gatsby';

const MobileMenu = (props) => {

  const headingsRef = useRef([]);
  const onCollapseClick = (index) => {
    const current = headingsRef.current[index].className;
    headingsRef.current[index].className = current.includes('expanded')
      ? 'mmenu--list__item'
      : 'mmenu--list__item expanded';

    if (current.includes('expanded')) {
      headingsRef.current[index].setAttribute('aria-expanded', 'false')
    } else {
      headingsRef.current[index].setAttribute('aria-expanded', 'true')
    }
  };

  return (
    <Menu {...props}>
      <ul className="mmenu--list">
      
        <li className='mmenu--list__item'>
          <Link to='/about'>About</Link>
        </li>
        
        <li className='mmenu--list__item'>
          <Link href='/store'>Store</Link>
        </li>

        <li className='mmenu--list__item'>
          <Link to="/contact-us">Contact Us</Link>
        </li>

        <li className='mmenu--list__item'>
          <Link to="/tour">Tour</Link>
        </li>

        <li className='mmenu--list__item'>
          <Link className="btn btn-primary" to="/jane-app">Book an appointment</Link>
        </li>
      </ul>
    </Menu>
  );
};

export default MobileMenu;
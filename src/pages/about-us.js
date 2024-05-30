
import React, { useRef, useEffect } from 'react';
import Layout from '../layouts/general';
import { Link } from 'gatsby';
import TourNow from '../components/cta/tournow';
const AboutUs = () => {
 

  return (
    <Layout>
      <section>
            <div className='container'>
                <div className='row'>
                  <div className='col-md-2 col-lg-3 '>
                  <nav className='sidebar-menu'>
                  <ul>
                          <li className='active'><Link to='/about-us'>About Us</Link>
                              <ul>
                                  <li><Link to='team'>Meet the team</Link></li>
                                  <li><Link to='/services'>Services</Link></li>
                              </ul>
                          </li>
                      </ul>
                  </nav>
                </div>
                <div className='col-md-10 col-lg-9 about-us-wrapper'>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          
                </div>
              </div>
            </div>
        </section>
        <TourNow />
      </Layout>
  );
};

export default AboutUs;

import React, { useRef, useEffect } from 'react';
import Layout from '../../layouts/general';
import acupunture from '../../files/images/acupuncture-service.jpg';
import massage from '../../files/images/massage-service.webp';
import soundhealing from '../../files/images/sound-healing-service.webp';
import Tour from '../../components/cta/tournow';
import { Link } from 'gatsby';

const Services = () => {
  return (
    <Layout>
      <section className='services-section'>
            <div className='container'>
                <div className='row'>
                  <div className='col-md-2 col-lg-3'>
                  <nav className='sidebar-menu'>
                      <ul>
                          <li><Link to='/about-us'>About Us</Link>
                              <ul>
                                  <li><Link to='/about-us/team'>Meet the team</Link></li>
                                  <li className='active'><Link to='/about-us/services'>Services</Link></li>
                              </ul>
                          </li>
                      </ul>
                  </nav>
                </div>
                <div className='col-md-10 col-lg-9'>
                    <h1>Services</h1>
                    <div>
                      <h2>Acupunture</h2>
                      <img src={acupunture}/>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                    <div>
                      <h2>Massage</h2>
                      <img src={massage}/>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                    <div>
                      <h2>Sound Healing</h2>
                      <img src={soundhealing}/>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                </div>
              </div>
            </div>
        </section>
          <Tour />
    </Layout>
  );
};

export default Services;
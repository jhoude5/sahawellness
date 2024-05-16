// import '../sass/styles.scss';
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/header.js';
import homeIntroGraphic from '../files/images/background-hp.jpeg';

const HomepageLayout = ({ children }) => {
  const fadersRef = useRef([]);
  useEffect(() => {
    const faders = fadersRef.current;
    const appearOnScroll = new IntersectionObserver(
      function (entries, appearOnScroll) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        });
      },
      { threshold: 0.25 }
    );
    faders.forEach((fader) => appearOnScroll.observe(fader));
  }, []);
  const [hideSidebar, setHideSidebar] = useState(true);

  let closeSidebar = () => setHideSidebar(true);
  return (
    <div style={{ position: 'relative' }}>
      <div>
        
       <Header />
        <main id='main-content' tabIndex='-1'>
        <section className='home--hero-section'>
        <div className='inner'>
          <img
            src={homeIntroGraphic}
            alt='woods'
            ref={(e) => (fadersRef.current[0] = e)}
            className='fade-in'></img>
          <div className='info-text'>
            <h1>
              Elemental <span class="secondary-h1">Kelowna</span>
            </h1>
          </div>
        </div>
      </section>
          <div>{children}</div>
        </main>
        
      </div>
      
    </div>
  );
};

export default HomepageLayout;
// import '../sass/styles.scss';
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/header.js';
import homeIntroGraphic from '../files/images/background-hp.jpeg';
import mobileHomeIntroGraphic from '../files/images/mobile-background-hp.png';
import Footer from '../components/footer/footer.js';
import FooterCTA from '../components/footer/footer-cta.js';
import { ElfsightWidget } from 'react-elfsight-widget';

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
        <div className='inner '>
          <img className='desktop-background-img'
            src={homeIntroGraphic}
            alt='woods'
            ></img>
            <img className='mobile-background-img'
            src={mobileHomeIntroGraphic}
            alt='woods'
            ></img>
          <div className='info-text'>
            <h1>
              Elemental <br/>
              <span class="secondary-h1">Health</span>
            </h1>
            
          </div>
        </div>
      </section>
      <div>{children}</div>
      <section className='google-reviews'>
        <div className='container'>
          <div className='row'>
            <h2>Google Reviews</h2>
            <ElfsightWidget widgetId=''/>
          </div>
        </div>
      </section>
      <FooterCTA />
      </main>
      <Footer />
    </div>
      
    </div>
  );
};

export default HomepageLayout;
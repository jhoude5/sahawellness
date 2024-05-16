// import '../sass/styles.scss';
import React, { useRef, useEffect, useState } from 'react';
import Header from '../components/header.js';

const Layout = ({ children }) => {
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
          <div>{children}</div>
        </main>
        
      </div>
      
    </div>
  );
};

export default Layout;
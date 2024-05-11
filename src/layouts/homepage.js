// import '../sass/styles.scss';
import React, { useState, useEffect } from 'react';
import Header from '../components/header.js';

const HomepageLayout = ({ children }) => {
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

export default HomepageLayout;
import React, { useRef, useEffect } from 'react';
import HomepageLayout from '../layouts/homepage';
import '../sass/styles.scss';
import acupunture from '../files/images/acupuncture.png';
import massage from '../files/images/massage.png';
import soundHealing from '../files/images/soundhealing.png';
import arrow from '../files/icons/arrow-right.svg';
import BookNow from '../components/cta/booknow';


const HomePage = () => {
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

  // const data = useStaticQuery(graphql`
  //   {
  //     allContentfulBios {
  //       nodes {
  //         name
  //         image {
  //           url
  //         }
  //         description {
  //           raw
  //         }
  //       }
  //     }
  //   }
  // `);
  // const cases = data.allContentfulBios.nodes;

  return (
    <HomepageLayout>
      {/* <SEO title='Home' /> */}
      
      <section className='homepage-cta'>
        <BookNow />
      </section>
      <section className='homepage-services'>
        <div className='container'>
          <div className='row'>
          <h2>Services Offered</h2>
          <div className='individual-services'>
            <div className='service col-lg-4'>
              <img src={acupunture} />
              <p>Acupuncture</p>
            </div>
            <div className='service col-lg-4'>
              <img src={massage} />
              <p>Massage</p>
            </div>
            <div className='service col-lg-4'>
              <img src={soundHealing} />
              <p>Sound Healing</p>
            </div>
          </div>
          <div className='learnmore-btn'>
            <a href='/services'>Learn more<img src={arrow} /></a>
          </div></div>
        </div>
      </section>
    
    </HomepageLayout>
  );
};

export default HomePage;
import React, { useRef, useEffect } from 'react';
import HomepageLayout from '../layouts/homepage';
import homeIntroGraphic from '../files/images/background-hp.jpeg';
import '../sass/styles.scss';

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
            {/* <LinkButton
              src='/case-studies'
              size='large'
              type='primary'
              text='See our work'
            /> */}
          </div>
        </div>
      </section>
      

       
      {/* <PrimaryPageCTA
        title='Let’s build a public success story.'
        subtitle='Get in touch to start.'
        primaryButtonText='Put us to work'
        secondaryButtonText='Join our team'
        secondaryButtonLink='/careers'
      /> */}
    </HomepageLayout>
  );
};

export default HomePage;
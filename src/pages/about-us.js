
import React, { useRef, useEffect } from 'react';
import Layout from '../layouts/general';
import BookNow from '../components/cta/booknow';
import JaddPhoto from '../files/images/jadd.jpg';
import SEO from "../components/seo";

const AboutUs = () => {
 

  return (
    <Layout>
      <section>
            <div className='container'>
                  {/* <div className='col-lg-3 '>
                  <nav className='sidebar-menu'>
                  <ul>
                          <li className='active'><Link to='/about-us'>About Us</Link>
                              <ul>  */}
                                  {/* <li><Link to='team'>Meet the team</Link></li> */}
                                  {/* <li><a href='/acupuncture-kelowna'>Acupuncture</a></li>
                                  <li><a href='/massage-kelowna'>Massage</a></li>
                                  <li><a href='/cupping-kelowna'>Cupping</a></li>
                              </ul>
                          </li>
                      </ul>
                  </nav>
                </div>  */}
                <div className='about-us-wrapper'>
                  <h1>About Me</h1>
                    <div className='about-us-container'>
                      
                      <img className='owner-img' src={JaddPhoto} alt='Jadd Abboud'/>
                      <p>A few years ago, Jadd suffered from insomnia. He averaged 2-3 hours of sleep a night. Although Jadd believes that Allopathic medicine has its place, he isn’t a fan of pharmaceuticals for insomnia.
                      After trying a number of alternative treatments, Jadd found acupuncture and after the first session, slept 5 hours. After 3 sessions, Jadd was sleeping 7 hours consistently. Jadd immediately began to study alternative medicines, quickly becoming a Natural Health Practitioner at the Alternative Medicine College of Canada.
                      He continued down this path and received a Doctorate in Oriental Medicine over the next 5 years. This path brought Jadd to Vancouver where he received his license to practice Acupuncture. This, in combination with his degree in Psychology, is the culmination of over a decade of study.
                      Practicing since 2018, Jadd has helped people with sleeping and digestive issues, migraines/headaches, menstrual difficulties, anxiety, depression, and all sorts of body pain.
                      Throughout this journey, Jadd trained in Cranial Sacral Therapy — a non-invasive, soothing therapy — that he typically incorporates in his treatments to bring balance to the Nervous System.
                      </p>
                    </div>
                </div>
              
            </div>
        </section>
        <BookNow />
      </Layout>
  );
};

export default AboutUs;
export const Head = () => (
  <SEO
    title='About Us'
    description='Learn about Saha Wellness'
  />
);
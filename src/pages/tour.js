
import React, { useRef, useEffect } from 'react';
import Layout from '../layouts/general';
import '../sass/styles.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import office1 from '../files/images/tour/office1.jpg';
import office2 from '../files/images/tour/office2.jpg';
import office3 from '../files/images/tour/office3.jpg';
// import office4 from '../files/images/tour/office4.jpg';
import office5 from '../files/images/tour/office5.jpg';
import BookNow from '../components/cta/booknow';

const Tour = () => {
    var settings = {
        arrows: true,
        dots: false,
        // infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '20px',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // infinite: true,
                centerPadding: '10px'
              }
            },
            {
              breakpoint: 380,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // infinite: true
              }
            }
          ]
      };

  return (
    <Layout>
        <section className='tour-section'>
            <div className='container'>
                <div className='row'>

                    <h1>Take a tour of our space</h1>
                    <Slider {...settings}>
                        <div className='slider-img'>
                            <img src={office1} />
                        </div>
                        <div className='slider-img'>
                            <img src={office2} />
                        </div>
                        <div className='slider-img'>
                            <img src={office3} />
                        </div>
                        {/* <div>
                            <img src={office4} />
                        </div> */}
                        <div className='slider-img'>
                            <img src={office5} />
                        </div>
                    </Slider>
                </div>
            </div>
            
        </section>
            <BookNow />
        
        
    </Layout>
  );
};

export default Tour;
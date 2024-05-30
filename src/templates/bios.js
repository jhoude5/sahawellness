
import React, { useRef, useEffect } from 'react';
import Layout from '../layouts/general';
import { Link } from 'gatsby';
import Tour from '../components/cta/tournow';
// import BioHook from '../hooks/bios';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Bios = (data) => {
  // const bioHook = BioHook();
  // const bios = data.allContentfulBios.edges[0].node;
  // const options = {
  //   renderMark: {
  //     [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  //   },
  //   renderNode: {
  //     [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  //     [INLINES.HYPERLINK]: (node, children) => {
  //       const { uri } = node.data
  //       return (
  //         <a href={uri} className="underline">
  //           {children}
  //         </a>
  //       )
  //     },
  //   }
  // }

  return (
    <Layout>
      <section>
            <div className='container'>
                <div className='row'>
                  <div className='col-md-2 col-lg-3'>
                  <nav>
                  <ul>
                          <li><Link to='/about-us'>About Us</Link>
                              <ul>
                                  <li className='active'><Link to='team'>Meet the team</Link></li>
                                  <li><Link to='/services'>Services</Link></li>
                              </ul>
                          </li>
                      </ul>
                  </nav>
                </div>
                <div className='col-md-10 col-lg-9'>
                    
                    {/* {bios.map((item, index)  => { */}
                  {/* return ( */}
                    {/* <div>
                    <h1>{bios.name}</h1>
                      <div className="teaser-grid--wrapper" id={bios.id}>
                        <div className="teaser-grid">
                            <div className="teaser-grid__name teaser__link">
                            
                                <div className="teaser-grid__image">
                                  <GatsbyImage image={getImage(bios.image.gatsbyImageData)} aria-label={bios.name} alt={''} />
                                </div>
                                <div className="teaser-grid__title">{bios.name}</div>
                                <div className="teaser-grid__description">{renderRichText(bios.description, options)}</div>
                            
                            
                            </div>
                        </div>
                      </div></div> */}
                  {/* ); */}
                {/* }) */}
              {/* } */}
                </div>
              </div>
            </div>
        </section>
          <Tour />
    </Layout>
  );
};

export default Bios;
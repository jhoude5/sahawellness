
import React from 'react';
import Layout from '../../layouts/general';
import { Link } from 'gatsby';
import Tour from '../../components/cta/tournow';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from "../../components/seo";

const Team = () => {
//   const data = useStaticQuery(graphql`
//   query StoreQuery {
//     allContentfulBios {
//             nodes {
//                 id
//                 description {
//                     raw
//                 }
//                 image {
//                     url
//                     gatsbyImageData
//                 }
//                 name
//                 path
//                 shortDescription {
//                     raw
//                 }
                
//             }
        
        
//     }
//     }
// `);

// const bios = data.allContentfulBios.nodes;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
    }
  }

  return (
    <Layout>
      <section>
            <div className='container'>
                <div className='row'>
                  <div className='col-md-2 col-lg-3'>
                  <nav className='sidebar-menu'>
                    <ul>
                          <li><Link to='/about-us'>About Us</Link>
                              <ul>
                                  <li className='active'><Link to='/about-us/team'>Meet the team</Link></li>
                                  <li><Link to='/about-us/services'>Services</Link></li>
                              </ul>
                          </li>
                      </ul>
                  </nav>
                </div>
                <div className='col-md-10 col-lg-9'>
                    <h1>Meet our Team</h1>
                    {/* {bios.map((item, index)  => {
                  return (
                      <div className="teaser-grid--wrapper col-lg-4" id={item.id}>
                        <div className="teaser-grid">
                            <div className="teaser-grid__name teaser__link">
                            <a href={item.path} title={`Link to ${item.name}'s biography page`}>
                                <div className="teaser-grid__image">
                                  <GatsbyImage image={getImage(item.image.gatsbyImageData)} aria-label={item.itemName} alt={''} />
                                </div>
                                <div className="teaser-grid__title">{item.name}</div>
                                <div className="teaser-grid__description">{renderRichText(item.shortDescription, options)}</div>
                                
                            </a>
                            
                            </div>
                        </div>
                      </div>
                  );
                })
              } */}
                </div>
              </div>
            </div>
        </section>
          <Tour />
    </Layout>
  );
};

export default Team;
export const Head = () => (
  <SEO
    title='Team'
    description='Meet the team at Saha Wellness'
  />
);
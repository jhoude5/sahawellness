
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../layouts/general';
import '../sass/styles.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import StoreHook from '../hooks/store';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import BookNow from '../components/cta/booknow';

const Store = () => {
  // const storeHook = StoreHook();
//   const data = useStaticQuery(graphql
//     `{
//       allContentfulStore {
//         edges {
//           nodes {
//             id
//             itemName
//             url
//             shortDescription {
//                 raw
//             }
//             imageOfItem {
//                 url
//                 gatsbyImageData
//             }
//         }
//         }
        
//       }
//     }
// `);

// const storeItems = data.allContentfulStore.nodes;

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
            <h1>Store</h1>
            <p>Check out my selection of items that work!</p>
            <div>
              {/* {storeHook.map((item, index)  => {
                  return (

                      <div className="teaser-grid--wrapper card col-md-4" id={item.id}>
                        <div className="teaser-grid">
                            <div className="teaser-grid__name teaser__link">
                            <a href={item.url} title={`Link to ${item.itemName}'s amazon page`}>
                                <div className="teaser-grid__image card-image-top">
                                  <GatsbyImage image={getImage(item.imageOfItem.gatsbyImageData)} aria-label={item.itemName} alt={''} />
                                </div>
                                <div className='card-body'>
                                  <div className="teaser-grid__title">{item.itemName}</div>
                                  <div className="teaser-grid__description">{renderRichText(item.shortDescription, options)}</div>
                                </div>
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
        <BookNow />
      
  
    </Layout>
  );
};


export default Store;
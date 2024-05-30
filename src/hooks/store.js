import { graphql, useStaticQuery } from 'gatsby';

const StoreHook = () => {
  const {
    allContentfulStore: { nodes }
    } = useStaticQuery(graphql`
        query StoreQuery {
        allContentfulStore {
                nodes {
                    id
                    itemName
                    url
                    shortDescription {
                        raw
                    }
                    imageOfItem {
                        url
                        gatsbyImageData
                    }
                    
                }
            
            
        }
        }
    `);
  return nodes;
};

export default StoreHook;
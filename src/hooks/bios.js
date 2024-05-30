import { graphql, useStaticQuery } from 'gatsby';

const BioHook = () => {
  const {
    allContentfulBios: { nodes }
    } = useStaticQuery(graphql`
        query StoreQuery {
        allContentfulBios {
                nodes {
                    id
                    description {
                        raw
                    }
                    image {
                        url
                        gatsbyImageData
                    }
                    name
                    path
                    shortDescription {
                        raw
                    }
                    
                }
            
            
        }
        }
    `);
  return nodes;
};

export default BioHook;
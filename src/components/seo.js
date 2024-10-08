import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
  } = site.siteMetadata;

  const seo = {
    title: (`${title || defaultTitle} | Saha Wellness`),
    description: description || defaultDescription,
    url: `${siteUrl}${pathname.slice(1)}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      {seo.url && <meta property='og:url' content={seo.url} />}
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}
      
    
    
    </>
  )
};

export default SEO;
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `elemental-kelowna`,
    siteUrl: `https://www.yourdomain.tld`
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "ZY_DQ1rDIkXl2bt_YhU2IPFHGuynqPab1aHMxvAUoTM",
      "spaceId": "003rc5hamiru"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/files/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `island moments`, `didot`, `dancing script`, `inter`
      ],
      display: 'swap'
    }
  },
  {
    resolve: 'gatsby-plugin-html-attributes',
    options: {
      lang: 'en-CA'
    }
  }]
};
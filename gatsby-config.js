/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Saha Welness`,
    siteUrl: `https://www.yourdomain.tld`,
    email: '',
    phone: '',
    address: '',

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
        `island moments`, `didot`, `dancing script`, `inter`, `abril fatface`, `fondamento`
      ],
      display: 'swap'
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Elemental Health`,
      short_name: `EH`,
      start_url: `/`,
      icon: 'src/favicon.png',
    },
  },
  {
    resolve: 'gatsby-plugin-html-attributes',
    options: {
      lang: 'en-CA'
    }
  }]
};
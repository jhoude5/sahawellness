/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Saha Welness`,
    siteUrl: `https://www.sahawellness.ca`,
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
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-8W1PX20F4B", // Google Analytics / GA
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
        optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Defaults to https://www.googletagmanager.com
        origin: "YOUR_SELF_HOSTED_ORIGIN",
        // Delays processing pageview events on route update (in milliseconds)
        delayOnRouteUpdate: 0,
      },
    },
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
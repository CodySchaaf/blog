module.exports = {
  siteMetadata: {
    title: `Coding With Cody`,
    titleTemplate: '%s · With Cody',
    description: `Hi my name is Cody Schaaf, here is my blog.`,
    url: 'https://blog.codyschaaf.com',
    image: '/me.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@TheCodingCody',
    author: `Cody Schaaf`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Cody Schaaf',
        short_name: 'Cody',
        start_url: '/',
        theme_color: '#1BA085',
        background_color: 'white',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/my-icon.svg', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cody-schaaf-blog`,
        short_name: `cs-blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/my-icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

module.exports = {
  pathPrefix: "/icannotgo",
  siteMetadata: {
    title: `I can't run because`,
    description: `Tool to help you find excuses for running and some solutions.`,
    siteUrl: `https://runningdeveloper.github.io/icannotgo/`,
    image: `/shoe2.png`,
    titleTemplate: `%s`,
    twitterUsername: `@geoff4l`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-MWQZ4K56BH"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    // "gatsby-plugin-manifest",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data/",
      },
      __key: "data",
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Russo One']
        }
      }
    }
  ],
};

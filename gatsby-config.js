module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "personal-website",
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-buttercms',
      options: {
        authToken: '1a7cf2604ecd7b17888fe39d487225bda7d8de40'
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "stephenweixu.com",
      },
    }
  ]
};
  
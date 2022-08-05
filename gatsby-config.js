module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'personal-website',
    siteUrl: 'https://stephenweixu.com',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-buttercms',
      options: {
        authToken: '1a7cf2604ecd7b17888fe39d487225bda7d8de40'
      }
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'stephenweixu.com',
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Wei Xu - Software Developer',
        short_name: 'Wei Xu',
        description: 'Wei Xu, Software developer specializing in full stack web application development',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'standalone',
        icons: [
          {
            src: '/images/favicon-tab.png',
            sizes: '48x48',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-26S18HBTLQ',
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ]
};
  
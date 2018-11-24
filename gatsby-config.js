module.exports = {
  siteMetadata: {
    title: `The Address - Carcassonne, France`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-9907395-8',
        head: true
      }
    }
  ]
}

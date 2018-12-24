module.exports = {
  siteMetadata: {
    title: `Recos`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        // icon: "src/images/icon.png",  This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
    },
    'gatsby-plugin-offline',
  
  
    { 
      resolve: 'gatsby-source-apiserver',
      options: {
        url: `https://api.trello.com/1/lists/598b7836aa7a8937cfd73260/cards?key=51c8d95afc906bf667ab0535ac782362&token=e0cf35475cd79f9a35d32ff1cc8b1cdf6a006875972e6672a3d395b0da8039e8`,
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        name: `trelloResponse`,
      }
    }
  ]
}
    
    

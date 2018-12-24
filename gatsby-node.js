const axios = require('axios');
const fetch = require('isomorphic-fetch')

const listId = '598b7836aa7a8937cfd73260'
const token = 'e0cf35475cd79f9a35d32ff1cc8b1cdf6a006875972e6672a3d395b0da8039e8'
const key = '51c8d95afc906bf667ab0535ac782362'
const cardParameters = 'fields=id,name,desc'
const url = `https://api.trello.com/1/lists/${listId}/cards?${cardParameters}&key=${key}&token=${token}`




exports.createPages = ({ actions: { createPage } }) => {
  
  fetch(url)
  .catch(error => console.log('BAD', error))
  .then(response => {
    return response.json()
  })
  .then(cards => { 
    
    // * Make index page

    createPage({
      path: `/testing`,
      component: require.resolve('./src/templates/testing.js'),
      context: { cards }
    });
    
    
    // * Make individual pages
    cards.forEach(card => {
        // something to put dashes between the spaces (could be refactored)
      let slug = card.name.toLowerCase().trim().split(/\s+/).join('-')
      createPage({
        path: `/${slug}`,
        component: require.resolve('./src/templates/blog-post.js'),
        // don't yet understand what context does
        context: { card }
      })
    });
  })
}



// * I want to use the name field to generate the slug.
// * I think the below adds a field for each node called slug

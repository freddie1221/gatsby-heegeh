require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const fetch = require('isomorphic-fetch')

const listId = process.env.GATSBY_LISTID
const token = process.env.GATSBY_TOKEN
const key = process.env.GATSBY_KEY

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
      path: `/`,
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

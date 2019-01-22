
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const fetch = require('isomorphic-fetch')

const listId = process.env.GATSBY_LISTID
const token = process.env.GATSBY_TOKEN
const key = process.env.GATSBY_KEY
const cardParameters = 'fields=id,name,desc'

const url = `https://api.trello.com/1/lists/${listId}/cards?${cardParameters}&key=${key}&token=${token}`

const getAttachments = (cardId) => fetch(`https://api.trello.com/1/${cardId}/attachments?key=${key}&token=${token}`)

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
      // * need to make another call to trello to retrieve each card's attachments
      getAttachments
// ? How am I going to make the attachments available to the card?
// ? Maybe I make the call from the template?
        // something to put dashes between the spaces (could be refactored)
      let slug = card.name.toLowerCase().trim().split(/\s+/).join('-')
      createPage({
        path: `/${slug}`,
        component: require.resolve('./src/templates/blog-post.js'),
        // I think the object assigned to context is passed into the component as its argument
        context: { card }
      })
    });
  })
}



require("dotenv").config({ path: `.env.${process.env.NODE_ENV}`, })
// ? do I need this dotenv dependency? Don't have it on other components
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



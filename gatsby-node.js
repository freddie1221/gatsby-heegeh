const axios = require('axios');

const listId = '598b7836aa7a8937cfd73260'
const token = 'e0cf35475cd79f9a35d32ff1cc8b1cdf6a006875972e6672a3d395b0da8039e8'
const key = '51c8d95afc906bf667ab0535ac782362'
const cardParameters = 'fields=id,name,desc'
const url = `https://api.trello.com/1/lists/${listId}/cards?${cardParameters}&key=${key}&token=${token}`

const getTrelloData = async () => {
  let response = await axios.get(url) 
  return response
}


exports.createPages = async ({ actions: { createPage } }) => {
  const cards = await getTrelloData()
  cards.forEach(card => {
    // something to put dashes between the spaces
    let slug = card.name.toLowerCase().trim().split(/\s+/).join('-')
    createPage({
      path: `/${slug}`,
      // make generic template component
      component: require.resolve('./src/templates/blog-post.js'),
      // don't yet understand what context does
      context: { card }
    })
  });
}



// * I want to use the name field to generate the slug.
// * I think the below adds a field for each node called slug

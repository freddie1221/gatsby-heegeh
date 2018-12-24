import React from "react"
import Layout from "../components/layout"

// const fetch = require('isomorphic-fetch')
// const token = process.env.GATSBY_TOKEN
// const key = process.env.GATSBY_KEY
// const getAttachments = (cardId) => fetch(`https://api.trello.com/1/${cardId}/attachments?key=${key}&token=${token}`)

export default ({ pageContext: { card } }) => {

  
// ? should I make a fetch call from this component?
// ? how do I create state in a gatsby template

  return (
    <Layout>
      <h1>{card.name}</h1>
      <div>{card.desc}</div>
    </Layout>
  )
}
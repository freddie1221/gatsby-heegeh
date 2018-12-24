import React from "react"
import Layout from "../components/layout"

export default ({ pageContext: { card } }) => {

  return (
    <Layout>
      <h1>{card.name}</h1>
      <div>{card.desc}</div>
    </Layout>
  )
}
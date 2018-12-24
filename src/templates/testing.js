import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby" 

export default ({ pageContext: { cards } }) => {

  return (
    <Layout>
      <div> 
      <h1 css={css`display: inline-block; border-bottom: 1px solid;`}>Posts</h1>
        {cards.map((card) => {
          let slug = card.name.toLowerCase().trim().split(/\s+/).join('-')
          return <div key={card.id}>
            <Link to={slug} css={css`text-decoration: none; color: inherit;`}>
              <h3 css={css`margin-bottom: ${rhythm(1 / 4)};`}>
                {card.name}
              </h3>
              <p>
                {card.desc}
              </p>
            </Link>
          </div>
        })}
      </div>
    </Layout>
  )
}
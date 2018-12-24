import React from "react"
import { Link, graphql } from "gatsby" 
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Posts
        </h1>
        <h4>{data.allUndefinedtrelloResponse.totalCount} Posts</h4>
        {data.allUndefinedtrelloResponse.edges.map(({ node }) => (
          // ? Why can't I write JS in here?
          <div key={node.id}>
            <Link
              to={node.name}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.name}{" "}
                {/* <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span> */}
              </h3>
              <p>{node.desc}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`

  query {
    allUndefinedtrelloResponse  (sort: { fields: dateLastActivity, order: DESC }) {
    totalCount
    edges {
      node {
        id
        name
        desc
        dateLastActivity
      }
    }
  }
}
`

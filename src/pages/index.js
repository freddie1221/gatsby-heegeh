import React from "react"
import { graphql } from "gatsby" 
// additional can import Link when the time comes
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
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
          <div key={node.id}>
            {/* <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            > */}
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
            {/* </Link> */}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`

  query {
    allUndefinedtrelloResponse {
      totalCount
      edges {
        node {
          id
          name
          desc
        }
      }
    }
  }
`

  // query {
  //   allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC })
  //    {
  //     totalCount
  //     edges {
  //       node {
  //         id
  //         frontmatter {
  //           title
  //           date(formatString: "DD MMMM, YYYY")
  //         }
  //         fields {
  //           slug
  //         }
  //         excerpt
  //       }
  //     }
  //   }
  // }

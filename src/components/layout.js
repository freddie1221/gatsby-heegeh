import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, Link, graphql } from "gatsby"
import styles from "./layout.module.css"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={styles.general}>
        <Link to={`/`}>
          <h3 className={styles.header}>
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <span>
          <Link to={`/about/`} css={css`float: right; text-decoration: none; color: inherit;`}>
          {/* Interesting how I can't currently get the CSS module to behave correctly */}
            About
          </Link>
          <Link to={`/contribute-page/`} css={css`float: right; margin-right: ${rhythm(1)}; text-decoration: none; color: inherit;`}>
            Contribute
          </Link>
        </span>

        {children}
        <Link to={`/`}>
          <h3 css={css`margin-top: ${rhythm(3)}; display: inline-block; font-style: normal;`}>
          &larr;- back
          </h3>
        </Link>
      </div>
    )}
  />
)
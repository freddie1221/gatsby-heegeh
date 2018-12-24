import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { css } from "@emotion/core"

export default () => (
  <Layout>
    <h1>This page has not been linked yet</h1>
    <Link to={`/`}
      css={css`
      text-decoration: none;
      color: inherit;
      `}
    >
      <p>
        There is no page at this address yet, please click here to return to the homepage
      </p>
    </Link>
  </Layout>
)
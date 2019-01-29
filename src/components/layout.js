import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.css"
// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"

function Layout({children}) {
  return(

    <div className={styles.general}>
      <header>
        <div className={styles.logo}>
          <Link to={`/`}>
            <h3>
              Recos
            </h3>
          </Link>
        </div>
        <div className={styles.nav}>
          <Link to={`/contribute-page/`}>
            <h4>Contribute</h4>
          </Link>
          <Link to={`/about/`}>
            <h4>About</h4>
          </Link>
        </div>
      </header>
      {children}
      <div className={styles.footer}>
        <Link to={`/`}>
          <h3>
          &larr; back
          </h3>
        </Link>
      </div>
    </div>
  )
}

export default Layout
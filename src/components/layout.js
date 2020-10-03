import React from "react"
import styles from "../styles/layout.module.scss"

function Layout({ children }) {
  return <div className={styles.layout}>{children}</div>
}

export default Layout

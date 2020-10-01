import React from "react"
import styles from "../styles/header.module.scss"
import { Link } from "gatsby"

import Logo from "../images/logo.png"

function Header() {
  return (
    <div className={styles.header}>
      {/* <img src={Logo} alt="logo" width="50" /> */}
      <div className={styles.resume}>Logo</div>
      <div className={styles.links}>
        <Link className={styles.link} to="/#about">
          About
        </Link>
        <Link className={styles.link} to="/#experience">
          Experience
        </Link>
        <Link className={styles.link} to="/#projects">
          Projects
        </Link>
        <Link className={styles.link} to="/#contact">
          Contact
        </Link>
        <button className={styles.resume}>Resume</button>
      </div>
    </div>
  )
}

export default Header

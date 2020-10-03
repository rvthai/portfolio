import React from "react"
import { Link } from "gatsby"
import styles from "../styles/header.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import Logo from "../images/logo.png"

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link className={styles.logo} to="/">
          <img src={Logo} alt="logo" width="35" />
        </Link>
        <FontAwesomeIcon className={styles.hamburger} icon={faBars} />
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
          <div className={styles.resume}>
            <button className={styles.button}>Resume</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

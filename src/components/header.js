import React from "react"
import { Link } from "gatsby"
import styles from "../styles/header.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import Logo from "../images/logo.png"

function Header() {
  var prevScrollpos = window.pageYOffset
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    if (currentScrollPos === 0) {
      document.getElementById("navbar").style.boxShadow = "none"
      document.getElementById("navbar").style.height = "100px"
      document.getElementById("navbar").style.backgroundColor = "rgb(33,33,33)"
    } else if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0"
      document.getElementById("navbar").style.boxShadow =
        "0 10px 30px -10px black"
      document.getElementById("navbar").style.height = "75px"
      document.getElementById("navbar").style.backgroundColor =
        "rgba(33, 33, 33, 0.95)"
    } else {
      document.getElementById("navbar").style.top = "-100px"
    }
    prevScrollpos = currentScrollPos
  }

  return (
    <div id="navbar" className={styles.container}>
      <div id="header" className={styles.header}>
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

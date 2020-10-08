import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styles from "../styles/header.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import { CSSTransition } from "react-transition-group"

import Logo from "../images/logo.png"

function Header() {
  // const [slide, setSlide] = useState(false)

  useEffect(() => {
    var prev_scroll_pos = window.pageYOffset
    window.onscroll = function () {
      var curr_scroll_pos = window.pageYOffset
      var header = document.getElementById("header")
      if (curr_scroll_pos === 0) {
        header.style.height = "100px"
        header.style.boxShadow = "none"
        header.style.backgroundColor = "rgb(33,33,33)"
      } else if (prev_scroll_pos > curr_scroll_pos) {
        header.style.top = "0"
        header.style.height = "75px"
        header.style.boxShadow = "0 10px 30px -10px black"
        header.style.backgroundColor = "rgba(33, 33, 33, 0.95)"
      } else {
        header.style.top = "-100px"
      }
      prev_scroll_pos = curr_scroll_pos
    }
  }, [])

  // const slider = () => {
  //   if (slide) {
  //     var x = document.getElementsByClassName("main")[0]
  //     x.style.filter = "blur(0)"
  //     document.body.style.overflow = "auto"
  //     x.style.pointerEvents = "auto"
  //     setSlide(false)
  //   } else {
  //     var x = document.getElementsByClassName("main")[0]
  //     x.style.filter = "blur(10px)"
  //     document.body.style.overflow = "hidden"
  //     x.style.pointerEvents = "none"
  //     setSlide(true)
  //   }
  // }

  return (
    <div id="header" className={styles.container}>
      <div className={styles.navbar}>
        <a className={styles.logo} href="/" aria-label="home">
          <img src={Logo} alt="logo" width="35" />
        </a>
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
          <a className={styles.resume} href="/resume.pdf" target="_blank">
            Resume
          </a>
        </div>

        <FontAwesomeIcon
          className={styles.hamburger}
          icon={faBars}
          size="2x"
          //onClick={slider}
        />
      </div>
      {/* <CSSTransition in={slide} timeout={300} unmountOnExit classNames="drawer">
        <div className={styles.thedrawer}>
          <p onClick={slider} style={{ color: "white" }}>
            x
          </p>
        </div>
      </CSSTransition> */}
    </div>
  )
}

export default Header

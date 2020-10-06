import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styles from "../styles/header.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import { CSSTransition } from "react-transition-group"

import Logo from "../images/newlogo.png"

function Header() {
  const [slide, setSlide] = useState(false)

  useEffect(() => {
    var prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset
      if (currentScrollPos === 0) {
        document.getElementById("navbar").style.boxShadow = "none"
        document.getElementById("navbar").style.height = "100px"
        document.getElementById("navbar").style.backgroundColor =
          "rgb(33,33,33)"
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
  }, [])

  const slider = () => {
    if (slide) {
      var x = document.getElementsByClassName("main")[0]
      // var y = document.getElementById("header")
      // y.style.filter = "blur(0)"
      x.style.filter = "blur(0)"
      document.body.style.overflow = "auto"
      x.style.pointerEvents = "auto"
      // y.style.visibility = "visible"
      setSlide(false)
    } else {
      var x = document.getElementsByClassName("main")[0]
      // var y = document.getElementById("header")
      // y.style.filter = "blur(10px)"
      x.style.filter = "blur(10px)"
      document.body.style.overflow = "hidden"
      x.style.pointerEvents = "none"
      // y.style.visibility = "hidden"
      setSlide(true)
    }
  }

  return (
    <div id="navbar" className={styles.container}>
      <div id="header" className={styles.header}>
        <a className={styles.logo} href="/" aria-label="home">
          <img className={styles.pic} src={Logo} alt="logo" width="35" />
        </a>
        <FontAwesomeIcon
          className={styles.hamburger}
          icon={faBars}
          size="2x"
          onClick={slider}
        />
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

          <a href="/resume.pdf" target="_blank" className={styles.button}>
            Resume
          </a>
        </div>
      </div>
      <CSSTransition in={slide} timeout={300} unmountOnExit classNames="drawer">
        <div className={styles.thedrawer}>
          <p onClick={slider} style={{ color: "white" }}>
            x
          </p>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Header

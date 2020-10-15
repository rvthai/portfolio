import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styles from "styles/header.module.css"
import { CSSTransition } from "react-transition-group"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import Logo from "images/logo.png"

function Header() {
  const [slide, setSlide] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    var prev_scroll_pos = window.pageYOffset
    window.onscroll = function () {
      var curr_scroll_pos = window.pageYOffset
      var header = document.getElementById("header")
      if (curr_scroll_pos === 0) {
        header.style.height = "100px"
        header.style.boxShadow = "none"
        header.style.backgroundColor = "transparent"
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

  const slider = () => {
    if (slide) {
      setShowOverlay(false)
      document.body.style.overflow = "auto"
      setSlide(false)
    } else {
      setShowOverlay(true)
      document.body.style.overflow = "hidden"
      setSlide(true)
    }
  }
  const links = ["about", "work", "projects", "contact"]

  return (
    <div id="header" className={styles.container}>
      {showOverlay ? <div onClick={slider} className={styles.overlay} /> : null}
      <div id="navbar" className={styles.navbar}>
        <Link
          className={styles.logo}
          to="/"
          onClick="window.location.reload()"
          aria-label="home"
        >
          <img src={Logo} alt="logo" width="35" />
        </Link>
        <div className={styles.links}>
          {links.map((link, index) => (
            <Link className={styles.link} key={index} to={`/#${link}`}>
              {link}
            </Link>
          ))}
          <a className={styles.resume} href="/resume.pdf" target="_blank">
            Resume
          </a>
        </div>

        <FontAwesomeIcon
          className={styles.hamburger}
          icon={faBars}
          size="2x"
          onClick={slider}
        />
      </div>
      <CSSTransition in={slide} timeout={300} unmountOnExit classNames="drawer">
        <div className={styles.drawera}>
          <FontAwesomeIcon
            className={styles.cross}
            icon={faTimes}
            size="2x"
            onClick={slider}
          />
          <div className={styles.vlinks}>
            {links.map((link, index) => (
              <Link className={styles.vlink} key={index} to={`/#${link}`}>
                {link}
              </Link>
            ))}
            <a className={styles.vresume} href="/resume.pdf" target="_blank">
              Resume
            </a>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Header

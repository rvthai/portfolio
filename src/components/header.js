import React, { useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import { Link } from "gatsby"
import styles from "styles/header.module.css"

// Components
import Drawer from "components/drawer"

// Images and Icons
import Logo from "images/logo.png"
import Hamburger from "images/icons/bars.svg"

function Header() {
  const [showDrawer, setShowDrawer] = useState(false)
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

  const toggleDrawer = () => {
    if (showDrawer) {
      document.body.style.overflow = "auto"
      setShowOverlay(false)
      setShowDrawer(false)
    } else {
      document.body.style.overflow = "hidden"
      setShowOverlay(true)
      setShowDrawer(true)
    }
  }

  const links = ["about", "work", "projects", "contact"]

  return (
    <div id="header" className={styles.container}>
      {showOverlay ? (
        <div onClick={toggleDrawer} className={styles.overlay} />
      ) : null}
      <div className={styles.navbar}>
        <a className={styles.logo} href="/">
          <img src={Logo} alt="logo" width="35" />
        </a>
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
        <Hamburger className={styles.hamburger} onClick={toggleDrawer} />
      </div>

      <CSSTransition
        in={showDrawer}
        timeout={300}
        unmountOnExit
        classNames="drawer"
      >
        <Drawer links={links} toggleDrawer={toggleDrawer} />
      </CSSTransition>
    </div>
  )
}

export default Header

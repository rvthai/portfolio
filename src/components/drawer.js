import React from "react"
import { Link } from "gatsby"
import styles from "styles/drawer.module.css"

// Images and Icons
import Cross from "images/icons/cross.svg"

function Drawer(props) {
  return (
    <div className={styles.drawer}>
      <Cross className={styles.cross} onClick={props.toggleDrawer} />
      <div className={styles.links}>
        {props.links.map((link, index) => (
          <Link className={styles.link} key={index} to={`/#${link}`}>
            {link}
          </Link>
        ))}
        <a className={styles.resume} href="/resume.pdf" target="_blank">
          Resume
        </a>
      </div>
    </div>
  )
}

export default Drawer

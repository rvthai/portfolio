import React from "react"
import styles from "../styles/projects.module.scss"

import Img from "../images/projects/scrappy-cookbook.png"
import Gif from "../images/projects/scrappy-cookbook.gif"

function Projects() {
  return (
    <div id="projects" style={{ marginBottom: "20rem" }}>
      <div className={styles.heading}>
        <span className={styles.title}>Some things I've built</span>
        <div className={styles.hr} />
      </div>
      <div className={styles.static} />
    </div>
  )
}

export default Projects

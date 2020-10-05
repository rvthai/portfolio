import React from "react"
import styles from "../styles/projects.module.scss"

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

import React from "react"
import styles from "../styles/projects.module.scss"

function Projects() {
  return (
    <div id="projects" style={{ marginBottom: "20rem" }}>
      <div className={styles.heading}>
        <span className={styles.title}>
          <span style={{ color: "#f1bb52" }}>#</span> Some things I've built
        </span>
        <div className={styles.hr} />
      </div>
    </div>
  )
}

export default Projects

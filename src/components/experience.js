import React from "react"
import styles from "../styles/experience.module.scss"

function Experience() {
  return (
    <div id="experience" style={{ marginBottom: "20rem" }}>
      <div className={styles.heading}>
        <span className={styles.title}>Where I've worked</span>
        <div className={styles.hr} />
      </div>
    </div>
  )
}

export default Experience

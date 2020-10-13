import React from "react"
import styles from "styles/job.module.css"

function Job(props) {
  return (
    <div id="job" className={styles.container}>
      <div className={styles.flexbetween}>
        <p className={styles.company}>{props.company}</p>
        <p className={styles.stint}>{props.stint}</p>
      </div>
      <p className={styles.position}>{props.position}</p>
    </div>
  )
}

export default Job

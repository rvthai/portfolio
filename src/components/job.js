import React from "react"
import styles from "styles/job.module.css"
import sr from "utils/scroll-reveal"

function Job(props) {
  return (
    <div className={styles.container} {...sr}>
      <div className={styles.job}>
        <p className={styles.company}>{props.company}</p>
        <p className={styles.stint}>{props.stint}</p>
      </div>
      <p>{props.position}</p>
    </div>
  )
}

export default Job

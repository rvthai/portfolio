import React, { useEffect, useRef } from "react"
import styles from "styles/job.module.css"
import sr from "utils/scroll-reveal"

function Job(props) {
  const revealContainer = useRef(null)

  // useEffect(() => {
  //   sr.reveal(revealContainer.current, { ...sr.config, delay: 300 })
  // }, [])

  return (
    <div id="job" className={styles.container} {...sr} ref={revealContainer}>
      <div className={styles.flexbetween}>
        <p className={styles.company}>{props.company}</p>
        <p className={styles.stint}>{props.stint}</p>
      </div>
      <p className={styles.position}>{props.position}</p>
    </div>
  )
}

export default Job

import React from "react"
import styles from "../styles/experience.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

function Experience() {
  return (
    <div id="experience" className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.title}>
          <span style={{ color: "#f1bb52" }}>#</span> Where I've worked
        </span>
        <div className={styles.hr} />
      </div>
      <div className={styles.content}>
        <div className={styles.job}>
          <div className={styles.line1}>
            <span className={styles.company}>ITTIA</span>
            <span className={styles.date}>July 2019 - July 2020</span>
          </div>
          <span className={styles.position}>Junior Software Engineer</span>
        </div>
        <div className={styles.job}>
          <div className={styles.line1}>
            <span className={styles.company}>Spetcial</span>
            <span className={styles.date}>February 2019 - June 2019</span>
          </div>
          <span className={styles.position}>Software Developer Intern</span>
        </div>
        <div className={styles.job}>
          <div className={styles.line1}>
            <span className={styles.company}>Dreams for Schools</span>
            <span className={styles.date}>March 2018 - June 2018</span>
          </div>
          <span className={styles.position}>Junior Software Engineer</span>
        </div>
      </div>
      {/* <button className="button">View my resume</button> */}
      <span className={styles.view}>
        <div className={styles.linka}>View my resume </div>
        <FontAwesomeIcon className={styles.arrow} icon={faArrowRight} />
      </span>
    </div>
  )
}

export default Experience

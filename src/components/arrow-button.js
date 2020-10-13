import React from "react"
import styles from "styles/arrow-button.module.css"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

function ArrowButton(props) {
  return (
    <a
      className={styles.link}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      <p className={styles.label}>{props.label}</p>
      <FontAwesomeIcon className={styles.arrow} icon={faArrowRight} />
    </a>
  )
}

export default ArrowButton

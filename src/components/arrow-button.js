import React from "react"
import styles from "styles/arrow-button.module.css"
import sr from "utils/scroll-reveal"

// Icons
import Arrow from "images/icons/arrow.svg"

function ArrowButton(props) {
  return (
    <a
      className={styles.link}
      href={props.href}
      target="_blank"
      rel="noreferrer"
      {...sr}
    >
      <p className={styles.label}>{props.label}</p>
      <Arrow className={styles.arrow} />
    </a>
  )
}

export default ArrowButton

import React, { useEffect, useRef } from "react"
import styles from "styles/arrow-button.module.css"
import sr from "utils/scroll-reveal"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

function ArrowButton(props) {
  const revealLink = useRef(null)
  useEffect(() => {
    sr.reveal(revealLink.current, { ...sr.config, delay: 300 })
  }, [])
  return (
    <a
      className={styles.link}
      href={props.href}
      target="_blank"
      rel="noreferrer"
      ref={revealLink}
    >
      <p className={styles.label}>{props.label}</p>
      <FontAwesomeIcon className={styles.arrow} icon={faArrowRight} />
    </a>
  )
}

export default ArrowButton

import React, { useEffect, useRef } from "react"
import sr from "utils/scroll-reveal"
import styles from "styles/section-header.module.css"

function SectionHeader(props) {
  const revealContainer = useRef(null)

  useEffect(() => {
    sr.reveal(revealContainer.current, { ...sr.config, delay: 150 })
  }, [])

  return (
    <div className={styles.container} ref={revealContainer}>
      <p className={styles.heading}>
        <span className={styles.anchor}>#</span> {props.heading}
      </p>
      <div className={styles.hr} />
    </div>
  )
}

export default SectionHeader

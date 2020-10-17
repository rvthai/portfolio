import React from "react"
import styles from "styles/section-header.module.css"
import sr from "utils/scroll-reveal"

function SectionHeader(props) {
  return (
    <div className={styles.container} {...sr}>
      <p className={styles.heading}>
        <span className={styles.anchor}>#</span> {props.heading}
      </p>
      <div className={styles.hr} />
    </div>
  )
}

export default SectionHeader

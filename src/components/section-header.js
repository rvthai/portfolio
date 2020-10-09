import React from "react"
import styles from "styles/section-header.module.css"

function SectionHeader(props) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>
        <span className={styles.anchor}>#</span> {props.heading}
      </p>
      <div className={styles.hr} />
    </div>
  )
}

export default SectionHeader

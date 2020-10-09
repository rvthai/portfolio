import React from "react"
import styles from "../styles/header.module.css"

function SectionHeader(props) {
  return (
    <div className={styles.heading}>
      <span className={styles.title}>
        {" "}
        <span style={{ color: "#f1bb52" }}>#</span> About me
      </span>
      <div className={styles.hr} />
    </div>
  )
}

export default SectionHeader

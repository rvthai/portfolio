import React from "react"
import styles from "../styles/contact.module.scss"

function Contact() {
  return (
    <div id="contact" style={{ marginBottom: "20rem" }}>
      <div className={styles.heading}>
        <span className={styles.title}>Contact me</span>
        <div className={styles.hr} />
      </div>
    </div>
  )
}

export default Contact

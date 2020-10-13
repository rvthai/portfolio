import React from "react"
import styles from "../../styles/contact.module.scss"

function Contact() {
  return (
    <div id="contact" className="section">
      <div className={styles.heading}>
        <span className={styles.title}>Contact me</span>
      </div>
      <div className={styles.content}>
        <span className={styles.mainmessage}>Let's get in touch!</span>
        <span className={styles.message}>
          I am currently looking for new opportunities! Send me an email to
          connect or to just simply say hi (:
        </span>
      </div>
      <button className="button">Get in touch</button>
    </div>
  )
}

export default Contact

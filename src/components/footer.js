import React from "react"
import styles from "../styles/footer.module.scss"

function Footer() {
  return (
    <div className={styles.container}>
      <p>Ricky Thai © 2020</p>
      <div className={styles.socials}>
        <p className={styles.link}>EMAIL</p>
        <p className={styles.link}>LINKEDIN</p>
        <p>GITHUB</p>
      </div>
    </div>
  )
}

export default Footer

import React from "react"
import styles from "styles/footer.module.css"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.copyright}>Ricky Thai © 2020</p>
      <div className={styles.socials}>
        <a href="mailto:rickyvanthai@gmail.com" className={styles.link}>
          EMAIL
        </a>
        <a
          href="https://www.linkedin.com/in/rickyvthai/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          LINKEDIN
        </a>
        <a
          href="https://github.com/rvthai"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          GITHUB
        </a>
      </div>
    </div>
  )
}

export default Footer

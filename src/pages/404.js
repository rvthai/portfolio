import React from "react"
import styles from "styles/404.module.css"

// Components
import Header from "../components/header"
import Footer from "../components/footer"

function PageNotFound(props) {
  return (
    <div>
      <Header />
      <div className="main">
        <div className={styles.container}>
          <p className={styles.heading}>404</p>
          <p className={styles.subheading}>Page Not Found</p>
          <a className={styles.button} href="\">
            Go home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PageNotFound

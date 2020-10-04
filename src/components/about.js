import React from "react"
import styles from "../styles/about.module.scss"

import Me from "../images/me.png"

function About() {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.heading}>
        <span className={styles.title}>About me</span>
        <div className={styles.hr} />
      </div>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <p className={styles.text}>
            <p>
              Hello! My name is Ricky, a software engineer based in San Jose,
              CA. I am a recent graduate from the University of California,
              Irvine where I received a bachelor's degree in Computer Science.{" "}
            </p>
            <p>
              {" "}
              Shortly after I graduated, I discovered a passion for front-end
              development. I enjoy designing and developing applications that
              bring forth both delightful and functional experiences for people.{" "}
            </p>
            <p>
              Currently, I am working on my craft and am looking for more
              opportunities to do so.{" "}
            </p>
            <p>
              Some tools and technologies I've been working with are:
              {/* <ul>
              <li>React</li>
              <li>Node</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Gatsby</li>
              <li>Python</li>
              <li>Express</li>
            </ul> */}
            </p>
          </p>
        </div>
        <div className={styles.rightside}>
          <div className={styles.wrapper}>
            <img src={Me} alt="me" className={styles.pic} />
            <div className={styles.layer} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

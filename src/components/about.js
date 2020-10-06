import React from "react"
import styles from "../styles/about.module.scss"

import Me from "../images/me.png"

function About() {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.heading}>
        <span className={styles.title}>
          {" "}
          <span style={{ color: "#f1bb52" }}>#</span> About me
        </span>
        <div className={styles.hr} />
      </div>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <div className={styles.text}>
            <p style={{ marginBottom: "1rem" }}>
              Hello! My name is Ricky, a software engineer based in San Jose,
              CA. I am a recent graduate from the University of California,
              Irvine where I received a bachelor's degree in Computer Science.{" "}
            </p>
            <p style={{ marginBottom: "1rem" }}>
              {" "}
              Shortly after I graduated, I discovered a passion for front-end
              development. I enjoy designing and developing applications that
              bring forth both delightful and functional experiences for people.{" "}
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Currently, I am working on my craft and am looking for more
              opportunities to do so.{" "}
            </p>
            <p style={{ marginBottom: "2rem" }}>
              Some tools and technologies I've been working with are:
            </p>
            <div className={styles.lists}>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
              <ul>
                <li>HTML & CSS</li>
                <li>Python</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.rightside}>
          <div className={styles.wrapper}>
            <img src={Me} alt="me" className={styles.pic} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

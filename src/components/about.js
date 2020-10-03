import React from "react"
import styles from "../styles/about.module.scss"

import Me from "../images/me.png"

function About() {
  return (
    <div id="about">
      <div className={styles.heading}>
        <span className={styles.title}>About me</span>
        <div className={styles.hr} />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Hello! My name is Ricky, a software engineer based in San Jose, CA. I
          am a recent graduate from the University of California, Irvine where I
          received a bachelor's degree in Computer Science. Shortly I graduated,
          I discovered a passion for front-end development. I enjoy designing
          and developing applications that bring forth both delightful and
          functional experiences for people. I am currently working on my craft
          and am looking for more opportunities to do so!
        </p>
        <div className={styles.imgwrapper}>
          <img src={Me} alt="me" className={styles.pic} />
          <div className={styles.overlay}></div>
        </div>
      </div>
    </div>
  )
}

export default About

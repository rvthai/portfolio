import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../styles/about.module.scss"

import Skills from "../skills"

import Me from "../images/me.png"

function About() {
  const data = useStaticQuery(
    graphql`
      query {
        about: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/about/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                paragraph1
                paragraph2
                paragraph3
              }
            }
          }
        }
      }
    `
  )

  const aboutData = data.about.edges[0].node.frontmatter

  return (
    <div id="about" className="section">
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
            <p style={{ marginBottom: "1rem" }}>{aboutData.paragraph1}</p>
            <p style={{ marginBottom: "1rem" }}>{aboutData.paragraph2}</p>
            <p style={{ marginBottom: "1rem" }}>{aboutData.paragraph3}</p>
            <Skills />
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

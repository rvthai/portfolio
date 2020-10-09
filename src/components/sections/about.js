import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "styles/about.module.scss"

import Skills from "components/skills"
import SectionHeader from "components/section-header"

import Me from "images/me.png"

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

  const heading = "About me"

  return (
    <div id="about" className="section">
      <SectionHeader heading={heading} />
      <div className={styles.content}>
        <div className={styles.leftside}>
          <div className={styles.text}>
            <p>{aboutData.paragraph1}</p>
            <p>{aboutData.paragraph2}</p>
            <p>{aboutData.paragraph3}</p>
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

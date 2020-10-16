import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "styles/about.module.css"
import sr from "utils/scroll-reveal"

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
  const revealContent = useRef(null)
  // useEffect(() => {
  //   sr.reveal(revealContent.current, { ...sr.config, delay: 300 })
  // }, [])

  return (
    <div id="about" className="section">
      <SectionHeader heading={heading} />
      <div className={styles.content} {...sr} ref={revealContent}>
        <div className={styles.text}>
          <p className="paragraph">{aboutData.paragraph1}</p>
          <p className="paragraph">{aboutData.paragraph2}</p>
          <p className="paragraph">{aboutData.paragraph3}</p>
          <Skills />
        </div>
        <div className={styles.image}>
          <div className={styles.wrapper}>
            <img className={styles.me} src={Me} alt="me" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "styles/about.module.css"
import sr from "../../../gatsby-browser"

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
  const revealContainer = useRef(null)

  useEffect(() => {
    const config = {
      origin: "right",
      duration: 1000,
      delay: 150,
      distance: "500px",
      scale: 1,
      easing: "ease",
    }

    sr.reveal(revealContainer.current, config)
  }, [])

  return (
    <div
      id="about"
      className="section"
      ref={revealContainer}
      // data-sal="slide-up"
      // data-sal-delay="300"
      // data-sal-easing="ease"
    >
      <SectionHeader heading={heading} />
      <div className={styles.content}>
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

import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "styles/hero.module.css"
import sr from "utils/scroll-reveal"

import Envelope from "images/icons/envelope.svg"
import LinkedIn from "images/icons/linkedin.svg"
import Github from "images/icons/github.svg"

function Hero() {
  const data = useStaticQuery(
    graphql`
      query {
        hero: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/hero/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                tagline
                heading1
                heading2
                subheading
              }
            }
          }
        }
      }
    `
  )

  const heroData = data.hero.edges[0].node.frontmatter
  const revealTagline = useRef(null)
  const revealHeadings = useRef(null)
  const revealSubheading = useRef(null)
  const revealIcons = useRef(null)
  // useEffect(() => {
  //   sr.reveal(revealTagline.current, { ...sr.config, delay: 150 })
  //   sr.reveal(revealHeadings.current, { ...sr.config, delay: 300 })
  //   sr.reveal(revealSubheading.current, { ...sr.config, delay: 450 })
  //   sr.reveal(revealIcons.current, { ...sr.config, delay: 600 })
  // }, [])
  const dataAttr = {
    "data-sal": "slide-down",
    "data-sal-delay": "200",
    "data-sal-duration": "1000",
    "data-sal-easing": "ease",
  }
  return (
    <div id="hero" className={styles.container}>
      <p className={styles.tagline} {...sr} ref={revealTagline}>
        {heroData.tagline}
      </p>
      <div className={styles.headings} {...sr} ref={revealHeadings}>
        <p className={styles.heading}>{heroData.heading1}</p>
        <p className={`${styles.heading} ${styles.slate}`}>
          {heroData.heading2}
        </p>
      </div>
      <p className={styles.subheading} {...sr} ref={revealSubheading}>
        {heroData.subheading}
      </p>
      <div className={styles.icons} {...sr} ref={revealIcons}>
        <a href="mailto:rickyvanthai@gmail.com">
          <Envelope className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/rickyvthai/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn className={styles.icon} />
        </a>
        <a href="https://github.com/rvthai" target="_blank" rel="noreferrer">
          <Github className={styles.icon} />
        </a>
      </div>
    </div>
  )
}

export default Hero

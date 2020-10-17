import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "styles/hero.module.css"
import sr from "utils/scroll-reveal"

// Icons
import Envelope from "images/icons/envelope.svg"
import LinkedIn from "images/icons/linkedin.svg"
import Github from "images/icons/github.svg"

function Hero() {
  const data = useStaticQuery(
    graphql`
      query {
        hero: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "content/hero/" } }
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

  return (
    <div id="hero" className={styles.container}>
      <p className={styles.tagline} {...sr}>
        {heroData.tagline}
      </p>
      <div className={styles.headings} {...sr}>
        <p className={styles.heading}>{heroData.heading1}</p>
        <p className={`${styles.heading} ${styles.slate}`}>
          {heroData.heading2}
        </p>
      </div>
      <p className={styles.subheading} {...sr}>
        {heroData.subheading}
      </p>
      <div className={styles.icons} {...sr}>
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

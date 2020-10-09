import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "styles/hero.module.css"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

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

  return (
    <div id="hero" className={styles.container}>
      <p className={styles.tagline}>{heroData.tagline}</p>
      <div className={styles.headings}>
        <p className={styles.heading}>{heroData.heading1}</p>
        <p className={`${styles.heading} ${styles.slate}`}>
          {heroData.heading2}
        </p>
      </div>
      <p className={styles.subheading}>{heroData.subheading}</p>
      <div className={styles.icons}>
        <a href="mailto:rickyvanthai@gmail.com">
          <FontAwesomeIcon
            className={styles.icon}
            icon={faEnvelope}
            size="3x"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rickyvthai/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon={faLinkedin}
            size="3x"
          />
        </a>
        <a href="https://github.com/rvthai" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className={styles.icon} icon={faGithub} size="3x" />
        </a>
      </div>
    </div>
  )
}

export default Hero

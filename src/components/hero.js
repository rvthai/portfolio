import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../styles/hero.module.scss"

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
                greeting
                name
                subheading
              }
              excerpt
            }
          }
        }
      }
    `
  )

  const heroData = data.hero.edges[0].node
  // const heroheroData = data.hero.edges[0].node

  return (
    <div id="hero" className={styles.hero}>
      <p className={styles.tagline}>{heroData.frontmatter.greeting}</p>
      <div className={styles.headings}>
        <p className={styles.heading}>{heroData.frontmatter.name}</p>
        <p className={`${styles.heading} ${styles.slate}`}>
          {heroData.frontmatter.subheading}
        </p>
      </div>
      <p className={styles.subheading}>{heroData.excerpt}</p>
      <div className={styles.icons}>
        <FontAwesomeIcon className={styles.icon} icon={faEnvelope} size="3x" />
        <FontAwesomeIcon className={styles.icon} icon={faLinkedin} size="3x" />
        <FontAwesomeIcon className={styles.icon} icon={faGithub} size="3x" />
      </div>
    </div>
  )
}

export default Hero

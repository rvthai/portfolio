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
    // {`${styles.description} ${styles.yellow}`}
    <div id="hero" className={styles.hero}>
      <p className={styles.heading1}>{heroData.frontmatter.greeting}</p>
      <p className={styles.heading2}>{heroData.frontmatter.name}</p>
      <p className={styles.heading3}>{heroData.frontmatter.subheading}</p>
      <p className={(styles.subheading, styles.heading2)}>{heroData.excerpt}</p>
      <div className={styles.icons}>
        <FontAwesomeIcon className={styles.icon} icon={faEnvelope} size="2x" />
        <FontAwesomeIcon className={styles.icon} icon={faLinkedin} size="2x" />
        <FontAwesomeIcon className={styles.icon} icon={faGithub} size="2x" />
      </div>
    </div>
  )
}

export default Hero

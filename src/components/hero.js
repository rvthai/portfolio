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
      <p className={styles.greeting}>{heroData.frontmatter.greeting}</p>
      <span className={styles.name}>{heroData.frontmatter.name}</span>
      <span className={styles.subheading}>
        {heroData.frontmatter.subheading}
      </span>
      <span className={styles.description}>{heroData.excerpt}</span>
      <div className={styles.icons}>
        <FontAwesomeIcon className={styles.icon} icon={faEnvelope} size="2x" />
        <FontAwesomeIcon className={styles.icon} icon={faLinkedin} size="2x" />
        <FontAwesomeIcon className={styles.icon} icon={faGithub} size="2x" />
      </div>
    </div>
  )
}

export default Hero

import React from "react"
import styles from "../styles/hero.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { useStaticQuery, graphql } from "gatsby"

function Hero() {
  const data = useStaticQuery(
    graphql`
      query HeroQuery {
        allMarkdownRemark {
          edges {
            node {
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
  const content = data.allMarkdownRemark.edges[0].node

  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <span className={styles.greeting}>
            {content.frontmatter.greeting}
          </span>
          <span className={styles.name}>{content.frontmatter.name}</span>
          <span className={styles.subheading}>
            {content.frontmatter.subheading}
          </span>
          <span className={styles.description}>{content.excerpt}</span>
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faEnvelope}
            size="2x"
          />
          <FontAwesomeIcon
            className={styles.icon}
            icon={faLinkedin}
            size="2x"
          />
          <FontAwesomeIcon className={styles.icon} icon={faGithub} size="2x" />
        </div>
      </div>
    </div>
  )
}

export default Hero

import React from "react"
import styles from "../styles/hero.module.scss"

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
    <div className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.greeting}>{content.frontmatter.greeting}</span>
        <span className={styles.name}>{content.frontmatter.name}</span>
        <span className={styles.subheading}>
          {content.frontmatter.subheading}
        </span>
        <div className={styles.descriptionContainer}>
          <span className={styles.description}>{content.excerpt}</span>
        </div>
      </div>
    </div>
  )
}

export default Hero

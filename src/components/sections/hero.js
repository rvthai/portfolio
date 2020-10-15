import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "styles/hero.module.css"
import sr from "utils/scroll-reveal"

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
  const revealTagline = useRef(null)
  const revealHeadings = useRef(null)
  const revealSubheading = useRef(null)
  const revealIcons = useRef(null)
  useEffect(() => {
    sr.reveal(revealTagline.current, { ...sr.config, delay: 150 })
    sr.reveal(revealHeadings.current, { ...sr.config, delay: 300 })
    sr.reveal(revealSubheading.current, { ...sr.config, delay: 450 })
    sr.reveal(revealIcons.current, { ...sr.config, delay: 600 })
  }, [])

  return (
    <div id="hero" className={styles.container}>
      <p className={styles.tagline} ref={revealTagline}>
        {heroData.tagline}
      </p>
      <div className={styles.headings} ref={revealHeadings}>
        <p className={styles.heading}>{heroData.heading1}</p>
        <p className={`${styles.heading} ${styles.slate}`}>
          {heroData.heading2}
        </p>
      </div>
      <p className={styles.subheading} ref={revealSubheading}>
        {heroData.subheading}
      </p>
      <div className={styles.icons} ref={revealIcons}>
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

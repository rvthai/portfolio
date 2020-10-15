import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "styles/contact.module.css"
import sr from "utils/scroll-reveal"

function Contact() {
  const data = useStaticQuery(
    graphql`
      query {
        contact: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/content/contact/" } }
        ) {
          edges {
            node {
              frontmatter {
                heading
                subheading
                button
              }
            }
          }
        }
      }
    `
  )

  const contactData = data.contact.edges[0].node.frontmatter

  const revealHeader = useRef(null)
  const revealHeading = useRef(null)
  const revealSubheading = useRef(null)
  const revealButton = useRef(null)

  useEffect(() => {
    sr.reveal(revealHeader.current, { ...sr.config, delay: 150 })
    sr.reveal(revealHeading.current, { ...sr.config, delay: 300 })
    sr.reveal(revealSubheading.current, { ...sr.config, delay: 450 })
    sr.reveal(revealButton.current, { ...sr.config, delay: 600 })
  }, [])

  return (
    <div id="contact" className="section">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.header} ref={revealHeader}>
            Contact Me
          </p>
          <p className={styles.heading} ref={revealHeading}>
            {contactData.heading}
          </p>
          <p className="paragraph" ref={revealSubheading}>
            {contactData.subheading}
          </p>
        </div>
        <a
          className={styles.button}
          href="mailto:rickyvanthai@gmail.com"
          ref={revealButton}
        >
          {contactData.button}
        </a>
      </div>
    </div>
  )
}

export default Contact

import React from "react"
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

  return (
    <div id="contact" className="section">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.header} {...sr}>
            Contact Me
          </p>
          <p className={styles.heading} {...sr}>
            {contactData.heading}
          </p>
          <p className={styles.paragraph} {...sr}>
            {contactData.subheading}
          </p>
        </div>
        <a
          className={styles.button}
          href="mailto:rickyvanthai@gmail.com"
          {...sr}
        >
          {contactData.button}
        </a>
      </div>
    </div>
  )
}

export default Contact

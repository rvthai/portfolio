import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "styles/contact.module.css"

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
    <div
      id="contact"
      className="section"
      // data-sal="slide-up"
      // data-sal-delay="300"
      // data-sal-easing="ease"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.header}>Contact Me</p>
          <p className={styles.heading}>{contactData.heading}</p>
          <p className="parapgraph">{contactData.subheading}</p>
        </div>
        <a className={styles.button} href="mailto:rickyvanthai@gmail.com">
          {contactData.button}
        </a>
      </div>
    </div>
  )
}

export default Contact

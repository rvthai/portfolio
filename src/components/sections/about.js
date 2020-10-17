import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "styles/about.module.css"
import sr from "utils/scroll-reveal"

// Components
import SectionHeader from "components/section-header"
import Skills from "components/skills"

// Images
import Me from "images/me.png"

function About() {
  const data = useStaticQuery(
    graphql`
      query {
        about: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "content/about/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                paragraph1
                paragraph2
                paragraph3
                skillset_1
                skillset_2
              }
            }
          }
        }
      }
    `
  )

  const aboutData = data.about.edges[0].node.frontmatter

  const heading = "About me"

  return (
    <div id="about" className="section">
      <SectionHeader heading={heading} />
      <div className={styles.content} {...sr}>
        <div className={styles.text}>
          <p className={styles.paragraph}>{aboutData.paragraph1}</p>
          <p className={styles.paragraph}>{aboutData.paragraph2}</p>
          <p className={styles.paragraph}>{aboutData.paragraph3}</p>
          <Skills
            skillset_1={aboutData.skillset_1}
            skillset_2={aboutData.skillset_2}
          />
        </div>
        <div className={styles.image}>
          <img className={styles.me} src={Me} alt="me" />
        </div>
      </div>
    </div>
  )
}

export default About

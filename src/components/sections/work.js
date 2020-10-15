import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "styles/work.module.css"

// Components
import SectionHeader from "components/section-header"
import Job from "components/job"
import ArrowButton from "components/arrow-button"

function Work() {
  const heading = "Where I've Worked"
  const label = "View my resume"
  const href = "/resume.pdf"

  const data = useStaticQuery(
    graphql`
      query {
        work: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/content/work/" } }
        ) {
          edges {
            node {
              frontmatter {
                jobs {
                  company
                  position
                  stint
                }
              }
            }
          }
        }
      }
    `
  )
  const workData = data.work.edges[0].node.frontmatter.jobs

  return (
    <div
      id="work"
      className="section"
      // data-sal="slide-up"
      // data-sal-delay="300"
      // data-sal-easing="ease"
    >
      <SectionHeader heading={heading} />
      <div className={styles.content}>
        {workData.map((job, index) => (
          <Job
            key={index}
            company={job.company}
            position={job.position}
            stint={job.stint}
          />
        ))}
      </div>
      <ArrowButton href={href} label={label} />
    </div>
  )
}

export default Work

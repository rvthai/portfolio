import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "styles/projects.module.css"

// Components
import SectionHeader from "components/section-header"
import Project from "components/project"
import ArrowButton from "components/arrow-button"

function Projects() {
  const data = useStaticQuery(
    graphql`
      query {
        projects: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/content/projects/" } }
        ) {
          edges {
            node {
              frontmatter {
                projects {
                  title
                  description
                  tags
                  link
                  github
                  image {
                    childImageSharp {
                      fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const projectsData = data.projects.edges[0].node.frontmatter.projects

  const heading = "Some things I've built"

  // Props for ArrowButton component
  const label = "View my github"
  const href = "https://github.com/rvthai"

  return (
    <div id="projects" className="section">
      <SectionHeader heading={heading} />
      <div className={styles.content}>
        {projectsData.map((project, index) => (
          <Project
            key={index}
            index={index}
            total={projectsData.length}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            github={project.github}
            image={project.image.childImageSharp.fluid}
          />
        ))}
      </div>
      <ArrowButton href={href} label={label} />
    </div>
  )
}

export default Projects

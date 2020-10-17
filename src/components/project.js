import React from "react"
import styles from "styles/project.module.css"
import sr from "utils/scroll-reveal"

// Components
import Img from "gatsby-image"

// Icons
import Github from "images/icons/github.svg"
import ExternalLink from "images/icons/external-link.svg"

function Project(props) {
  var reverse = false
  if ((props.index + 1) % 2 !== 0) {
    reverse = true
  }

  return (
    <div
      className={
        props.index + 1 === props.total
          ? styles.lastcontainer
          : styles.container
      }
      {...sr}
    >
      <Img
        className={reverse ? styles.pic : styles.inversepic}
        imgStyle={{ objectFit: "contain" }}
        fluid={props.image}
      />
      <div className={reverse ? styles.text : styles.inversetext}>
        <p className={styles.tagline}>Featured Project</p>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.description}>{props.description}</p>
        <div className={reverse ? styles.tags : styles.inversetags}>
          {props.tags.map((tag, index) => (
            <div
              key={index}
              className={reverse ? styles.tag : styles.inversetag}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className={reverse ? styles.icons : styles.inverseicons}>
          <a href={props.github} target="_blank" rel="noreferrer">
            <Github className={reverse ? styles.icon : styles.inverseicon} />
          </a>
          <a href={props.link} target="_blank" rel="noreferrer">
            <ExternalLink
              className={reverse ? styles.icon : styles.inverseicon}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project

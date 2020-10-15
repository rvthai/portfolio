import React from "react"
import styles from "styles/project.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Project(props) {
  const imgRef = React.createRef()
  const textRef = React.createRef()
  const tagsRef = React.createRef()

  if ((props.index + 1) % 2 !== 0) {
    return (
      <div
        // data-sal="slide-up"
        // data-sal-delay="300"
        // data-sal-easing="ease"
        // data-sal-duration="500"
        id="project"
        className={
          props.index + 1 === 3 ? styles.lastcontainer : styles.container
        }
      >
        <Img
          className={styles.pic}
          imgStyle={{ objectFit: "contain" }}
          fluid={props.image}
        />
        <div ref={textRef} className={styles.text}>
          <p className={styles.tagline}>Featured Project</p>
          <p className={styles.title}>{props.title}</p>
          <p className={`${styles.description} paragraph`}>
            {props.description}
          </p>
          <div ref={tagsRef} className={styles.tags}>
            {props.tags.map((tag, index) => (
              <div key={index} className={styles.tag}>
                {tag}
              </div>
            ))}
          </div>
          <div className={styles.icons}>
            <a href={props.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className={styles.icon} icon={faGithub} />
            </a>
            <a href={props.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                className={styles.icon}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div id="project" className={styles.container}>
        <div ref={textRef} className={styles.inversetext}>
          <p className={styles.tagline}>Featured Project</p>
          <p className={styles.title}>{props.title}</p>
          <p className={`${styles.description} paragraph`}>
            {props.description}
          </p>
          <div ref={tagsRef} className={styles.inversetags}>
            {props.tags.map((tag, index) => (
              <div key={index} className={styles.inversetag}>
                {tag}
              </div>
            ))}
          </div>
          <div className={styles.inverseicons}>
            <a href={props.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className={styles.inverseicon} icon={faGithub} />
            </a>
            <a href={props.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                className={styles.inverseicon}
                icon={faExternalLinkAlt}
              />
            </a>
          </div>
        </div>
        <Img
          className={styles.inversepic}
          imgStyle={{ objectFit: "contain" }}
          fluid={props.image}
        />
      </div>
    )
  }
}

export default Project

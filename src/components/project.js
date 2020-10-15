import React, { useEffect, useRef } from "react"
import styles from "styles/project.module.css"
import sr from "utils/scroll-reveal"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Project(props) {
  const revealContainer = useRef(null)

  useEffect(() => {
    sr.reveal(revealContainer.current, { ...sr.config, delay: 300 })
  }, [])

  if ((props.index + 1) % 2 !== 0) {
    return (
      <div
        id="project"
        className={
          props.index + 1 === 3 ? styles.lastcontainer : styles.container
        }
        ref={revealContainer}
      >
        <Img
          className={styles.pic}
          imgStyle={{ objectFit: "contain" }}
          fluid={props.image}
        />
        <div className={styles.text}>
          <p className={styles.tagline}>Featured Project</p>
          <p className={styles.title}>{props.title}</p>
          <p className={`${styles.description} paragraph`}>
            {props.description}
          </p>
          <div className={styles.tags}>
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
      <div id="project" className={styles.container} ref={revealContainer}>
        <div className={styles.inversetext}>
          <p className={styles.tagline}>Featured Project</p>
          <p className={styles.title}>{props.title}</p>
          <p className={`${styles.description} paragraph`}>
            {props.description}
          </p>
          <div className={styles.inversetags}>
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

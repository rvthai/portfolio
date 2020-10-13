import React, { useEffect } from "react"
import styles from "styles/project.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Project(props) {
  const imgRef = React.createRef()
  const textRef = React.createRef()
  const tagsRef = React.createRef()
  const iconsRef = React.createRef()

  if ((props.index + 1) % 2 != 0) {
    return (
      <div id="project" className={styles.container}>
        <img
          ref={imgRef}
          className={styles.pic}
          src={require("../images/projects/" + props.image + ".png")}
          alt={props.image}
          width="400"
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
            <FontAwesomeIcon className={styles.icon} icon={faGithub} />
            <FontAwesomeIcon className={styles.icon} icon={faExternalLinkAlt} />
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
            <FontAwesomeIcon className={styles.inverseicon} icon={faGithub} />
            <FontAwesomeIcon
              className={styles.inverseicon}
              icon={faExternalLinkAlt}
            />
          </div>
        </div>
        <img
          ref={imgRef}
          className={styles.pic}
          src={require("../images/projects/" + props.image + ".png")}
          alt={props.image}
          width="400"
        />
      </div>
    )
  }
}

export default Project

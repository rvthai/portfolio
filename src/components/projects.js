import React from "react"
import styles from "../styles/projects.module.scss"

// Images
import Project1 from "../images/projects/pypwsafe.png"
import Project2 from "../images/projects/scrappy-cookbook.png"
import Project3 from "../images/projects/baucua-game.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowRight,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"

import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.heading}>
        <span className={styles.title}>
          <span style={{ color: "#f1bb52" }}>#</span> Some things I've built
        </span>
        <div className={styles.hr} />
      </div>
      <div className={styles.content}>
        <div className={styles.entry}>
          <div className={styles.projectpic}>
            <div className={styles.wrapper}>
              <img src={Project3} alt="baucua" className={styles.pic} />
            </div>
          </div>
          <div style={{ direction: "rtl" }} className={styles.projectdesc}>
            <span className={styles.projecttitle}>Bau Cua Ca Cop</span>
            <p style={{ marginBottom: "1rem", marginTop: "1rem" }}>
              A real-time online version of the vietnamese traidional game. Real
              time cause socket.io bitch.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>React.js</span>
              <span className={styles.tag}>Node.js</span>
              <span className={styles.tag}>Socket.io</span>
            </div>
            <div className={styles.icons}>
              <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              <FontAwesomeIcon
                className={styles.icon}
                icon={faExternalLinkAlt}
              />
            </div>
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.projectdesc}>
            <span>Scrappy Cookbook</span>
          </div>
          <div className={styles.projectpic}>
            <div className={styles.wrapper}>
              <img
                src={Project2}
                alt="scrappycookbook"
                className={styles.pic}
              />
            </div>
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.projectpic}>
            <div className={styles.wrapper}>
              <img src={Project1} alt="pypwsafe" className={styles.pic} />
            </div>
          </div>
          <div className={styles.projectdesc}>
            {" "}
            <span>Python Password Safe</span>
          </div>
        </div>
      </div>
      <span className={styles.view}>
        <div className={styles.linka}>View my GitHub for more projects </div>
        <FontAwesomeIcon className={styles.arrow} icon={faArrowRight} />
      </span>
    </div>
  )
}

export default Projects

import React from "react"
import styles from "styles/skills.module.css"

function Skills(props) {
  return (
    <div>
      <p className={styles.heading}>
        Some tools and technologies I've been working with are:
      </p>
      <div className={styles.lists}>
        <ul>
          {props.skillset_1.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <ul>
          {props.skillset_2.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skills

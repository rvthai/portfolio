import React from "react"
import styles from "../styles/skills.module.css"

function Skills() {
  return (
    <div id="skills">
      <p style={{ marginBottom: "1rem" }}>
        Some tools and technologies I've been working with are:
      </p>
      <div className={styles.lists}>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
        <ul>
          <li>HTML & CSS</li>
          <li>Python</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills

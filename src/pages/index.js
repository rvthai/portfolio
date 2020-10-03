import React from "react"

// Components
import Header from "../components/header"
import Hero from "../components/hero"
import About from "../components/about"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Contact from "../components/Contact"
import Footer from "../components/footer"
import Layout from "../components/layout"

function Main() {
  return (
    <div>
      <Header />
      <div className="main">
        <Hero />
      </div>
      {/* <Layout>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
      <Footer /> */}
    </div>
  )
}

export default Main

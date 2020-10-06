import React, { useEffect } from "react"

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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Header />
      <div className="main">
        <Hero />
        <Layout>
          <About />
          <Experience />
          <Projects />
        </Layout>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Main

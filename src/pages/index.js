import React from "react"

// Components
import Header from "../components/header"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Work from "../components/sections/work"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"
import Footer from "../components/footer"

function IndexPage() {
  return (
    <div>
      <Header />
      <div className="main">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage

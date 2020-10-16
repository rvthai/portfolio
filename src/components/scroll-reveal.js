import React from "react"

function ScrollReveal({ children }) {
  return (
    <div
      data-sal="slide-down"
      data-sal-delay="200"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      {children}
    </div>
  )
}

export default ScrollReveal

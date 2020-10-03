import React from "react"

function Layout({ children }) {
  return (
    <div
      style={{
        maxWidth: 900,
        border: "solid 1px white",
        padding: "100px 0",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  )
}

export default Layout

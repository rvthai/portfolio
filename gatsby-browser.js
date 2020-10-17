import "./src/styles/global-styles/global.css"

// Enable smooth scrolling to anchors
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

// Scroll back to anchor position on refresh/update
export const onRouteUpdate = ({ location }) => scrollToAnchor(location)
function scrollToAnchor(location, mainNavHeight = 0) {
  // Check for location so build does not fail
  if (location && location.hash) {
    const item = document.querySelector(`${location.hash}`).offsetTop

    window.scrollTo({
      top: item - mainNavHeight,
      behavior: "smooth",
    })
  } else {
    location.path = "/"
    window.scrollTo(0, 0)
  }

  return true
}

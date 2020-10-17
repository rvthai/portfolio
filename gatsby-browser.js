import "./src/styles/global-styles/global.css"

// Enable smooth scrolling to anchors
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

// Scroll back to top on refresh instead of last scroll position
export const onRouteUpdate = ({ location }) => scrollToTop(location)
function scrollToTop(location) {
  if (location && location.pathname === "/") {
    window.scrollTo(0, 0)
  }
}

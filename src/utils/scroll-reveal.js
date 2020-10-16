import ScrollReveal from "scrollreveal"

var sr = null
if (typeof window !== "undefined") {
  sr = ScrollReveal()

  sr.config = {
    origin: "top",
    duration: 1000,
    distance: "50px",
    scale: 1,
    easing: "ease",
    reset: false,
  }
}

export default sr
// const isSSR = typeof window === "undefined"
// const sr = isSSR ? null : ScrollReveal()

// sr.config = {
//   origin: "top",
//   duration: 1000,
//   distance: "50px",
//   scale: 1,
//   easing: "ease",
//   reset: false,
// }

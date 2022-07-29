/* ANIMATION TO THE TOP */
let scrollToTopBtn = document.getElementById("btnToTheTop");
let rootElement = document.documentElement;
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);


export default scrollToTop();
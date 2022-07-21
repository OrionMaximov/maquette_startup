/* ANIMATION SLIDER */
const sliderImg = document.querySelector("#slider>img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const urlIlmg = [
    "assets/img/mac.jpg",
    "assets/img/macbook-air-m2-2022-point-m1.jpeg",
    "assets/img/604682.jpeg",
    "assets/img/949282.jpeg"
];

// 1ère étape je déclare un index
let i = 0;
sliderImg.src = urlIlmg[i];
next.addEventListener(
    "click",
    function () {
        console.log(i);
        // 2ème étape: limité  index à la taille de mon tableau -1
        if (i === urlIlmg.length-1) {
            i = 0;
            sliderImg.src = urlIlmg[i];
        } else {
            // 3ème étape : j'incrémente mon index
        //i = i + 1;
        i++; // incrémentation
            // je dois réaffecter src avec la nouvelle valeur de index
            sliderImg.src = urlIlmg[i];
        }
    }
)
prev.addEventListener(
    "click",
    function () {
        console.log(i);
        if (i === 0){
            i = urlIlmg.length-1; 
            sliderImg.src = urlIlmg[i];
        } else {
        i--;
        sliderImg.src = urlIlmg[i];
        }
    }
)
setInterval(
    function(){
        console.log(i);
        if (i === urlIlmg.length-1) {
            i = 0;
            sliderImg.src = urlIlmg[i];
        } else {
        i++; 
            sliderImg.src = urlIlmg[i];
        }
    },
    3000
)

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





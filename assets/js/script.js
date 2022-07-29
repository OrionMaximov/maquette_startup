/* import  {zoom}  from "./lib/zoom";
import {show} from "./lib/scroll.js";
import {scrollToTop} from "./lib/scrollTop"; */

/* ANIMATION SLIDER */
const sliderImg = document.querySelector("#slider>img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const urlImg = [
    "assets/img/mac.jpg",
    "assets/img/macbook-air-m2-2022-point-m1.jpeg",
    "assets/img/604682.jpeg",
    "assets/img/949282.jpeg"
];

// 1ère étape je déclare un index
let i = 0;
sliderImg.src = urlImg[i];
next.addEventListener(
    "click",
    function () {
        console.log(i);
        // 2ème étape: limité  index à la taille de mon tableau -1
        if (i === urlImg.length-1) {
            i = 0;
            sliderImg.src = urlImg[i];
        } else {
            // 3ème étape : j'incrémente mon index
        //i = i + 1;
        i++; // incrémentation
            // je dois réaffecter src avec la nouvelle valeur de index
            sliderImg.src = urlImg[i];
        }
    }
)
prev.addEventListener(
    "click",
    function () {
        console.log(i);
        if (i === 0){
            i = urlImg.length-1; 
            sliderImg.src = urlImg[i];
        } else {
        i--;
        sliderImg.src = urlImg[i];
        }
    }
)
setInterval(
    function(){
        console.log(i);
        if (i === urlIlmg.length-1) {
            i = 0;
            sliderImg.src = urlImg[i];
        } else {
        i++; 
            sliderImg.src = urlImg[i];
        }
    },
    3000
)

/* scrollToTop();
show();
zoom();
 */

import anime from "../node_modules/animejs/lib/anime.es.js";

// Animare on scroll
AOS.init();

// anime js
document.addEventListener("DOMContentLoaded", () => {
  const progress = document.querySelectorAll(".progress");
  const services = document.querySelector(".services").getBoundingClientRect();

  window.onscroll = () => {
    if (window.scrollY >= services.top) {
      anime({
        targets: ".progress",
        width: [
          "0%",
          (el, li, i) => {
            return el.getAttribute("data-perc");
          }
        ],
        duration: 2500,
        delay: anime.stagger(200),
        easing: "easeOutElastic(1, .8)"
      });
    }
  };
});

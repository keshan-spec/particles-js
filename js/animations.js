
// Animare on scroll
AOS.init();

// anime js
document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelector(".services").getBoundingClientRect();

  window.onscroll = () => {
    // console.log(services.height);
    console.log(Math.round(window.scrollY), services.top);

    let offset = services.top + 100;
    console.log(offset);
    if (Math.round(window.scrollY) >= offset) {
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



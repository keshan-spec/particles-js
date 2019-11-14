// loader
const DOM = document.body;
window.addEventListener("load", function() {
  // Animate loader off screen
  var loader = document.querySelector(".loader");
  loader.setAttribute("data-aos", "fade-up");
  // DOM.removeChild(document.querySelector(".loader"));
});

// Header
navbar = document.querySelector(".navbar");
nav_bound = navbar.getBoundingClientRect();
window.addEventListener("scroll", e => {
  last_known_scroll_position = window.scrollY;
  if (last_known_scroll_position > nav_bound.height) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
// end header

// particles
var partJson = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "random"
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 11
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: false
};
var jsonUri = "data:text/plain;base64," + window.btoa(JSON.stringify(partJson));

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", jsonUri, function() {
  console.log("callback - particles.js config loaded");
});

// end particles

// carousel slink js
$(document).ready(function() {
  $(".regular").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true
  });
});
// end carousel

// Animare on scroll
AOS.init();

"use strict";
let gallery = document.querySelectorAll(".gallery-img");
for (let i = 0; i < gallery.length; i++) {
  gallery[i].addEventListener("mouseover", (target) => {
    gallery.forEach((x) => {
      x.classList.toggle("blur");
    });
    gallery[i].classList.toggle("blur");
  });
  gallery[i].addEventListener("mouseout", (target) => {
    gallery.forEach((x) => {
      x.classList.remove("blur");
    });
  });
}

let openMenuButton = document.querySelector(".open-menu-btn");
let closeMenuButton = document.querySelector(".close-menu-btn");
let navigationBar = document.querySelector(".navigation-bar");
let htmlBody = document.querySelector("body");

openMenuButton.addEventListener("click", () => {
  navigationBar.classList.add("nav-open");
  htmlBody.classList.add("nav-open");
});
closeMenuButton.addEventListener("click", () => {
  navigationBar.classList.remove("nav-open");
  htmlBody.classList.remove("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (navigationBar.classList.contains("nav-open")) {
      navigationBar.classList.remove("nav-open");
      htmlBody.classList.remove("nav-open");
    }
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (href !== "#" && href.startsWith("#")) {
      let sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// STICKY NAVIGATION
let heroSectionEl = document.querySelector(".section-hero");
let obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      htmlBody.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      htmlBody.classList.remove("sticky");
    }
  },
  { root: null, threshold: 0, rootMargin: "-80px" }
);
obs.observe(heroSectionEl);

// fixing flexbox gap in safari

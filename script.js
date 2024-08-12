console.log(window.innerWidth);

const hamMenuBtn = document.querySelector(".ham-menu__btn");
const mobileMenu = document.querySelector(".mobile-navMenu");
const hamBtn = document.querySelector(".ham-menu__btn");
const mobileLinks = document.querySelectorAll(".mobile-links");
const darkLightBtn = document.querySelectorAll(".dark-light-toggle");

//state
let theme = localStorage.getItem("theme");

//on mount
theme && document.body.classList.add(theme);

// ---side menu--------------

let isSideMenuOpen = false;

hamMenuBtn.addEventListener("click", () => {
  if (!isSideMenuOpen) {
    mobileMenu.style.display = "flex";
    document.body.style.overflowY = "hidden";
    isSideMenuOpen = !isSideMenuOpen;
  } else {
    mobileMenu.style.display = "none";
    document.body.style.overflowY = "auto";
    isSideMenuOpen = !isSideMenuOpen;
  }
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    isSideMenuOpen = !isSideMenuOpen;
    mobileMenu.style.display = "none";
    document.body.style.overflowY = "auto";
  });
});

// -------dark mode---------------
//event handling
darkLightBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute("class");
    }
  });
});

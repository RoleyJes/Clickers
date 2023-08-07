"use strict";

const mobileNav = document.querySelector("#mobileNav");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");

openMenu.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
});

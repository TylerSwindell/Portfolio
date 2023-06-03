"use-strict";
import { toggleNav } from "./supportFunctions.js";
import { renderProjectSection } from "./sections/projects.js";

// Query Selectors
const navButton = document.querySelector(".hamburger-icon");
const exitButton = document.querySelector(".exit-icon");
const mainNavLinks = document.querySelectorAll("#main-navigation>ul>li");

// Event Listeners
navButton.addEventListener("click", toggleNav);
exitButton.addEventListener("click", toggleNav);
mainNavLinks.forEach((item) => item.addEventListener("click", toggleNav));

// Keydown events on site
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "Escape":
      toggleNav();
      break;
    default:
      console.log(e);
      break;
  }
});

// Main Function
(() => {
  renderProjectSection();
})();

console.log("Script Loaded");

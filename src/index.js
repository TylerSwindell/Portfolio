"use-strict";
import { renderProjectSection } from "./sections/projects.js";
import initializeEventListeners from "./eventListeners.js";
import { devLog } from "./supportFunctions.js";
import initializeSlideshow from "./slideshow.js";

// Main Function
(() => {
  initializeEventListeners();
  initializeSlideshow();
  //renderProjectSection();
})();

devLog("Script Loaded");

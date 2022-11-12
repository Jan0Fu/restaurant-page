/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome() {
    const main = document.createElement("main");
  
    const section = document.createElement("section");
    section.classList.add("home");
    main.appendChild(section);
  
    const headline = document.createElement("h2");
    headline.textContent = "Life should be ENJOYED!";
    section.appendChild(headline);
  
    const textContainer = document.createElement("div");
    textContainer.classList.add("home-text");
    section.appendChild(textContainer);
  
    const firstPara = document.createElement("p");
    firstPara.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec dapibus, justo sit amet sagittis varius, dui augue mollis turpis, ut.`;
    textContainer.appendChild(firstPara);
  
    const secondPara = document.createElement("p");
    secondPara.textContent = `In non nisi sit amet tortor vehicula imperdiet. 
    Suspendisse fermentum lorem in magna ullamcorper lobortis. Etiam aliquam auctor diam vitae pharetra. In facilisis malesuada urna ut sodales. 
    Pellentesque at scelerisque leo. Proin dapibus ac.`;
    textContainer.appendChild(secondPara);
  
    const thirdPara = document.createElement("p");
    thirdPara.textContent = `"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."`;
    textContainer.appendChild(thirdPara);
  
    const sidebar = document.createElement("div");
    sidebar.classList.add("left-sidebar");
    sidebar.classList.add("sidebar");
    main.appendChild(sidebar);
  
    const bakery = document.createElement("img");
    bakery.src = "images/restaurant.jpg";
    sidebar.appendChild(bakery);
  
    return main;
}
  
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

//import createHeader from './header';

const mainContent = document.querySelector("#content");

//mainContent.appendChild(createHeader());
mainContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
})();

/******/ })()
;
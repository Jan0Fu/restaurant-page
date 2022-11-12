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

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHR() {
    return document.createElement("hr");
}
  
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHR);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader() {
    const header = document.createElement("header");
    const container = document.createElement("div");
    container.classList.add("header-container");
    header.appendChild(container);

    const title = document.createElement("h1");
    container.appendChild(title);

    const logo = document.createElement("img");
    logo.id = "logo";
    logo.src = "images/logo.png";
    logo.alt = "restaurant logo";
    title.appendChild(logo);

    const nav = document.createElement("nav");
    nav.classList.add("tabs"); 
    for (let i = 1; i <= 3; i++) {
        let tab = document.createElement("div");
        tab.classList.add("tab");
    
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "tabgroup";
        input.id = `tab-${i}`;
        if (i == 1) input.checked = true;
    
        let label = document.createElement("label");
        label.htmlFor = `tab-${i}`;
        if (i == 1) label.textContent = "Home";
        if (i == 2) label.textContent = "Menu";
        if (i == 3) label.textContent = "Contact";
    
        tab.appendChild(input);
        tab.appendChild(label);
        nav.appendChild(tab);
    }
    container.appendChild(nav);
    return header;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
    const main = document.createElement("main");

    const menu = document.createElement("section");
    menu.classList.add("menu");
    main.appendChild(menu);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("menu-title");
    menu.appendChild(titleDiv);

    const title = document.createElement("h2");
    title.textContent = "Menu";
    titleDiv.appendChild(title);
    const textDiv = document.createElement("div");
    textDiv.classList.add("menu-text");

    for (let i = 1; i <= 5; i++) {
        const row = document.createElement("div");
        row.classList.add("menu-row");

        const course = document.createElement("h4");
        row.appendChild(course);

        const firstProp = document.createElement("p");
        const secondProp = document.createElement("p");
        row.appendChild(firstProp);
        row.appendChild(secondProp);

        if (i == 1) {
            course.textContent = "Appetizers";
            firstProp.textContent = "Steak Tartare";
            secondProp.textContent = "Bruschettas with Tomato and Basil";
    }   else if (i == 2) {
            course.textContent = "Soups";
            firstProp.textContent = "Minestrone";
            secondProp.textContent = "Classic Chicken Noodle Soup";
    }   else if (i == 3) {
            course.textContent = "Main Course";
            firstProp.textContent = "Baked Salmon with a Pistachio, Honey and Herb Crust";
            secondProp.textContent = "Chicken and Pancetta Cooked in Beer";
    }   else if (i == 4) {
            course.textContent = "Dessert";
            firstProp.textContent = "Panna Cotta";
            secondProp.textContent = "Creme Brulee";
    }   else if (i == 5) {
            course.textContent = "Season Wines";
            firstProp.textContent = "Chianti";
            secondProp.textContent = "Barolo";
    }
        textDiv.appendChild(row);
        menu.appendChild(textDiv);
  }
  return main;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact() {
    const main = document.createElement("main");
  
    const contact = document.createElement("section");
    contact.classList.add("contact");
    main.appendChild(contact);
  
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("contact-title");
    contact.appendChild(titleDiv);
  
    const title = document.createElement("h2");
    title.textContent = "Contact";
    titleDiv.appendChild(title);
  
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    contact.appendChild(contactContainer);
  
    const textDiv = document.createElement("div");
    textDiv.classList.add("contact-text");
  
    const company = document.createElement("h3");
    company.textContent = "Restaurant";
    textDiv.appendChild(company);
  
    for (let i = 0; i < 6; i++) {
      const para = document.createElement("p");
  
      switch (i) {
        case 0:
          para.textContent = "Novozámocká 84";
          break;
        case 1:
          para.textContent = "Bratislava, 81101";
          break;
        case 2:
          para.textContent = "(000)-123 4567";
          break;
        case 3:
          para.textContent = "rrrestaurant@gmail.com";
          break;
        case 4:
          para.textContent = "Monday-Thursday: 10am - 9pm";
          break;
        case 5:
          para.textContent = "Friday-Sunday: 10am - 12pm";
          break;
        default:
          console.log(`error`);
      }
      textDiv.appendChild(para);
    }
    contactContainer.appendChild(textDiv);
    return main;
}
  
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

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
/* harmony import */ var _rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);







const mainContent = document.querySelector("#content");

mainContent.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_2__["default"])());
mainContent.appendChild((0,_rule__WEBPACK_IMPORTED_MODULE_1__["default"])());
mainContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
mainContent.appendChild((0,_rule__WEBPACK_IMPORTED_MODULE_1__["default"])());


const navigationTabs = document.querySelectorAll(".tab");

navigationTabs.forEach(tab => tab.addEventListener("click", (event) => {
    // remove main html tag from page and append new node after first hr tag
    if (event.target.htmlFor === "tab-1" && !document.querySelector("section").classList.contains("home")) {
        document.querySelector("main").remove();
        document.querySelector("hr").after((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
    } else if (event.target.htmlFor === "tab-2" && !document.querySelector("section").classList.contains("menu")) {
        document.querySelector("main").remove();
        document.querySelector("hr").after((0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])());
    } else if (event.target.htmlFor === "tab-3" && !document.querySelector("section").classList.contains("contact")) {
        document.querySelector("main").remove();
        document.querySelector("hr").after((0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])());
    }
}))
})();

/******/ })()
;
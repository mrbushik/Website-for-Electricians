/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_callsModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/callsModal */ \"./modules/callsModal.js\");\n/* harmony import */ var _modules_pageOrientation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pageOrientation */ \"./modules/pageOrientation.js\");\n\r\n\r\n(0,_modules_callsModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_pageOrientation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/callsModal.js":
/*!*******************************!*\
  !*** ./modules/callsModal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst callsModal = () => {\r\n    const orderCallBtn = document.querySelectorAll('.callback-btn ');\r\n    const modal = document.querySelector('.modal-callback ');\r\n    const modalOverlay = document.querySelector('.modal-overlay');\r\n    const close = document.querySelector('.modal-close');\r\n\r\n\r\n    orderCallBtn[1].addEventListener('click', () => {\r\n        modal.style.display = 'block';\r\n        modalOverlay.style.display = 'block';\r\n\r\n    });\r\n    modal.addEventListener('click', () => {\r\n        modal.style.display = 'none';\r\n        modalOverlay.style.display = 'none';\r\n    });\r\n    modalOverlay.addEventListener('click', () => {\r\n        modal.style.display = 'none';\r\n        modalOverlay.style.display = 'none';\r\n    });\r\n\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callsModal);\n\n//# sourceURL=webpack:///./modules/callsModal.js?");

/***/ }),

/***/ "./modules/pageOrientation.js":
/*!************************************!*\
  !*** ./modules/pageOrientation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageOrientation = () => {\r\n    const menuItem = document.querySelector('.top-menu');\r\n    const menuLink = menuItem.querySelectorAll('a');\r\n    const toUpBtn = document.querySelector('.up');\r\n\r\n\r\n    //header link\r\n    menuLink[0].addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        window.scrollTo(0, 550);\r\n    });\r\n    menuLink[1].addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        window.scrollTo(0, 3525);\r\n    });\r\n    menuLink[2].addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        window.scrollTo(0, 4045);\r\n    });\r\n\r\n\r\n    //up btn \r\n    window.addEventListener('scroll', () => {\r\n        if (window.pageYOffset < 350) {\r\n            toUpBtn.style.display = 'none';\r\n        }\r\n        if (window.pageYOffset > 350) {\r\n            toUpBtn.style.display = 'block';\r\n        }\r\n\r\n    });\r\n    // smoothScroll\r\n    toUpBtn.addEventListener('click', () => {\r\n\r\n        const timeToUp = setInterval(() => {\r\n            let currentPagePosition = window.pageYOffset;\r\n            let position = currentPagePosition - 50;\r\n            window.scrollTo(0, position);\r\n            if (currentPagePosition <= 0) {\r\n                clearInterval(timeToUp);\r\n                console.log('end');\r\n            }\r\n        }, 10);\r\n\r\n    });\r\n\r\n\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageOrientation);\n\n//# sourceURL=webpack:///./modules/pageOrientation.js?");

/***/ })

/******/ 	});
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
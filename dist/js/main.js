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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_callsModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/callsModal */ \"./modules/callsModal.js\");\n/* harmony import */ var _modules_pageOrientation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pageOrientation */ \"./modules/pageOrientation.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/swiper */ \"./modules/swiper.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_callsModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_pageOrientation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_swiper__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\r\n    const accordeonList = document.querySelector('.accordeon');\r\n    const questionItem = document.querySelectorAll('.question__item');\r\n    const questionItemContent = document.querySelectorAll('.question__item-content');\r\n\r\n\r\n    accordeonList.addEventListener('click', (e) => {\r\n\r\n        if (e.target.closest('.question__item')) {\r\n            const targetBtn = e.target.closest('.question__item');\r\n            questionItemContent.forEach((textElem, index) => {\r\n                textElem.style.display = 'none';\r\n            });\r\n\r\n            questionItem.forEach((element, index) => {\r\n\r\n                if (element === targetBtn) {\r\n                    element.classList.add('active');\r\n                    questionItemContent[index].style.display = 'block';\r\n\r\n                } else {\r\n                    element.classList.remove('active');\r\n                }\r\n\r\n            });\r\n\r\n        }\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/callsModal.js":
/*!*******************************!*\
  !*** ./modules/callsModal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst callsModal = () => {\r\n    const orderCallBtn = document.querySelectorAll('.callback-btn ');\r\n    const modal = document.querySelector('.modal-callback ');\r\n    const modalOverlay = document.querySelector('.modal-overlay');\r\n    const close = document.querySelector('.modal-close');\r\n    const helpBtn = document.querySelector('.button-services');\r\n    const repairItem = document.querySelectorAll('.repair__item');\r\n\r\n    orderCallBtn[1].addEventListener('click', () => {\r\n        modal.style.display = 'block';\r\n        modalOverlay.style.display = 'block';\r\n\r\n    });\r\n\r\n    close.addEventListener('click', () => {\r\n        modal.style.display = 'none';\r\n        modalOverlay.style.display = 'none';\r\n    });\r\n\r\n    modalOverlay.addEventListener('click', () => {\r\n        modal.style.display = 'none';\r\n        modalOverlay.style.display = 'none';\r\n    });\r\n\r\n    //task 5\r\n    repairItem.forEach((item) => {\r\n        item.addEventListener('click', () => {\r\n            modal.style.display = 'block';\r\n            modalOverlay.style.display = 'block';\r\n        });\r\n    });\r\n\r\n    //task 6 \r\n    helpBtn.addEventListener('click', () => {\r\n        modal.style.display = 'block';\r\n        modalOverlay.style.display = 'block';\r\n    });\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callsModal);\n\n//# sourceURL=webpack:///./modules/callsModal.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst modal = () => {\r\n    let counter = 0;\r\n    const name = document.querySelector('.input__name');\r\n    const phone = document.querySelector('.input__phone');\r\n    const form = document.querySelector('.lead__form');\r\n\r\n    const statusBlock = document.createElement('div');\r\n    statusBlock.className = 'statusBlock';\r\n    statusBlock.style.color = 'black';\r\n\r\n    const loadText = 'загрузка...';\r\n    const errorText = 'Ошибка...';\r\n    const successText = 'Спасибо, наш менеджер с вами свяжется';\r\n\r\n\r\n    name.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-Я]/, '');\r\n        if (counter >= 1 && e.target.value.length >= 2) {\r\n            name.classList.remove('error');\r\n\r\n        }\r\n    });\r\n\r\n    phone.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\d\\+]/, '');\r\n\r\n        if (counter >= 1 && e.target.value.length > 16) {\r\n\r\n            phone.classList.add('error');\r\n        } else if (counter >= 1 && e.target.value.length >= 4) {\r\n            phone.classList.remove('error');\r\n\r\n        }\r\n    });\r\n\r\n    const deleteStatusBlock = () => {\r\n        statusBlock.textContent = '';\r\n    };\r\n\r\n    const validate = (list) => {\r\n        name.value.trim();\r\n        let success = true;\r\n        list.forEach((input) => {\r\n            //   if (!input.classList.contains('success')) {\r\n            if (name.value.length < 2) {\r\n                success = false;\r\n\r\n\r\n                //проверка на количество цифр в номере\r\n            } else if (phone.value.length < 4 || phone.value.length > 16) {\r\n                success = false;\r\n\r\n\r\n            }\r\n        });\r\n        return success;\r\n    };\r\n\r\n    const sendData = (data) => {\r\n        return fetch(' https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            }\r\n        }).then(res => res.json());\r\n    };\r\n\r\n    const submitForm = () => {\r\n\r\n        statusBlock.textContent = loadText;\r\n        form.append(statusBlock);\r\n        const formDate = new FormData(form);\r\n        const formBody = {};\r\n        const formElements = form.querySelectorAll('input');\r\n\r\n        formDate.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        });\r\n\r\n        if (validate(formElements)) {\r\n\r\n            sendData(formBody)\r\n                .then(data => {\r\n\r\n                    statusBlock.textContent = successText;\r\n                    setTimeout(deleteStatusBlock, 3000);\r\n                    counter = 0;\r\n                    formElements.forEach(input => {\r\n                        input.value = '';\r\n                    });\r\n                })\r\n\r\n                .catch(error => {\r\n                    statusBlock.textContent = errorText;\r\n                });\r\n\r\n        } else {\r\n            statusBlock.textContent = errorText;\r\n            setTimeout(deleteStatusBlock, 3000);\r\n\r\n            if (phone.value.length < 4 || phone.value.length > 16) {\r\n                phone.classList.add('error');\r\n            }\r\n\r\n            if (name.value.length < 2) {\r\n                name.classList.add('error');\r\n\r\n            }\r\n\r\n        }\r\n    };\r\n    try {\r\n        if (!form) {\r\n            throw new Error('добавьте элемент');\r\n        }\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n            submitForm();\r\n            counter++;\r\n        });\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/pageOrientation.js":
/*!************************************!*\
  !*** ./modules/pageOrientation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageOrientation = () => {\r\n    const menuItem = document.querySelector('.top-menu');\r\n    const menuLink = menuItem.querySelectorAll('a');\r\n    const toUpBtn = document.querySelector('.up');\r\n\r\n\r\n    //animation function\r\n    const animationTransition = (target) => {\r\n        let currentPagePosition = window.pageYOffset;\r\n        if (currentPagePosition < target) {\r\n            let stop = target - 50;\r\n            const timeToUp = setInterval(() => {\r\n                let currentPagePosition = window.pageYOffset;\r\n                let position = currentPagePosition + 50;\r\n                window.scrollTo(0, position);\r\n                if (currentPagePosition > stop) {\r\n                    clearInterval(timeToUp);\r\n                }\r\n            }, 10);\r\n        }\r\n        if (currentPagePosition > target) {\r\n            const timeToUp = setInterval(() => {\r\n                let currentPagePosition = window.pageYOffset;\r\n                let position = currentPagePosition - 50;\r\n                window.scrollTo(0, position);\r\n                if (currentPagePosition <= target) {\r\n                    clearInterval(timeToUp);\r\n                }\r\n            }, 10);\r\n        }\r\n    };\r\n\r\n    //header link\r\n    menuLink[0].addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        animationTransition(550);\r\n\r\n    });\r\n    menuLink[1].addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        animationTransition(3025);\r\n    });\r\n    menuLink[2].addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        animationTransition(3350);\r\n    });\r\n\r\n\r\n    //up btn \r\n    window.addEventListener('scroll', () => {\r\n        if (window.pageYOffset < 350) {\r\n            toUpBtn.style.display = 'none';\r\n        }\r\n        if (window.pageYOffset > 350) {\r\n            toUpBtn.style.display = 'block';\r\n        }\r\n\r\n    });\r\n    // smoothScroll\r\n    toUpBtn.addEventListener('click', () => {\r\n\r\n        animationTransition(0);\r\n\r\n    });\r\n\r\n\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageOrientation);\n\n//# sourceURL=webpack:///./modules/pageOrientation.js?");

/***/ }),

/***/ "./modules/swiper.js":
/*!***************************!*\
  !*** ./modules/swiper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst swiper = () => {\r\n    const slideItem = document.querySelectorAll('.slide__item');\r\n    const slideText = document.querySelectorAll('.table');\r\n\r\n    let count = 1;\r\n\r\n    slideItem[0].style.display = 'block';\r\n    slideText[0].classList.add('active');\r\n\r\n    const timer = setInterval(() => {\r\n        count++;\r\n        if (count == 1) {\r\n            slideItem[2].style.display = 'none';\r\n            slideItem[0].style.display = 'block';\r\n            slideText[0].classList.add('active');\r\n            slideText[2].classList.remove('active');\r\n\r\n        }\r\n        if (count == 2) {\r\n            slideItem[0].style.display = 'none';\r\n            slideItem[1].style.display = 'block';\r\n            slideText[1].classList.add('active');\r\n            slideText[0].classList.remove('active');\r\n\r\n        }\r\n        if (count == 3) {\r\n            slideItem[1].style.display = 'none';\r\n            slideItem[2].style.display = 'block';\r\n            slideText[2].classList.add('active');\r\n            slideText[1].classList.remove('active');\r\n\r\n            count = 0;\r\n        }\r\n    }, 3000);\r\n\r\n\r\n    const swiper2 = new Swiper(\".mySwiper2\", {\r\n\r\n        slidesPerView: 'auto',\r\n        spaceBetween: 30,\r\n\r\n        navigation: {\r\n            nextEl: \".arrow-right\",\r\n            prevEl: \".arrow-left\",\r\n        },\r\n\r\n    });\r\n\r\n\r\n\r\n\r\n\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiper);\n\n//# sourceURL=webpack:///./modules/swiper.js?");

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
"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3DGlo"]("main",{

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popUpContent = document.querySelector('.popup-content');\n  var count = 0;\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n  var flyInterval;\n\n  var modalWindow = function modalWindow() {\n    flyInterval = requestAnimationFrame(modalWindow);\n    count++;\n\n    if (count < 50) {\n      popUpContent.style.left = count + '%';\n    } else {\n      cancelAnimationFrame(flyInterval);\n    }\n\n    if (popup.clientWidth < 768) {\n      cancelAnimationFrame(flyInterval);\n    }\n  };\n\n  document.addEventListener('click', function () {\n    flyInterval = requestAnimationFrame(modalWindow);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://3DGlo/./src/modules/togglePopUp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c6ed7f47c9201faffd8f")
/******/ })();
/******/ 
/******/ }
);
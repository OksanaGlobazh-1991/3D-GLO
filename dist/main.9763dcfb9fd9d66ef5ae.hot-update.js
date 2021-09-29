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

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu'); // тег меню, в нем закрытие и список\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('a')) {\n      menu.style.transform = \"translate(-100%)\";\n    }\n\n    if (target.closest('main')) {\n      menu.style.transform = \"translate(-100%)\";\n    }\n\n    if (target.closest('.menu')) {\n      if (!menu.style.transform || menu.style.transform === \"translate(-100%)\") {\n        menu.style.transform = \"translate(0)\";\n        menu.classList.toggle('active-menu');\n      } else {\n        menu.style.transform = \"translate(-100%)\";\n      }\n    }\n\n    if (!target) {\n      menu.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3DGlo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/valide.js":
/*!*******************************!*\
  !*** ./src/modules/valide.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar valide = function valide() {\n  var commandPhoto = document.querySelectorAll('.command__photo');\n  commandPhoto.forEach(function (item) {\n    var photo;\n    item.addEventListener('mouseover', function (event) {\n      photo = event.target.src;\n      event.target.src = event.target.dataset.img;\n    });\n    item.addEventListener('mouseout', function (event) {\n      event.target.src = photo;\n    });\n  });\n  var formName = document.querySelectorAll('input[name=\"user_name\"]');\n  formName.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^а-яё ]+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[^а-яё\\ ]+/gi, '');\n      item.value = item.value.trim();\n      item.value = item.value.replace(/\\s+/g, ' ');\n      item.value = item.value.charAt(0).toUpperCase() + item.value.slice(1);\n    });\n  });\n  var formMessage = document.getElementById('form2-message');\n  formMessage.addEventListener('input', function () {\n    formMessage.value = formMessage.value.replace(/[^?!,.а-яА-ЯёЁ0-9\\s]+/g, '');\n  });\n  formMessage.addEventListener('blur', function () {\n    formMessage.value = formMessage.value.replace(/[^\\?\\!\\,\\.\\а-яА-ЯёЁ0-9\\s]+/gi, '');\n    formMessage.value = formMessage.value.trim();\n    formMessage.value = formMessage.value.replace(/\\s+/g, ' ');\n  });\n  var formEmail = document.querySelectorAll('.form-email');\n  formEmail.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^a-z-@_.!~*']+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[^a-z\\-\\@\\_\\.\\!\\~\\*\\']+/gi, '');\n      item.value = item.value.trim();\n      item.value = item.value.replace(/\\s+/g, '');\n    });\n  });\n  var formPhone = document.querySelectorAll('.form-phone');\n  formPhone.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^0-9+]+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[^0-9\\+]+/gi, '');\n      item.value = item.value.trim();\n      item.value = item.value.replace(/\\s+/g, ' ');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valide);\n\n//# sourceURL=webpack://3DGlo/./src/modules/valide.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1864a3b22949a1d66a4d")
/******/ })();
/******/ 
/******/ }
);
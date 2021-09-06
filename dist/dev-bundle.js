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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_valide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/valide */ \"./src/modules/valide.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n //Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('10 september 2021'); //menu\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); //popup\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); //табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); //пишем слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); //валидация\n\n(0,_modules_valide__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); //калькулятор\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100); //send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n//# sourceURL=webpack://3DGlo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      input = calcBlock.querySelectorAll('input'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    totalValue.textContent = total;\n  };\n\n  input.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^0-9]/g, '');\n    });\n  });\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3DGlo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  var idInterval = 0;\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n    timerHours.textContent = timer.hours;\n\n    if (timer.hours > 0 && timer.hours < 10) {\n      timerHours.textContent = '0' + timer.hours;\n    }\n\n    timerMinutes.textContent = timer.minutes;\n\n    if (timer.minutes > 0 && timer.minutes < 10) {\n      timerMinutes.textContent = '0' + timer.minutes;\n    }\n\n    timerSeconds.textContent = timer.seconds;\n\n    if (timer.seconds > 0 && timer.seconds < 10) {\n      timerSeconds.textContent = '0' + timer.seconds;\n    }\n\n    if (timer.timeRemaining < 0) {\n      clearInterval(idInterval);\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n  }\n\n  idInterval = setInterval(updateClock, 1000);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3DGlo/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';\n  var forms = document.querySelectorAll('form');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem;';\n  forms.forEach(function (item) {\n    item.addEventListener('submit', function (event) {\n      event.preventDefault();\n      item.appendChild(statusMessage);\n      statusMessage.textContent = loadMessage;\n      var formData = new FormData(item); // const body = {};\n      // for (const val of formData.entries()) {\n      //     body[val[0]] = val[1];\n      // }\n\n      postData(formData).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('status network not 200');\n        }\n\n        statusMessage.textContent = successMessage;\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n      });\n\n      _toConsumableArray(item).forEach(function (input) {\n        input.value = '';\n      });\n    });\n  });\n\n  var postData = function postData(formData) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: formData,\n      credentials: 'include'\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3DGlo/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      // btn = document.querySelectorAll('.portfolio-btn'),\n  slider = document.querySelector('.portfolio-content');\n\n  var newElem = function newElem() {\n    var portfolioDots = document.querySelector('.portfolio-dots');\n    slide.forEach(function (item, i) {\n      item = document.createElement('li');\n      item.className = 'dot';\n\n      if (i === 0) {\n        item = document.createElement('li');\n        item.className = 'dot dot-active';\n      }\n\n      portfolioDots.append(item);\n    }); // let dot = document.querySelectorAll('.dot');\n  };\n\n  newElem();\n  var dot = document.querySelectorAll('.dot');\n  var currentSlide = 0,\n      //номер слайда\n  interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3DGlo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3DGlo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var btnMenu = document.querySelector('.menu'),\n      // сама кнопка 2\n  menu = document.querySelector('menu'); // тег меню, в нем закрытие и список\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('menu')) {\n      menu.style.transform = \"translate(-100%)\";\n    }\n\n    if (target.closest('.menu')) {\n      if (!menu.style.transform || menu.style.transform === \"translate(-100%)\") {\n        menu.style.transform = \"translate(0)\";\n        menu.classList.toggle('active-menu');\n      } else {\n        menu.style.transform = \"translate(-100%)\";\n      }\n    }\n\n    if (!target) {\n      menu.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3DGlo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popUpContent = document.querySelector('.popup-content');\n  var count = 0;\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n  var flyInterval;\n\n  var modalWindow = function modalWindow() {\n    flyInterval = requestAnimationFrame(modalWindow);\n    count++;\n\n    if (count < 200) {\n      popUpContent.style.left = count * 5 + 'px';\n    } else {\n      cancelAnimationFrame(flyInterval);\n    }\n\n    if (document.documentElement.clientWidth < 768) {\n      cancelAnimationFrame(flyInterval);\n    }\n  };\n\n  document.addEventListener('click', function () {\n    flyInterval = requestAnimationFrame(modalWindow);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://3DGlo/./src/modules/togglePopUp.js?");

/***/ }),

/***/ "./src/modules/valide.js":
/*!*******************************!*\
  !*** ./src/modules/valide.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar valide = function valide() {\n  var commandPhoto = document.querySelectorAll('.command__photo');\n  commandPhoto.forEach(function (item) {\n    var photo;\n    item.addEventListener('mouseover', function (event) {\n      photo = event.target.src;\n      event.target.src = event.target.dataset.img;\n    });\n    item.addEventListener('mouseout', function (event) {\n      event.target.src = photo;\n    });\n  });\n  var formName = document.querySelectorAll('input[name=\"user_name\"]');\n  formName.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^а-яё ]+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[^а-яё\\ ]+/gi, '');\n      item.value = item.value.trim();\n      item.value = item.value.replace(/\\s+/g, ' ');\n      item.value = item.value.charAt(0).toUpperCase() + item.value.slice(1);\n    });\n  });\n  var formMessage = document.getElementById('form2-message');\n  formMessage.addEventListener('input', function () {\n    formMessage.value = formMessage.value.replace(/[^?!,.а-яА-ЯёЁ0-9\\s]+/g, '');\n  });\n  formMessage.addEventListener('blur', function () {\n    formMessage.value = formMessage.value.replace(/[^\\?\\!\\,\\.\\а-яА-ЯёЁ0-9\\s]+/gi, '');\n    formMessage.value = formMessage.value.trim();\n    formMessage.value = formMessage.value.replace(/\\s+/g, ' ');\n  });\n  var formEmail = document.querySelectorAll('.form-email');\n  formEmail.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^a-z-@_.!~*']+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[^a-z\\-\\@\\_\\.\\!\\~\\*\\']+/gi, '');\n      item.value = item.value.trim();\n      item.value = item.value.replace(/\\s+/g, ' ');\n    });\n  });\n  var formPhone = document.querySelectorAll('.form-phone');\n  formPhone.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^0-9+]+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[^0-9\\+]+/gi, '');\n      item.value = item.value.trim();\n      item.value = item.value.replace(/\\s+/g, ' ');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valide);\n\n//# sourceURL=webpack://3DGlo/./src/modules/valide.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const menu = document.getElementByID('dropdown-menu');\nmenu.classList.toggle('show');\n\nconst button = document.getElementById('dropdown-button');\nbutton.addEventListener('click', () => {\n    const dropdownContent = document.getElementById('dropdown-content');\n    for (let i = 0; i < dropdownContent.length; i++) {\n        const dropdown = dropdownContent[i];\n        if (dropdown.classList.contains('show')) {\n            dropdown.classList.remove('show')\n        }\n    }\n})\n\n\n\n//# sourceURL=webpack://drop-down-menu/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
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

/***/ "./src/components/add.ts":
/*!*******************************!*\
  !*** ./src/components/add.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nfunction add(a, b) {\n  return a + b;\n}\nexports[\"default\"] = add;\n\n//# sourceURL=webpack://2023.06.01/./src/components/add.ts?");

/***/ }),

/***/ "./src/components/divide.ts":
/*!**********************************!*\
  !*** ./src/components/divide.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nfunction divide(a, b) {\n  return a / b;\n}\nexports[\"default\"] = divide;\n\n//# sourceURL=webpack://2023.06.01/./src/components/divide.ts?");

/***/ }),

/***/ "./src/components/multiply.ts":
/*!************************************!*\
  !*** ./src/components/multiply.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nfunction multiply(a, b) {\n  return a * b;\n}\nexports[\"default\"] = multiply;\n\n//# sourceURL=webpack://2023.06.01/./src/components/multiply.ts?");

/***/ }),

/***/ "./src/components/subtract.ts":
/*!************************************!*\
  !*** ./src/components/subtract.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nfunction subtract(a, b) {\n  return a - b;\n}\nexports[\"default\"] = subtract;\n\n//# sourceURL=webpack://2023.06.01/./src/components/subtract.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar add_1 = __importDefault(__webpack_require__(/*! ./components/add */ \"./src/components/add.ts\"));\nvar subtract_1 = __importDefault(__webpack_require__(/*! ./components/subtract */ \"./src/components/subtract.ts\"));\nvar multiply_1 = __importDefault(__webpack_require__(/*! ./components/multiply */ \"./src/components/multiply.ts\"));\nvar divide_1 = __importDefault(__webpack_require__(/*! ./components/divide */ \"./src/components/divide.ts\"));\nconsole.log((0, add_1[\"default\"])(2, 5));\nconsole.log((0, subtract_1[\"default\"])(4, 5));\nconsole.log((0, multiply_1[\"default\"])(2, 7));\nconsole.log((0, divide_1[\"default\"])(10, 2));\n\n//# sourceURL=webpack://2023.06.01/./src/index.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
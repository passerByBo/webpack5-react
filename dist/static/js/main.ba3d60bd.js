"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack5_react"] = self["webpackChunkwebpack5_react"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aFunc\": function() { return /* binding */ aFunc; },\n/* harmony export */   \"arrInclude\": function() { return /* binding */ arrInclude; },\n/* harmony export */   \"promiseFunc\": function() { return /* binding */ promiseFunc; }\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// import \"core-js/stable\";\n// import \"regenerator-runtime/runtime\";\nvar a = 1;\nvar b = 2;\n\nvar myClass = function myClass() {\n  _classCallCheck(this, myClass);\n};\n\nvar mine = new myClass();\nconsole.log('mine', mine);\nvar aFunc = function aFunc() {\n  return a + b;\n};\nvar arrInclude = function arrInclude() {\n  var arr = [1, 2, 3, 4];\n  return arr.includes(a);\n};\nvar promiseFunc = function promiseFunc() {\n  return new Promise(function (resolve) {\n    setTimeout(function () {\n      document.body.style.backgroundColor = 'green';\n    }, 3000);\n  });\n};\n\nvar asyncFunc = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return promiseFunc();\n\n          case 2:\n            console.log('success!!!!!!!!!!');\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function asyncFunc() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nconsole.log('aFunc', aFunc());\nconsole.log('arrInclude', arrInclude());\ndocument.body.style.backgroundColor = 'red';\nasyncFunc();\n\n//# sourceURL=webpack://webpack5-react/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
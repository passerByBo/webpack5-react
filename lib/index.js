"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseFunc = exports.arrInclude = exports.aFunc = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

// import "core-js/stable";
// import "regenerator-runtime/runtime";
var a = 1;
var b = 2;

var myClass = function myClass() {
  (0, _classCallCheck2.default)(this, myClass);
};

var mine = new myClass();
console.log('mine', mine);

var aFunc = function aFunc() {
  return a + b;
};

exports.aFunc = aFunc;

var arrInclude = function arrInclude() {
  var arr = [1, 2, 3, 4];
  return arr.includes(a);
};

exports.arrInclude = arrInclude;

var promiseFunc = function promiseFunc() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      document.body.style.backgroundColor = 'green';
    }, 3000);
  });
};

exports.promiseFunc = promiseFunc;

var asyncFunc = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return promiseFunc();

          case 2:
            console.log('success!!!!!!!!!!');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function asyncFunc() {
    return _ref.apply(this, arguments);
  };
}();

console.log('aFunc', aFunc());
console.log('arrInclude', arrInclude());
document.body.style.backgroundColor = 'red';
asyncFunc();
define(["exports", "@babel/runtime/regenerator", "core-js/modules/es.array.includes.js", "core-js/modules/es.object.to-string.js", "core-js/modules/es.promise.js", "@babel/runtime/helpers/asyncToGenerator", "@babel/runtime/helpers/classCallCheck", "regenerator-runtime/runtime"], function (_exports, _regenerator, _esArrayIncludes, _esObjectToString, _esPromise, _asyncToGenerator2, _classCallCheck2, _runtime) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.promiseFunc = _exports.arrInclude = _exports.aFunc = void 0;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  // import "core-js/stable";
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

  _exports.aFunc = aFunc;

  var arrInclude = function arrInclude() {
    var arr = [1, 2, 3, 4];
    return arr.includes(a);
  };

  _exports.arrInclude = arrInclude;

  var promiseFunc = function promiseFunc() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        document.body.style.backgroundColor = 'green';
      }, 3000);
    });
  };

  _exports.promiseFunc = promiseFunc;

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
});
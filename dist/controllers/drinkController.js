"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDrinkById = exports.getDrinkList = void 0;

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.regexp.split");

require("regenerator-runtime/runtime");

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getDrinkById = (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var drinkId, data, response, drink, normalizedDrink;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            drinkId = req.params.drinkId;
            _context.next = 3;
            return (0, _nodeFetch["default"])("".concat(process.env.THE_COCKTAIL_DB_BASE_URL, "/lookup.php?i=").concat(drinkId));

          case 3:
            response = _context.sent;
            _context.prev = 4;
            _context.next = 7;
            return response.json();

          case 7:
            data = _context.sent;
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);
            res.status(404).json({
              error: 'Drink not found'
            });

          case 13:
            drink = data.drinks[0];
            normalizedDrink = {
              id: drink.idDrink,
              name: drink.strDrink,
              tags: drink.strTags !== null ? _toConsumableArray(drink.strTags.split(',')) : [],
              category: drink.strCategory,
              IBA: drink.strIBA,
              alcoholic: drink.strAlcoholic,
              glassType: drink.strGlass,
              instructions: {
                EN: drink.strInstructions,
                DE: drink.strInstructionsDE,
                ES: drink.strInstructionsES,
                FR: drink.strInstructionsFR
              },
              image: drink.strDrinkThumb,
              ingredients: (0, _utils.normalizeIngredients)(drink),
              rating: 0,
              triedIt: false,
              createdAt: drink.dateModified
            };
            res.status(200).json(normalizedDrink);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 10]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
exports.getDrinkById = getDrinkById;
var getDrinkList = (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var listSelection, response, _yield$response$json, drinks, normalizedDrinkList;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            listSelection = req.params.listSelection;
            _context2.next = 3;
            return (0, _nodeFetch["default"])("".concat(process.env.THE_COCKTAIL_DB_BASE_URL, "/").concat(listSelection, ".php"));

          case 3:
            response = _context2.sent;

            if (!response.ok) {
              res.status(404).json({
                error: 'Invalid request'
              });
            }

            _context2.next = 7;
            return response.json();

          case 7:
            _yield$response$json = _context2.sent;
            drinks = _yield$response$json.drinks;
            normalizedDrinkList = drinks.map(function (drink) {
              return {
                id: drink.idDrink,
                name: drink.strDrink,
                tags: drink.strTags !== null ? _toConsumableArray(drink.strTags.split(',')) : [],
                category: drink.strCategory,
                IBA: drink.strIBA,
                alcoholic: drink.strAlcoholic,
                glassType: drink.strGlass,
                instructions: {
                  EN: drink.strInstructions,
                  DE: drink.strInstructionsDE,
                  ES: drink.strInstructionsES,
                  FR: drink.strInstructionsFR
                },
                image: drink.strDrinkThumb,
                ingredients: (0, _utils.normalizeIngredients)(drink),
                rating: 0,
                triedIt: false,
                createdAt: drink.dateModified
              };
            });
            res.status(200).json(normalizedDrinkList);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
exports.getDrinkList = getDrinkList;
//# sourceMappingURL=drinkController.js.map
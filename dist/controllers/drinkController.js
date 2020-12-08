"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDrinkById = exports.getDrinkList = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getDrinkById = (0, _expressAsyncHandler.default)( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var {
      drinkId
    } = req.params;
    var data;
    var response = yield (0, _nodeFetch.default)("".concat(process.env.THE_COCKTAIL_DB_BASE_URL, "/lookup.php?i=").concat(drinkId));

    try {
      data = yield response.json();
    } catch (err) {
      res.status(404).json({
        error: 'Drink not found'
      });
    }

    var drink = data.drinks[0];
    var normalizedDrink = {
      id: drink.idDrink,
      name: drink.strDrink,
      tags: drink.strTags !== null ? [...drink.strTags.split(',')] : [],
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
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
exports.getDrinkById = getDrinkById;
var getDrinkList = (0, _expressAsyncHandler.default)( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var {
      listSelection
    } = req.params;
    var response = yield (0, _nodeFetch.default)("".concat(process.env.THE_COCKTAIL_DB_BASE_URL, "/").concat(listSelection, ".php"));

    if (!response.ok) {
      res.status(404).json({
        error: 'Invalid request'
      });
    }

    var {
      drinks
    } = yield response.json();
    var normalizedDrinkList = drinks.map(drink => {
      return {
        id: drink.idDrink,
        name: drink.strDrink,
        tags: drink.strTags !== null ? [...drink.strTags.split(',')] : [],
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
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
exports.getDrinkList = getDrinkList;
//# sourceMappingURL=drinkController.js.map
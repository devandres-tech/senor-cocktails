"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _drinkController = require("../controllers/drinkController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.route('/:drinkId').get(_drinkController.getDrinkById);
router.route('/list/:listSelection').get(_drinkController.getDrinkList);
var _default = router;
exports.default = _default;
//# sourceMappingURL=drinkRoutes.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listen = exports.api = void 0;

var _express = _interopRequireDefault(require("express"));

var _colors = _interopRequireDefault(require("colors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _drinkRoutes = _interopRequireDefault(require("./routes/drinkRoutes"));

var _ingredientRoutes = _interopRequireDefault(require("./routes/ingredientRoutes"));

var _config = _interopRequireDefault(require("config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('server:debug');

var api = (0, _express.default)();
exports.api = api;
api.use((0, _cors.default)());
api.use(_bodyParser.default.urlencoded({
  extended: true
})); // // HTTP request logger

if (process.env.NODE_ENV === 'development') {
  api.use((0, _morgan.default)('dev'));
}

api.use(_express.default.json());
api.use('/api/v1/drinks', _drinkRoutes.default);
api.use('/api/v1/ingredients', _ingredientRoutes.default);
console.log('PORT---------->', _config.default.get('port'));
var listen = api.listen(_config.default.get('port') || 5000, debug("server is running on port ".concat(_config.default.get('port'), " and in ").concat(_config.default.get('name'), " mode").cyan.bold), console.log("Server running in ".concat(_config.default.get('name'), " mode on port ").concat(_config.default.get('port')).blue.bold)); // export for testing purposes

exports.listen = listen;
//# sourceMappingURL=server.js.map
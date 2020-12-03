"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listen = void 0;

var _express = _interopRequireDefault(require("express"));

var _colors = _interopRequireDefault(require("colors"));

var _config = _interopRequireDefault(require("config"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var debug = require('debug')('server:debug');

var app = (0, _express["default"])(); // // HTTP request logger

if (process.env.NODE_ENV === 'development') {
  app.use((0, _morgan["default"])('dev'));
}

app.use(_express["default"].json());
var listen = app.listen(_config["default"].get('port'), debug("server is running on port ".concat(_config["default"].get('port'), " and in ").concat(_config["default"].get('name'), " mode")), console.log("Server running in ".concat(_config["default"].get('name'), " mode on port ").concat(_config["default"].get('port')).blue.bold));
exports.listen = listen;
//# sourceMappingURL=server.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = require("dotenv");

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dotenv.config)();
const app = (0, _express.default)();
const port = process.env.PORT || 3000;
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
})); // app.get('/', (req, res) => res.status(301).redirect('/api/v1'));

app.get('/', (req, res) => {
  res.send('Welcome to xzy');
}); // Handles user routes

app.use('/api/v1/users', _userRoutes.default); // app.use(ErrorHandler.sendError);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log('Welcome to xyz'));
}

var _default = app;
exports.default = _default;
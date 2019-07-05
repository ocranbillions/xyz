"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../db/models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import sequelize from 'sequelize';
class UserController {
  static async getUsers(req, res) {
    const users = await _models.default.User.findAll();
    return res.status(200).json({
      status: 200,
      data: users
    });
  }

}

var _default = UserController;
exports.default = _default;
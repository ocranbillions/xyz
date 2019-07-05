"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _userController = _interopRequireDefault(require("../controllers/userController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', _userController.default.getUsers); // router.get('/:id', Auth.isLoggedIn, UserController.getUserByID);
// router.get('/:owneremail/accounts', Auth.isLoggedIn, UserController.getAccountsByOwnerEmail);
// router.post('/', Auth.isLoggedIn, Auth.isAdmin, validations.validateNewStaff, UserController.createStaff);
// router.delete('/:id', Auth.isLoggedIn, Auth.isAdmin, UserController.deleteUser);

var _default = router;
exports.default = _default;
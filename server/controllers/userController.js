// import sequelize from 'sequelize';
import models from '../db/models';

class UserController {
  static async getUsers(req, res) {
    const users = await models.User.findAll();
    return res.status(200).json({
      status: 200,
      data: users,
    });
  }
}

export default UserController;

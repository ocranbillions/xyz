/* eslint-disable object-curly-newline */
import models from '../db/models';
import util from '../helpers/utilities';
import auth from '../helpers/auth';
import Mailer from '../helpers/Mailer';

class UserController {
  static async signUp(req, res) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const foundUser = await models.Users.findOne({ where: { email } });

      if (foundUser) return util.errorStatus(res, 409, 'email exists already');

      const hashPassword = auth.hashPassword(password);
      const user = {
        firstName,
        lastName,
        email,
        password: hashPassword,
      };

      const createdUser = await models.Users.create(user);
      const token = auth.generateToken({ id: createdUser.id, firstName, lastName, email });
      const emailToken = auth.generatEmailToken({ id: createdUser.id });

      Mailer.sendWelcomeMail(email, emailToken);

      return util.successStatus(res, 201, 'User Created successfully', {
        token,
        id: createdUser.id,
        firstName: createdUser.firstName,
        lastName: createdUser.lastName,
        email: createdUser.email,
      });
    } catch (error) {
      return util.errorStatus(res, 500, error.message);
      // return res.status(500);
    }
  }

  static async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const user = await models.Users.findOne({ where: { email } });
      if (!user) return util.errorStatus(res, 401, 'Incorrect Login information');
      const result = await auth.comparePassword(password, user.password);
      if (!result) return util.errorStatus(res, 401, 'Incorrect Login information');
      const { id, firstName, lastName, email: emailAddress, role } = user.dataValues;
      const token = auth.generateToken({ id, firstName, lastName, email: emailAddress, role });
      
      return util.successStatus(res, 200, 'Login successful', {
        token,
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } catch (error) {
      console.log(error);
      return util.errorStatus(res, 500, 'server error');
    }
  }

  static async confirmEmail(req, res) {
    try {
      const { token } = req.query;
      const decode = auth.verifyToken(token);
      const { id } = decode;
  
      await models.Users.update({ confirmed: true }, { where: { id } });
  
      // if(user.dataValues.confirmed === true){
      //   return user already confirmed;
      // }
  
      // if(!user) {
      //   return invalid verification link;
      // }
  
      return util.successStatus(res, 200, 'Email confirmed', {});
    
      // return res.redirect('http://localhost:3000/signin');


    } catch (error) {
      return util.errorStatus(res, 500, error.message);
    }

  }


  static async getUsers(req, res) {
    const users = await models.Users.findAll({
      include: [
        {
          model: models.Articles,
        },
      ],
    });
    return res.status(200).json({
      status: 200,
      data: users,
    });
  }
}

export default UserController;

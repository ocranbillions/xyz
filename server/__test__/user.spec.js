/* eslint-disable no-undef */
import supertest from 'supertest';
// import sinon from 'sinon';
import app from '../app';

// import models from '../db/models';
// import userCtrl from '../controllers/userController'

const server = () => supertest(app);
const url = '/api/v1';

describe('Signup endpoint', () => {
  it('Should register new user', (done) => {
    server().post(`${url}/auth/signup`).send({
      firstName: "sam",
      lastName: "ocr",
      email: "samm@gmail.com",
      password: 'password123..',
    })
      .end((err, res) => {
        expect(res.body.status).toEqual(201);
        expect(res.body.data).toHaveProperty('token');
        expect(res.body.data).toHaveProperty('id');
        expect(res.body.data).toHaveProperty('firstName');
        expect(res.body.data).toHaveProperty('lastName');
        expect(res.body.data).toHaveProperty('email');
        done();
        expect(res.body).toMatchSnapshot();
      });
  });

  // it('should fail', (done) => {
  //   sinon.stub(models.Users, 'findOne');
  //   models.Users.findOne.throws();

  //   const req = {
  //     body: {
  //       firstName: 'jsfgfg',
  //       lastName: 'dfdfdf',
  //       email: 'test@test.com',
  //       password: 'tester',
  //     },
  //   };

  //   // const res = {
  //   //   status: (num) => {
  //   //     return num;
  //   //   },
  //   //   // status: 500,
  //   //   body: {
  //   //     firstName: 'jsfgfg',
  //   //     lastName: 'dfdfdf',
  //   //     email: 'test@test.com',
  //   //     password: 'tester',
  //   //   },
  //   // };

  //   const res = {
  //     statusCode: 500,
  //     userStatus: null,
  //     status: function(code) {
  //       this.statusCode = code;
  //       return this;
  //     },
  //     json: function(data) {
  //       this.userStatus = data.status;
  //     }
  //   };

  //   userCtrl.signUp(req, res, () => {}).then((response) => {
  //     console.log(response);
  //     expect(response.statusCode).toEqual(500);
  //     // expect(result).to.be.an('error');
  //     // expect(result).to.have.property('statusCode', 500);
  //     done();
  //   });

  //   models.Users.findOne.restore();
  // });
});

/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../app';

const server = () => supertest(app);
const url = '/api/v1';

describe('Signup endpoint', () => {
  it('Should register new user', (done) => {
    server().post(`${url}/auth/signup`).send({
      firstName: "sam",
      lastName: "ocr",
      email: "samsd@gmail.com",
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
});

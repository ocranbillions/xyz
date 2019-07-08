/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../app';

const server = () => supertest(app);
const url = '/api/v1';

describe('Welcome to xyz', () => {
  it('Should return json object with a welcome message on app start', (done) => {
    server().get('/')
      .end((err, res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Welcome to xyz');
        done();
        expect(res.body).toMatchSnapshot();
      });
  });
});

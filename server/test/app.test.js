/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const should = chai.should();
chai.use(chaiHttp);

describe('Welcome to xyz', function () {
  it('Should return json object with a welcome message on app start', function (done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.statusCode.should.equal(200);
        res.body.should.have.property('message').eql('Welcome to xyz');
        done();
      });
  });
});

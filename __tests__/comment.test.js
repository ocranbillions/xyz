import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import models from '../database/models';

import app from '../index';

chai.use(chaiHttp);

const url = '/api/v1/articles';
const { expect } = chai;
let validToken;

describe('Testing comment endpoints', () => {
  before((done) => {
    const user = {
      email: 'dd@test.com',
      password: 'PasswoRD123__',
    };
    chai
      .request(app)
      .post('/api/v1/auth/signin')
      .send(user)
      .end((err, res) => {
        const { token } = res.body.user;
        validToken = token;
        done();
      });
  });

  it('should not post a comment on an article that doesnt exist', (done) => {
    chai
      .request(app)
      .post(`${url}/slug-of-some-article-that-doesnt-exit-in-db/comments`)
      .set('Authorization', `Bearer ${validToken}`)
      .send({ body: 'sample comment body' })
      .end((err, res) => {
        expect(res.status).to.eql(404);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors).to.have.property('message');
        expect(res.body.errors.message).to.eql('Resource not found');
        done();
      });
  });
  it('should not post a comment on an article that is not yet published', (done) => {
    chai
      .request(app)
      .post(`${url}/article-slug/comments`)
      .set('Authorization', `Bearer ${validToken}`)
      .send({ body: 'sample comment body' })
      .end((err, res) => {
        expect(res.status).to.eql(405);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors).to.eql('cannot comment on a draft article');
        done();
      });
  });
  it('should not post a comment with no message in body', (done) => {
    chai
      .request(app)
      .post(`${url}/some-slug/comments`)
      .set('Authorization', `Bearer ${validToken}`)
      .send({ body: '' })
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors.body).to.eql('comment body is required');
        done();
      });
  });
  it('logged in user should post a comment successfully', (done) => {
    chai
      .request(app)
      .post(`${url}/some-slug/comments`)
      .set('Authorization', `Bearer ${validToken}`)
      .send({ body: 'I think technology is the new oil' })
      .end((err, res) => {
        expect(res.status).to.eql(201);
        expect(res.body.data).to.have.property('body');
        expect(res.body.data.body).to.eql('I think technology is the new oil');
        expect(res.body.data).to.have.property('id');
        expect(res.body.data).to.have.property('userId');
        expect(res.body.data).to.have.property('articleId');
        expect(res.body.data).to.have.property('articleSlug');
        expect(res.body.data).to.have.property('type');
        expect(res.body.data.type).to.eql('parent');
        done();
      });
  });
  it('should successfully post in a comment thread', (done) => {
    chai
      .request(app)
      .post(`${url}/some-slug/comments?commtId=1536b14b-0669-42aa-a0a9-cae685aecc74`)
      .set('Authorization', `Bearer ${validToken}`)
      .send({ body: 'hi Mike, I totally agree with what you stated above' })
      .end((err, res) => {
        expect(res.status).to.eql(201);
        expect(res.body.data.newChild).to.have.property('body');
        expect(res.body.data.newChild.body).to.eql('hi Mike, I totally agree with what you stated above');
        expect(res.body.data.newChild).to.have.property('id');
        expect(res.body.data.newChild).to.have.property('userId');
        expect(res.body.data.newChild).to.have.property('articleId');
        expect(res.body.data.newChild).to.have.property('articleSlug');
        expect(res.body.data.newChild).to.have.property('type');
        expect(res.body.data.newChild.type).to.eql('child');
        done();
      });
  });
  it('should throw a 500 when an error occurs on the server', (done) => {
    const stub = sinon
      .stub(models.Comment, 'create')
      .rejects(new Error('Server error occured'));
    chai
      .request(app)
      .post(`${url}/some-slug/comments`)
      .set('Authorization', `Bearer ${validToken}`)
      .send({ body: 'some comment being posted' })
      .end((err, res) => {
        expect(res.status).to.eql(500);
        stub.restore();
        done();
      });
  });
});

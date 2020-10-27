import regeneratorRuntime from "regenerator-runtime";
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/server';

chai.use(chaiHttp);

describe('## COVID Tests', () => {
  describe('### GET /covid/cdmx', () => {
      it('it should GET acumulative confirmed cases for CDMX', (done) => {
        chai
          .request(app)
          .get('/covid/cdmx')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.have.property('confirmed_cases');
            done();
          })
      });
  });

  describe('### GET /covid/stateNoRegistered', () => {
      it('it should GET a 404 at getting a state not registered', (done) => {
        chai
          .request(app)
          .get('/covid/stateNoRegistered')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            done();
          })
      });
  });
});

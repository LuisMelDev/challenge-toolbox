let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/app');
let should = chai.should();


chai.use(chaiHttp);

describe('Books', () => {

  describe('/GET files/data', () => {
      it('it should GET all the books', (done) => {
        chai.request(server)
            .get('/files/data')
            .end((err, res) => {
                  res.should.have.status(200);
              done();
            });
      });
  });

});
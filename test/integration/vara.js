const chai = require('chai');
const chaiHttp = require('chai-http');
const VARA_VALIDA = require('./data.json').VARA_VALIDA;
const VARA_INVALIDA = require('./data.json').VARA_INVALIDA;

chai.use(chaiHttp);
chai.should();

describe('Vara - Endpoints', () => {
    describe('POST /vara', () => {
        it (' Dados todos dados validos deve retornar vara cadastrada - Status Code 201', done => {
            chai.request('http://localhost:3031')
            .post('/vara')
            .send(VARA_VALIDA)
            .end((err, res) => {
                chai.assert.isNull(err);
                res.should.have.status(201);
                done();
            });
        })
        it ('Dado nome da vara invalido deve retornar erro - Contrato de validação - Status Code 400', done  => {
            chai.request('http://localhost:3031')
            .post('/vara')
            .send(VARA_INVALIDA)
            .end((err, res) => {
                res.should.have.status(400);
                done();
        });
    });
         it ('Dado ao consultar um nome de  vara deve retornar o registro -  Status Code 200', done  => {
        chai.request('http://localhost:3031')
        .post('/vara')
        .send(VARA_INVALIDA)
        .end((err, res) => {
            res.should.have.status(400);
            done();
     });
    });
});
})
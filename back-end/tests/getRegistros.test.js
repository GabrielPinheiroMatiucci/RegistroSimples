const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../api/app');
const { registrosModel } = require('../models');

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /registros', () => {
  describe('Quando não há nenhum registro', () => {
    before(() => {
      sinon.stub(registrosModel, 'getRegistros')
        .resolves([]);
    });

    after(() => registrosModel.getRegistros.restore());

    it('Deve devolver um array vazio e o status 200', async () => {
      const response = await chai
        .request(app)
        .get('/registros');

      expect(response).to.have.status(200);
      expect(response.body).to.be.a('array');
      expect(response.body).to.have.length(0);
    });
  });

  describe('Quando há algum registro', () => {
    const mockRegistros = [
      {
        cd_registro: 1,
        nm_pessoa: 'Gabriel',
        dt_nascimento: '1999-05-15',
      },
      {
        cd_registro: 2,
        nm_pessoa: 'Pinheiro',
        dt_nascimento: '1970-02-14',
      }
    ];

    before(() => {
      sinon.stub(registrosModel, 'getRegistros')
        .resolves(mockRegistros);
    });

    after(() => registrosModel.getRegistros.restore());

    it('Deve devolver um array com os registros e o status 200', async () => {
      const response = await chai
        .request(app)
        .get('/registros');

      expect(response).to.have.status(200);
      expect(response.body).to.be.a('array');
      expect(response.body).to.have.length(2);
      expect(response.body).to.be.deep.equal(mockRegistros);
    });
  });

  describe('Quando levanta-se um erro', () => {
    const errorMessage = { message: 'Internal Server Error' };
    const error = new Error();

    before(() => {
      sinon.stub(registrosModel, 'getRegistros')
        .throws(error);
    });

    after(() => registrosModel.getRegistros.restore());

    it('Deve devolver o status 500', async () => {
      const response = await chai
        .request(app)
        .get('/registros');

      expect(response).to.have.status(500);
      expect(response.body).to.be.deep.equal(errorMessage);
    });
  });
});

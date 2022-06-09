const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../api/app');
const { registrosModel } = require('../models');
const { assert } = require('chai');

chai.use(chaiHttp);
const { expect } = chai;

describe('POST /registros', () => {
  describe('Quando os dados são válidos', () => {
    const validRegister = { name: 'Gabriel', date: '1999-05-15' };

    before(() => {
      sinon.stub(registrosModel, 'createRegistro')
        .resolves();
    });

    after(() => registrosModel.createRegistro.restore());

    it('Deve devolver o status 201', async () => {
      const response = await chai
        .request(app)
        .post('/registros')
        .send(validRegister);

      expect(response).to.have.status(201);
      expect(response.body).to.be.deep.equal({});
    });
  });

  describe('Quando os dados são inválidos', () => {
    const invalidBody = { message: 'Invalid Body' };

    describe('Quando falta o name', () => {
      const invalidRegister = { date: '1999-05-15' };
  
      before(() => {
        sinon.stub(registrosModel, 'createRegistro')
          .resolves();
      });
  
      after(() => registrosModel.createRegistro.restore());
  
      it('Deve devolver o status 400 e a mensagem "Invalid Body"', async () => {
        const response = await chai
          .request(app)
          .post('/registros')
          .send(invalidRegister);
        
        expect(response).to.have.status(400);
        expect(response.body).to.be.deep.equal(invalidBody);
      });
    });

    describe('Quando falta o date', () => {
      const invalidRegister = { name: 'Gabriel Pinheiro' };
  
      before(() => {
        sinon.stub(registrosModel, 'createRegistro')
          .resolves();
      });
  
      after(() => registrosModel.createRegistro.restore());
  
      it('Deve devolver o status 400 e a mensagem "Invalid Body"', async () => {
        const response = await chai
          .request(app)
          .post('/registros')
          .send(invalidRegister);

        expect(response).to.have.status(400);
        expect(response.body).to.be.deep.equal(invalidBody);
      });
    });

    describe('Quando o name está vazio', () => {
      const invalidRegister = {
        name: '',
        date: '1999-05-15',
      };
  
      before(() => {
        sinon.stub(registrosModel, 'createRegistro')
          .resolves();
      });
  
      after(() => registrosModel.createRegistro.restore());
  
      it('Deve devolver o status 400 e a mensagem "Invalid Body"', async () => {
        const response = await chai
          .request(app)
          .post('/registros')
          .send(invalidRegister);

        expect(response).to.have.status(400);
        expect(response.body).to.be.deep.equal(invalidBody);
      });
    });

    describe('Quando o date está vazio', () => {
      const invalidRegister = {
        name: 'Gabriel Pinheiro',
        date: '',
      };
  
      before(() => {
        sinon.stub(registrosModel, 'createRegistro')
          .resolves();
      });
  
      after(() => registrosModel.createRegistro.restore());
  
      it('Deve devolver o status 400 e a mensagem "Invalid Body"', async () => {
        const response = await chai
          .request(app)
          .post('/registros')
          .send(invalidRegister);

        expect(response).to.have.status(400);
        expect(response.body).to.be.deep.equal(invalidBody);
      });
    });

    describe('Quando o date.year está no formato inválido', () => {
      const invalidRegister = {
        name: 'Gabriel Pinheiro',
        date: '15-05-1999',
      };
  
      before(() => {
        sinon.stub(registrosModel, 'createRegistro')
          .resolves();
      });
  
      after(() => registrosModel.createRegistro.restore());
  
      it('Deve devolver o status 400 e a mensagem "Invalid Body"', async () => {
        const response = await chai
          .request(app)
          .post('/registros')
          .send(invalidRegister);

        expect(response).to.have.status(400);
        expect(response.body).to.be.deep.equal(invalidBody);
      });
    });

    describe('Quando o date.month no formato inválido', () => {
      const invalidRegister = {
        name: 'Gabriel Pinheiro',
        date: '1999-199-15',
      };
  
      before(() => {
        sinon.stub(registrosModel, 'createRegistro')
          .resolves();
      });
  
      after(() => registrosModel.createRegistro.restore());
  
      it('Deve devolver o status 400 e a mensagem "Invalid Body"', async () => {
        const response = await chai
          .request(app)
          .post('/registros')
          .send(invalidRegister);

        expect(response).to.have.status(400);
        expect(response.body).to.be.deep.equal(invalidBody);
      });
    });

    describe('Quando o date.day no formato inválido', () => {
      const invalidRegister = {
        name: 'Gabriel Pinheiro',
        date: '1999-05-159',
      };
  
      before(() => {
        sinon.stub(registrosModel, 'createRegistro')
          .resolves();
      });
  
      after(() => registrosModel.createRegistro.restore());
  
      it('Deve devolver o status 400 e a mensagem "Invalid Body"', async () => {
        const response = await chai
          .request(app)
          .post('/registros')
          .send(invalidRegister);

        expect(response).to.have.status(400);
        expect(response.body).to.be.deep.equal(invalidBody);
      });
    });

    describe('Quando o date.year está vazio', () => {
      const invalidRegister = {
        name: 'Gabriel Pinheiro',
        date: '-05-15',
      };
  
      before(() => {
        sinon.stub(registrosModel, 'createRegistro')
          .resolves();
      });
  
      after(() => registrosModel.createRegistro.restore());
  
      it('Deve devolver o status 400 e a mensagem "Invalid Body"', async () => {
        const response = await chai
          .request(app)
          .post('/registros')
          .send(invalidRegister);

        expect(response).to.have.status(400);
        expect(response.body).to.be.deep.equal(invalidBody);
      });
    });

    describe('Quando o date.month está vazio', () => {
      const invalidRegister = {
        name: 'Gabriel Pinheiro',
        date: '1999--15',
      };
  
      before(() => {
        sinon.stub(registrosModel, 'createRegistro')
          .resolves();
      });
  
      after(() => registrosModel.createRegistro.restore());
  
      it('Deve devolver o status 400 e a mensagem "Invalid Body"', async () => {
        const response = await chai
          .request(app)
          .post('/registros')
          .send(invalidRegister);

        expect(response).to.have.status(400);
        expect(response.body).to.be.deep.equal(invalidBody);
      });
    });

    describe('Quando o date.day está vazio', () => {
      const invalidRegister = {
        name: 'Gabriel Pinheiro',
        date: '1999-05-',
      };
  
      before(() => {
        sinon.stub(registrosModel, 'createRegistro')
          .resolves();
      });
  
      after(() => registrosModel.createRegistro.restore());
  
      it('Deve devolver o status 400 e a mensagem "Invalid Body"', async () => {
        const response = await chai
          .request(app)
          .post('/registros')
          .send(invalidRegister);

        expect(response).to.have.status(400);
        expect(response.body).to.be.deep.equal(invalidBody);
      });
    });
  });

  describe('Quando levanta-se um erro', () => {
    const validRegister = { name: 'Gabriel', date: '1999-05-15' };
    const errorMessage = { message: 'Internal Server Error' };
    const error = new Error();

    before(() => {
      sinon.stub(registrosModel, 'createRegistro')
        .throws(error);
    });

    after(() => registrosModel.createRegistro.restore());

    it('Deve devolver o status 500', async () => {
      const response = await chai
        .request(app)
        .post('/registros')
        .send(validRegister);

      expect(response).to.have.status(500);
      expect(response.body).to.be.deep.equal(errorMessage);
    });
  });
});

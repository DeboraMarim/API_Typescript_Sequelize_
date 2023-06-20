import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import { ServiceResponse } from '../../../src/types/serviceResponse';
import loginServices from '../../../src/services/login.services';
import loginController from '../../../src/controllers/login.controllers';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Should be able to login and return an error', async function () {
    req.body = {
      username: '',
      password: 'password',
    };

    const serviceResponse: ServiceResponse<string> = {
      status: 'INVALID_DATA',
      data: { message: 'Username or password invalid' },
    }
    sinon.stub(loginServices, 'authenticate').resolves(serviceResponse);

    await loginController.authenticate(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(serviceResponse.data);
  })
});

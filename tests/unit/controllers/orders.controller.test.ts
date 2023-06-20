import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { Request, Response } from "express";
import transactionServices from "../../../src/services/orders.services";
import { ServiceResponse } from "../../../src/types/serviceResponse";
import transactionController from "../../../src/controllers/orders.controllers";
import { OrderProduct, PartialOrder } from '../../../src/types/Order';

chai.use(sinonChai);

const allTransactions = [
  {
    id: 1,
    userId: 1,
    orderId: [1, 2],
  },
  {
    id: 2,
    userId: 3,
    orderId: [3, 4],
  },
  {
    id: 3,
    userId: 2,
    orderId: [5],
  },
];

export const transactionBody = {
  userId: 1,
  productIds: [1, 2],
}

describe("TransactionController", function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it("Should return error if fetchAll encounters an issue", async function () {
    req.body = allTransactions;

    const serviceResponse: ServiceResponse<OrderProduct[]> = {
      status: "INVALID_DATA",
      data: { message: "something went wrong" },
    };
    sinon.stub(transactionServices, "findAll").resolves(serviceResponse);

    await transactionController.fetchAll(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ alert: 'unexpected issue occurred' });
  });
});

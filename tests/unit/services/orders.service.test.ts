import { expect } from "chai";
import sinon from "sinon";
import OrderModel from "../../../src/database/models/order.model";
import orderService from "../../../src/services/orders.services";

const ordersData = [
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

const dataFor: any = {
  id: 1,
  userId: 1,
  productIds: [1, 2],
};

const tomb = {
  userId: 1,
  productIds: [1, 2],
};

const dataId = [
  { dataValues: { id: 1, userId: 1, productIds: [{ id: 2 }, { id: 1 }] } },
  { dataValues: { id: 2, userId: 3, productIds: [{ id: 4 }, { id: 3 }] } },
  { dataValues: { id: 3, userId: 2, productIds: [{ id: 5 }] } },
];

describe("OrdersService", function () {
  beforeEach(function () {
    sinon.restore();
  });

  it("Should return the request with success", async function () {
    const dataComp = ordersData.map((l) => OrderModel.build(l));
    sinon.stub(OrderModel, "findAll").resolves(dataComp);

    const data = await orderService.findAll();

    expect(data.status).to.eq("SUCCESSFUL");
    expect(data.data).to.have.length(3);
  });

  it("Should map the dataId", async function () {
    sinon.stub(OrderModel, "findAll").resolves(dataId as any);

    const result = await orderService.findAll();

    expect(result.status).to.equal("SUCCESSFUL");
    expect(result.data).to.deep.equal([
      { id: 1, userId: 1, productIds: [2, 1] },
      { id: 2, userId: 3, productIds: [4, 3] },
      { id: 3, userId: 2, productIds: [5] },
    ]);
  });

  it('Should create a new order', async function () {
    const data = OrderModel.build(dataFor);
    sinon.stub(OrderModel, 'create').resolves(data);

    const result = await orderService.initiateTransaction(tomb);

    expect(result.status).to.equal('SUCCESSFUL');
    expect(result.data).to.deep.equal(tomb);
  })
});

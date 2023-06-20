import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { Request, Response } from "express";
import { ServiceResponse } from "../../../src/types/serviceResponse";
import { Product } from "../../../src/types/Product";
import ProductService from "../../../src/services/products.service";
import productController from "../../../src/controllers/product.controller";

chai.use(sinonChai);

const Products = [
  {
    id: 1,
    name: "Excalibur",
    price: "10 peças de ouro",
    orderId: 1,
  },
  {
    id: 2,
    name: "Espada Justiceira",
    price: "20 peças de ouro",
    orderId: 1,
  },
  {
    id: 3,
    name: "Lira de Orfeu",
    price: "1 peça de ouro",
    orderId: 2,
  },
  {
    id: 4,
    name: "Armadura de Aquiles",
    price: "1 peça de ouro",
    orderId: 2,
  },
  {
    id: 5,
    name: "Harpa de Dagda",
    price: "15 peças de ouro",
    orderId: 3,
  },
];

const produteenho = {
  name: "Coraça",
  price: "50",
  orderId: 6,
};

describe("ProductsController", function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  
  it("Should handle error on product insertion", async function () {
    req.body = produteenho;

    const serviceResponse: ServiceResponse<Product> = {
      status: "INVALID_DATA",
      data: { message: "something went wrong" },
    };
    sinon.stub(ProductService, "generateItem").resolves(serviceResponse);

    await productController.generateItem(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith("something went wrong");
  });

  it("Should return all products correctly", async function () {
    req.body = Products;

    const serviceResponse: ServiceResponse<Product[]> = {
      status: "SUCCESSFUL",
      data: Products,
    };
    sinon.stub(ProductService, "findAll").resolves(serviceResponse);

    await productController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(serviceResponse.data);
  });
});

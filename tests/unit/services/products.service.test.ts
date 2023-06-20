import { expect } from 'chai';
import sinon from 'sinon';
import productModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/products.service';


const produteenho = {
  id: 2,
  name: "Coraça",
  price: "50",
  orderId: 6,
};

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

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Should return an object', async function () {
    const dataComp = productModel.build(produteenho)
    sinon.stub(productModel, 'create').resolves(dataComp)

    const serviceResponse = await productService.generateItem(produteenho)

    expect(serviceResponse.status).to.eq('SUCCESSFUL')
    expect(serviceResponse.data).to.have.keys(['id', 'name', 'orderId', 'price'])
  })

  it('Should return an error message', async function () {
    const dataComp = productModel.build(produteenho)
    sinon.stub(productModel, 'create').resolves()

    const serviceResponse = await productService.generateItem(produteenho)

    expect(serviceResponse.status).to.eq('INVALID_DATA')
  })

  it('Should call findAll function of the service', async function() {
    const dataComp = Products.map((l) => productModel.build(l))
    sinon.stub(productModel, 'findAll').resolves(dataComp)
    const data = await productService.findAll();
    expect(data.data).to.have.length(5)
  })
});

import { Product as ProductData } from '../types/Product';
import { ServiceResponse as ResponseType } from '../types/serviceResponse';
import ProductSchema from '../database/models/product.model';

const generateItem = async (itemInfo: ProductData): Promise<ResponseType<ProductData>> => {
  const { name: itemName, price: itemPrice, orderId: itemOrderId } = itemInfo;
  const newProduct = await ProductSchema
    .create({ name: itemName, price: itemPrice, orderId: itemOrderId });
  
  if (!newProduct) {
    return {
      status: 'INVALID_DATA',
      data: { message: 'Unexpected issue encountered' },
    };
  }
  
  return { status: 'SUCCESSFUL', data: newProduct.dataValues };
};

const findAll = async (): Promise<ResponseType<ProductData[]>> => {
  const productList = await ProductSchema.findAll();
  const transformedProducts = productList.map(({ dataValues }) => dataValues);

  return { status: 'SUCCESSFUL', data: transformedProducts };
};

export default {
  generateItem,
  findAll,
};

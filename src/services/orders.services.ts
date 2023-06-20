import { Order, OrderProduct, PartialOrder } from '../types/Order';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/serviceResponse';

const findAll = async (): Promise<ServiceResponse<OrderProduct[]>> => {
  const orderData = await OrderModel.findAll({
    include: { model: ProductModel, as: 'productIds' },
  });
  
  const organizedOrders:
  OrderProduct[] = orderData.map(({ dataValues: { id, userId, productIds } }) => ({
    id,
    userId,
    productIds: productIds?.map(({ id: productId }) => productId),
  }));

  return { status: 'SUCCESSFUL', data: organizedOrders };
};

const initiateTransaction = async (orderInfo: PartialOrder):
Promise<ServiceResponse<PartialOrder>> => {
  const { productIds, userId } = orderInfo;
  await OrderModel.create({ userId, productIds } as Order);
  return { status: 'SUCCESSFUL', data: orderInfo };
};

export default {
  findAll,
  initiateTransaction,
};

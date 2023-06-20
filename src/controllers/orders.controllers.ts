import { Request, Response } from 'express';
import transactionServices from '../services/orders.services';

const fetchAll = async (req: Request, res: Response): Promise<Response> => {
  const result = await transactionServices.findAll();
  if (result.status !== 'SUCCESSFUL') {
    return res.status(400).json({ alert: 'unexpected issue occurred' });
  }
  return res.status(200).json(result.data);
};

const createTransaction = async (req: Request, res: Response): Promise<Response> => {
  const { productIds, userId } = req.body;
  const result = await transactionServices.initiateTransaction({ productIds, userId });
  return res.status(201).json(result.data);
};

export default {
  fetchAll,
  createTransaction,
};

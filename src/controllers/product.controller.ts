import { Request, Response } from 'express';
import itemsService from '../services/products.service';
import { interpretHTTPCode } from '../middlewares/middlewares';

const generateItem = async (req: Request, res: Response): Promise<Response> => {
  const item = req.body;
  const result = await itemsService.generateItem(item);
  if (result.status !== 'SUCCESSFUL') {
    return res.status(interpretHTTPCode(result.status)).json(result.data.message);
  }
  return res.status(201).json(result.data);
};

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const result = await itemsService.findAll();
  return res.status(200).json(result.data);
};

export default {
  generateItem,
  getAll,
};

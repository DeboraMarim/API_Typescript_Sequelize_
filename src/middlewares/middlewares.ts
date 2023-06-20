import { NextFunction as Next, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../types/User';
import UserModel from '../database/models/user.model'; // Importe o modelo UserModel aqui

const secret = process.env.JWT_SECRET || 'secret';

export function interpretHTTPCode(status: string): number {
  const statusHTTP: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 401,
    BAD_REQUEST: 400,
  };
  return statusHTTP[status] || 500;
}

export const generateToken = (user: User): string =>
  jwt.sign({ user }, secret, { expiresIn: '1d' });

export const tokenValid = async (req: Request, res: Response, next: Next) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  try {
    const decoded = jwt.verify(authorization, secret) as User;
  
    if (!decoded) {
      throw new Error();
    }
  
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

interface RequestBody extends Request {
  body: {
    username: string;
    password: string;
  };
}

export const login = ({ body: { username, password } }:
RequestBody, res: Response, next: Next): void => {
  if (!username || !password) {
    res.status(400).json({ message: '"username" and "password" are required' });
  } else {
    next();
  }
};

interface UserRequest extends Request {
  body: {
    userId: number;
  };
}

export const userIdValid = async ({ body: { userId } }:
UserRequest, res: Response, next: Next): Promise<void> => {
  if (!userId) {
    res.status(400).json({ message: '"userId" is required' });
    return;
  }
  
  if (typeof userId !== 'number') {
    res.status(422).json({ message: '"userId" must be a number' });
    return;
  }
  
  const user = await UserModel.findByPk(userId);
  
  if (!user) {
    res.status(404).json({ message: '"userId" not found' });
    return;
  }

  next();
};

export async function productIdsValid(req: Request, res: Response, next: Next) {
  const { productIds } = req.body;
  if (!productIds) {
    return res.status(400).json({ message: '"productIds" is required' });
  }
  if (!Array.isArray(productIds)) {
    return res.status(422).json({ message: '"productIds" must be an array' });
  }
  if (productIds.length === 0) {
    return res.status(422).json({ message: '"productIds" must include only numbers' });
  }
  next();
}

interface NameRequest extends Request {
  body: {
    name: string;
  };
}

export const validName = ({ body: { name } }: NameRequest, res: Response, next: Next): void => {
  if (!name) {
    res.status(400).json({ message: '"name" is required' });
    return;
  }

  if (typeof name !== 'string') {
    res.status(422).json({ message: '"name" must be a string' });
    return;
  }

  if (name.length < 3) {
    res.status(422).json({ message: '"name" length must be at least 3 characters long' });
    return;
  }

  next();
};

export const validPrice = (req: Request, res: Response, next: Next) => {
  const { price } = req.body;
  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  }

  if (typeof price !== 'string') {
    return res.status(422).json({ message: '"price" must be a string' });
  }

  if (price.length < 3) {
    return res
      .status(422)
      .json({ message: '"price" length must be at least 3 characters long' });
  }

  next();
};

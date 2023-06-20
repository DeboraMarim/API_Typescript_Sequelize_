import { Request, Response } from 'express';
import authService from '../services/login.services';
import { interpretHTTPCode } from '../middlewares/middlewares';

const authenticate = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  const foundUser = await authService.authenticate({ username, password });
  if (foundUser.status !== 'SUCCESSFUL') {
    return res.status(interpretHTTPCode(foundUser.status)).json(foundUser.data);
  }
  return res.status(200).json({ token: foundUser.data });
};

export default { authenticate };

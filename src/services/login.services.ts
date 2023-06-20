import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { Login } from '../types/User';
import { ServiceResponse } from '../types/serviceResponse';
import { generateToken } from '../middlewares/middlewares';

async function authenticate(loginData: Login): Promise<ServiceResponse<string>> {
  const userRecord = await UserModel.findOne({ where: { username: loginData.username } });
  
  if (!userRecord || !bcrypt.compareSync(loginData.password, userRecord.dataValues.password)) {
    return {
      status: 'UNAUTHORIZED',
      data: { message: 'Username or password invalid' },
    };
  }

  const authToken = generateToken(userRecord.dataValues);
  return { status: 'SUCCESSFUL', data: authToken };
}

export default {
  authenticate,
};

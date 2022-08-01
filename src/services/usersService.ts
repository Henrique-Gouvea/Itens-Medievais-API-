import { IUser } from '../interfaces/IUser';
import userModel from '../models/userModel';
import tokenHelper from '../helpers/token';
import loginValidation from '../validations/loginValidation';
import { ILogin } from '../interfaces/ILogin';

async function create(user: IUser) {
  const data = await userModel.create(user);
  const token = tokenHelper.createToken(data);

  return { status: 201, token };
}

async function getUserByUserName(userLogin: ILogin) {
  const data = await userModel.getUserByUserName(userLogin);
  return data;
}

async function checkUserLogin(userLogin: ILogin) { 
  loginValidation(userLogin);
  const data = await getUserByUserName(userLogin);
  
  if (!data) {
    const e = new Error('Username or password invalid');
    e.name = 'Unauthorized';
    throw e;
  }
  
  const token = tokenHelper.createToken(data);

  return { status: 200, token };
}

export default {
  create,
  checkUserLogin,
};
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

async function getUser(userName: ILogin) {
  const data = await userModel.getUser(userName);
  return data;
}

async function checkUserLogin(userLogin: ILogin) {
  loginValidation(userLogin);
  const { username, password } = userLogin;
  const data = await getUser({ username });
  const token = tokenHelper.createToken(data);

  return { status: 201, token };
}

export default {
  create,
  checkUserLogin,
};
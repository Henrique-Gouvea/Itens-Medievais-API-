import { IUser } from '../interfaces/IUser';
import userModel from '../models/userModel';
import tokenHelper from '../helpers/token';

async function create(user: IUser) {
  const data = await userModel.create(user);
  const token = tokenHelper.createToken(data);

  return { status: 201, token };
}

export default {
  create,
};
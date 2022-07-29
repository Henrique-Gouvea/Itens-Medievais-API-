import { IUser } from '../interfaces/IUser';
import userModel from '../models/userModel';

async function create(user: IUser) {
  const data = await userModel.create(user);

  return { status: 201, data };
}

export default {
  create,
};
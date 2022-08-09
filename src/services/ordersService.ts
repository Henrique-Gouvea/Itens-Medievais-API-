import { IOrder } from '../interfaces/IOrder';
import ordersModel from '../models/ordersModel';
import tokenHelper from '../helpers/token';

async function getAll() {
  const data = await ordersModel.getAll();

  return { status: 200, data };
}

async function create(productsIds: IOrder, token:string | undefined) {
  if (!token) {
    const e = new Error('Token not found');
    e.name = 'Unauthorized';
    throw e;
  }
  const id = tokenHelper.checkToken(token);
  console.log(id);
  
  // const data = await ordersModel.create();

  return { status: 201, id };
}

export default {
  getAll,
  create,
};
import ordersModel from '../models/ordersModel';

async function getAll() {
  const data = await ordersModel.getAll();

  return { status: 200, data };
}

export default {
  getAll,
};
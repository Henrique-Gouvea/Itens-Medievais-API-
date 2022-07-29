import { IProduct } from '../interfaces/IProduct';

async function create(product: IProduct) {
  const data = await productModel.create(product);

  return { status: 201, data };
}

export default {
  create,
};
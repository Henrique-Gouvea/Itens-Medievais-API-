import { IProduct } from '../interfaces/IProduct';
import productModel from '../models/productModel';
import cadasterValidation from '../validations/cadasterProductValidation';

async function create(product: IProduct) {
  cadasterValidation(product);
  const data = await productModel.create(product);

  return { status: 201, data };
}

async function getAll() {
  const data = await productModel.getAll();

  return { status: 200, data };
}

export default {
  create,
  getAll,
};
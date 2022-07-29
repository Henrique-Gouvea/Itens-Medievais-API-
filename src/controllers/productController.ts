import { Request, Response, NextFunction } from 'express';
import * as productService from '../services/productService';
import { IProduct } from '../interfaces/IProduct';

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const product = req.body as IProduct;
    const { status, data } = await productService.create(product);
    res.status(status).json(data);
  } catch (error) {
    next(error);
  }
}

export default {
  create,
};
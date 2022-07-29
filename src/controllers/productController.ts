import { Request, Response, NextFunction } from 'express';
import productService from '../services/productService';
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

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const { status, data } = await productService.getAll();
    res.status(status).json(data);
  } catch (error) {
    next(error);
  }
}

export default {
  create,
  getAll,
};
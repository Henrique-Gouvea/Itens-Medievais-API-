import { Request, Response, NextFunction } from 'express';
import { IncomingHttpHeaders } from 'http';
import ordersService from '../services/ordersService';

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const { status, data } = await ordersService.getAll();
    res.status(status).json(data);
  } catch (error) {
    next(error);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization }: IncomingHttpHeaders = req.headers;
    const token: string | undefined = authorization;
    const { productsIds } = req.body;
    const { status, id } = await ordersService.create(productsIds, token);
    res.status(status).json(id);
  } catch (error) {
    next(error);
  }
}

export default {
  getAll,
  create,
};
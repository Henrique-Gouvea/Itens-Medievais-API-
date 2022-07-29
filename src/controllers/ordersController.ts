import { Request, Response, NextFunction } from 'express';
import ordersService from '../services/ordersService';

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const { status, data } = await ordersService.getAll();
    res.status(status).json(data);
  } catch (error) {
    next(error);
  }
}

export default {
  getAll,
};
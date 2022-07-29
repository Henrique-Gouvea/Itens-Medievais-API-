import { Request, Response, NextFunction } from 'express';
import usersService from '../services/usersService';
import { IUser } from '../interfaces/IUser';

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const user = req.body as IUser;
    const { status, data } = await usersService.create(user);
    res.status(status).json(data);
  } catch (error) {
    next(error);
  }
}

export default {
  create,
};
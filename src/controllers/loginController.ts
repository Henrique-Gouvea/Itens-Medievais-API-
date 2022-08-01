import { Request, Response, NextFunction } from 'express';
import usersService from '../services/usersService';
import { ILogin } from '../interfaces/ILogin';

async function checkLogin(req: Request, res: Response, next: NextFunction) {
  try {
    const user = req.body as ILogin;
    const { status, token } = await usersService.checkUser(user);
    res.status(status).json({ token });
  } catch (error) {
    next(error);
  }
}

export default {
  checkLogin,
};
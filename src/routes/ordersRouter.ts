import { Router } from 'express';
import ordersController from '../controllers/ordersController';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.getAll);

export default ordersRouter;
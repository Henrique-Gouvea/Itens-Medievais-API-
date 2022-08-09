import { Router } from 'express';
import ordersController from '../controllers/ordersController';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.getAll);
ordersRouter.post('/', ordersController.create);

export default ordersRouter;
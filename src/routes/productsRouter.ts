import { Router } from 'express';
import productController from '../controllers/userController';

const productsRouter = Router();

productsRouter.post('/', productController.create);

export default productsRouter;
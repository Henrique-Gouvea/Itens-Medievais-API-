import { Router } from 'express';
import productController from '../controllers/productController';

const productsRouter = Router();

productsRouter.post('/', productController.create);

export default productsRouter;
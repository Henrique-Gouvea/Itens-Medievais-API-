import { Router } from 'express';
import loginController from '../controllers/loginController';

const loginRouter = Router();

loginRouter.get('/', loginController.checkLogin);

export default loginRouter;
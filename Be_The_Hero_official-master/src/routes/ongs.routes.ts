import 'reflect-metadata';
import { Router } from 'express';
import OngsController from '../controllers/OngsController';

const ongsRouter = Router();
const ongsController = new OngsController();

ongsRouter.post('/', ongsController.create);

export default ongsRouter;
import { Router } from 'express';
import ongsRouter from './ongs.routes';

const routes = Router();

routes.use('/ongs', ongsRouter);


export default routes;
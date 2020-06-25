import {Router} from 'express';
import {LogIn, Create} from './controller/LoginController';

const routes = Router();

routes.post('/login', LogIn).post('/user', Create);

export default routes;

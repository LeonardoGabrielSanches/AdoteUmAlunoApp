import {Router} from 'express';
import {LogIn} from './controller/LoginController';
import {Create} from './controller/UserController';

const routes = Router();

routes.post('/login', LogIn).post('/user', Create);

export default routes;

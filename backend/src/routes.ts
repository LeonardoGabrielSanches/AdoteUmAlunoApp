import { Router } from 'express';
import { LogIn } from './controller/LoginController';
import { Create, GetAllFiltered } from './controller/UserController';

const routes = Router();

routes
  .post('/login', LogIn)
  .post('/user', Create)
  .get('/user/:login', GetAllFiltered);

export default routes;

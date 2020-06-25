import { Request, Response } from 'express';
import LoginService from '../service/LoginService';
import { Login } from '../entity/Login';
import Validation from '../entity/Validation';

export const LogIn = async (request: Request, response: Response) => {
  const { username, password } = request.body;
  try {
    let validation = new Validation();

    const login = new Login(username, password);


    validation = await LoginService.getLogin(login);

    if (validation.invalid) return response.status(400).send();
  } catch (ex) {
    return response.json({ error: ex });
  }

  return response.json({ message: 'ok' }).status(200);
};




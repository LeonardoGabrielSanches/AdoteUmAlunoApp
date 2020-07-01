import { Request, Response } from 'express';
import LoginService from '../service/LoginService';
import LoginModel from '../models/Login';

export const LogIn = async (request: Request, response: Response) => {
  const { username, password } = request.body;
  try {
    const loginService = new LoginService();

    const login = new LoginModel(username, password);

    await loginService.getLogin(login);

    if (loginService.validation.invalid) { return response.status(400).json({ error: loginService.validation.getErrorMessage() }); }

    return response.status(200).send();
  } catch (ex) {
    return response.json({ error: ex });
  }
};

export const ErrorFree = () => {};

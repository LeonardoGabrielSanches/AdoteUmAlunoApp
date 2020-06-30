import { Request, Response } from 'express';
import LoginService from '../service/LoginService';
import { Login } from '../entity/Login';

export const LogIn = async (request: Request, response: Response) => {
  const { username, password } = request.body;
  try {
    var loginService = new LoginService();

    const login = new Login(username, password);

    await loginService.getLogin(login);

    if (loginService._validation.invalid)
      return response.status(400).json({ error: loginService._validation.getErrorMessage() })

    return response.status(200).send();
  } catch (ex) {
    return response.json({ error: ex });
  }
};




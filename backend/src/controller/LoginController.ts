import {Request, Response} from 'express';
import LoginService from '../service/LoginService';
import {Login} from '../entity/Login';
import Validation from '../entity/Validation';

export const LogIn = async (request: Request, response: Response) => {
  const {username, password} = request.body;
  try {
    let validation = new Validation();

    const login = new Login(username, password);

    validation = LoginService.verifyLoginIsEmpty(login);

    if (validation.getInvalid())
      return response.status(202).send({error: validation.getMessage()});

    validation = await LoginService.getLogin(login);

    if (validation.getInvalid()) return response.status(204).send();
  } catch (ex) {
    return response.json({error: ex});
  }

  return response.json({message: 'ok'}).status(200);
};

export const Create = async (request: Request, response: Response) => {
  const {username, password} = request.body;
  try {
    let validation = new Validation();

    const login = new Login(username, password);

    //TODO: Criar as validacões para usuários
    validation = LoginService.verifyLoginIsEmpty(login);

    if (validation.getInvalid())
      return response.json({error: validation.getMessage()});

    const createdLogin = await LoginService.saveLogin(login);

    return response.json(createdLogin);
  } catch {
    return response.json({error: 'error'});
  }
};

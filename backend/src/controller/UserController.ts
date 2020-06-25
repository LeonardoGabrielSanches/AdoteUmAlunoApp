import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { User } from '../entity/User';
import Validation from '../entity/Validation';
import UserService from '../service/UserService';
import { Login } from '../entity/Login';
import { Console } from 'console';


  export const Create = async (request: Request, response: Response) => {
    const { firstName, lastName, age, email, course, biography, phone, username, password } = request.body;
    try {

      let validation = new Validation();

      const login = new Login(username, password);

      const user = new User(firstName, lastName, age, email, course, biography, phone, login);

      console.log(user);
      
      validation = await UserService.verifyUsernIsEqual(user);

      if (validation.invalid)
        return response.json({ error: validation.getMessage() });

      const createdUser = await UserService.saveUser(user);

      return response.status(200).send();
    } catch {
      return response.json({ error: 'error' });
    }


  }



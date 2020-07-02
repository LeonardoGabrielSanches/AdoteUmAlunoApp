import { Request, Response } from 'express';
import UserModel from '../models/User';
import UserService from '../service/UserService';
import LoginModel from '../models/Login';

export const Create = async (request: Request, response: Response) => {
  const {
    firstName, lastName, age, email, course, biography, phone, username, password,
  } = request.body;
  try {
    const userService = new UserService();

    const login = new LoginModel(username, password);

    const user = new UserModel(firstName, lastName, age, email, course, biography, phone, login);

    const createdUser = await userService.saveUser(user);

    if (userService.validation.invalid) { return response.status(400).json({ error: userService.validation.getErrorMessage() }); }

    return response.status(201).json(createdUser);
  } catch (ex) {
    return response.json({ error: ex }).status(400).send();
  }
};

export const GetAllFiltered = async (request: Request, response: Response) => {
  const { login } = request.params;
  try {
    const userService = new UserService();

    const users = await userService.getAllFiltered(login);

    return response.json(users).status(200);
  } catch (ex) {
    return response.json({ error: ex }).status(400).send();
  }
};

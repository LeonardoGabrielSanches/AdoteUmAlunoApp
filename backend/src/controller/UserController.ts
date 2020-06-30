import { Request, Response } from 'express';
import User from '../entity/User';
import UserService from '../service/UserService';
import Login from '../entity/Login';

export const Create = async (request: Request, response: Response) => {
  const {
    firstName, lastName, age, email, course, biography, phone, username, password,
  } = request.body;
  try {
    const userService = new UserService();

    const login = new Login(username, password);

    const user = new User(firstName, lastName, age, email, course, biography, phone, login);

    const createdUser = await userService.saveUser(user);

    if (userService.validation.invalid) { return response.status(400).json({ error: userService.validation.getErrorMessage() }); }

    return response.status(201).json(createdUser);
  } catch (ex) {
    return response.json({ error: ex });
  }
};

export const ErrorFree = () => {};

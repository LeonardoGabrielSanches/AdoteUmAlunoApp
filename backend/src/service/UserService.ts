import { getRepository } from 'typeorm';

import Login from '../entity/Login';
import User from '../entity/User';
import UserModel from '../models/User';
import Validation from '../models/Validation';

class UserService {
  validation: Validation;

  constructor() {
    this.validation = new Validation();
  }

  async saveUser(user: UserModel): Promise<User> {
    if (user.validation.invalid) {
      this.validation.setMessage(user.validation.getErrorMessage());
      return user;
    }

    // await this.verifyUsernIsEqual(user);

    if (this.validation.invalid) {
      return user;
    }

    const createdUser = await getRepository(User).save({
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      email: user.email,
      course: user.course,
      biography: user.biography,
      phone: user.phone,
    });
    await getRepository(Login).save(user.login);
    return createdUser;
  }

  async verifyUsernIsEqual(user: UserModel) {
    const users = await getRepository(User).find();

    let field = '';

    const usernameAlredyExists = users.filter((userFilter) => userFilter.login.username === user.login.username);

    if (usernameAlredyExists.length > 0) { field = 'usuário'; }

    const emailAlredyExists = users.filter((userFilter) => userFilter.login.username === user.login.username);

    if (emailAlredyExists.length > 0) { field = 'email'; }

    if (field !== '') { this.validation.setMessage(`O ${field} já foi cadastrado.`); }
  }
}

export default UserService;

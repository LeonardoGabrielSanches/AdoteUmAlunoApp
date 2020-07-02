import { getRepository } from 'typeorm';

import { hash } from 'bcryptjs';
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

    await this.verifyUsernIsEqual(user);

    if (this.validation.invalid) {
      return user;
    }

    // eslint-disable-next-line no-param-reassign
    user.login.password = await hash(user.login.password, 8);

    await getRepository(Login).save(user.login);

    const createdUser = await getRepository(User).save(user);

    return user;
  }

  async verifyUsernIsEqual(user: UserModel) {
    const users = await getRepository(User).find();
    const logins = await getRepository(Login).find();

    let field = '';

    const usernameAlredyExists = logins.filter(
      (loginFilter) => loginFilter.username === user.login.username,
    ).length > 0;

    if (usernameAlredyExists) {
      field = 'usuário';
    }

    const emailAlredyExists = users.filter(
      (userFilter) => userFilter.email === user.email,
    );

    if (emailAlredyExists.length > 0) {
      field = 'email';
    }

    if (field !== '') {
      this.validation.setMessage(`O ${field} já foi cadastrado.`);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async getAllFiltered(loginParam : string) : Promise<User[]> {
    const users = await getRepository(User)
      .createQueryBuilder('user')
      .innerJoin('user.login', 'login', 'user.loginUsername <> :login', { login: loginParam })
      .getMany();

    return users;
  }
}

export default UserService;

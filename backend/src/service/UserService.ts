import { getRepository } from 'typeorm';
import Validation from '../entity/Validation';
import { User } from '../entity/User';
import { Login } from '../entity/Login';
import LoginService from './LoginService';

class UserService {
  _validation: Validation;

  constructor() {
    this._validation = new Validation();
  }

  async saveUser(user: User): Promise<User> {
    if (user._validation.invalid) {
      this._validation.setMessage(user._validation.getErrorMessage());
      return;
    }

    await this.verifyUsernIsEqual(user);

    if (this._validation.invalid) {
      return;
    }

    const createdUser = await getRepository(User).save(user);
    await getRepository(Login).save(user.login);
    return createdUser;
  }


  async verifyUsernIsEqual(user: User) {

    const users = await getRepository(User).find();

    let field = '';

    const usernameAlredyExists = users.filter(userFilter => userFilter.login.username === user.login.username);

    if (usernameAlredyExists.length > 0)
      field = 'usuário'

    const emailAlredyExists = users.filter(userFilter => userFilter.login.username === user.login.username);

    if (emailAlredyExists.length > 0)
      field = 'email'

    if (field !== '')
      this._validation.setMessage(`O ${field} já foi cadastrado.`);
  }

}

export default UserService;
import { getRepository } from 'typeorm';
import Login from '../entity/Login';
import LoginModel from '../models/Login';
import Validation from '../models/Validation';

class LoginService {
  validation: Validation;

  constructor() {
    this.validation = new Validation();
  }

  async getLogin(login: LoginModel) {
    this.loginIsValid(login);

    if (this.validation.invalid) return;

    const logged = await getRepository(Login).findOne({
      username: login.username,
      password: login.password,
    });

    if (!logged) {
      this.validation.setMessage('Usuário ou senha inválido');
    }
  }

  loginIsValid(login: LoginModel) {
    if (login.validation.invalid) { this.validation.setMessage(login.validation.getErrorMessage()); }
  }
}

export default LoginService;

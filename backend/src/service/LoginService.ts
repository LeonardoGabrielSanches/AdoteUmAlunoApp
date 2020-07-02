import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
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
    });

    if (!logged) {
      this.validation.setMessage('Usuário ou senha inválido');
    }

    const passwordIsCorrect = await compare(login.password, logged.password);

    if (!passwordIsCorrect) {
      this.validation.setMessage('Senha incorreta');
    }
  }

  loginIsValid(login: LoginModel) {
    if (login.validation.invalid) { this.validation.setMessage(login.validation.getErrorMessage()); }
  }
}

export default LoginService;

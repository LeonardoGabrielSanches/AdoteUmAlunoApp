import { getRepository } from 'typeorm';
import { Login } from '../entity/Login';
import Validation from '../entity/Validation';

class LoginService {

  _validation: Validation;

  constructor() {
    this._validation = new Validation();
  }

  async getLogin(login: Login){
    this.loginIsValid(login);

    if(this._validation.invalid)
      return;

    const logged = await getRepository(Login).findOne({
      username: login.username,
      password: login.password,
    });

    if (!logged) {
      this._validation.setMessage('Usuário ou senha inválido');
      return;
    }
  }
  loginIsValid(login: Login) {
    if (login._validation.invalid)
      this._validation.setMessage(login._validation.getErrorMessage());
  }

}

export default LoginService;

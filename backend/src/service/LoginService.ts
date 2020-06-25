import {getRepository} from 'typeorm';
import {Login} from '../entity/Login';
import Validation from '../entity/Validation';

class LoginService {

  verifyLoginIsEmpty(login: Login): Validation {
    let validation = new Validation();

    login.isEmpty(validation);

    if (validation.getInvalid()) {
      return validation;
    }

    return validation;
  }

  async getLogin(login: Login): Promise<Validation> {
    let validation = new Validation();

    const logged = await getRepository(Login).findOne({
      username: login.username,
      password: login.password,
    });

    if (!logged) {
      validation.setMessage('Usuário ou senha inválido');
      return validation;
    }
    return validation;
  }

  async saveLogin(login: Login): Promise<Login> {
    const createdLogin = await getRepository(Login).save(login);
    return createdLogin;
  }
}

export default new LoginService();

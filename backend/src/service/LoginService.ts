import { getRepository } from 'typeorm';
import { Login } from '../entity/Login';
import Validation from '../entity/Validation';

class LoginService {

 

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

}

export default new LoginService();

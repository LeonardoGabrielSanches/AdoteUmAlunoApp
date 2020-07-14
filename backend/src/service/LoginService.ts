import { getRepository } from 'typeorm';
import Login from '../entity/Login';
import Validation from '../models/Validation';
import { validate } from 'class-validator';

class LoginService {
  validation: Validation;

  constructor() {
    this.validation = new Validation();
  }

  async getLogin(login: Login) {
    await this.validateLogin(login);

    if (this.validation.invalid) return;

    const logged = await getRepository(Login).findOne({
      username: login.username,
      password: login.password,
    });

    if (!logged) {
      this.validation.setMessage('Usuário ou senha inválido');
    }
  }

 async validateLogin(login : Login){
    await validate(login)
    .then(errors =>
      {
        errors.map(error =>
          {
            this.validation.setMessage(error.constraints.minLength);
            this.validation.setMessage(error.constraints.isNotEmpty);
          }
          )
        });
        console.log(this.validation.getErrorMessage())
  }
}

export default LoginService;

import Validation from './Validation';
// eslint-disable-next-line import/no-cycle
import UserModel from './User';

class LoginModel {
    validation : Validation;

    constructor(username: string, password: string) {
      this.username = username;
      this.password = password;

      this.validation = new Validation();
      this.isEmpty();
    }

    username: string;

    password: string;

    user: UserModel;

    isEmpty() {
      if (this.username.length === 0) { this.validation.setMessage('Usuario não informado'); } else if (this.password.length === 0) { this.validation.setMessage('Senha não informada'); }
    }
}

export default LoginModel;

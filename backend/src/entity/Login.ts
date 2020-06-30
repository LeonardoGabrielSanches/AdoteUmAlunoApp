import {
  Entity, PrimaryColumn, Column, OneToOne,
} from 'typeorm';
import Validation from './Validation';
// eslint-disable-next-line import/no-cycle
import User from './User';

@Entity()
class Login {
  validation : Validation;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;

    this.validation = new Validation();
    this.isEmpty();
  }

  @PrimaryColumn({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToOne((type) => User, (user) => user.login)
  user: User;

  isEmpty() {
    if (this.username.length === 0) { this.validation.setMessage('Usuario não informado'); } else if (this.password.length === 0) { this.validation.setMessage('Senha não informada'); }
  }
}

export default Login;

import Validation from './Validation';

import { Entity, PrimaryColumn, Column, OneToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Login {
  _validation : Validation;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;

    this._validation = new Validation();
    this.isEmpty();
  }

  @PrimaryColumn({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToOne(type => User, user => user.login) 
  user: User;

  isEmpty() {
    if (this.username.length === 0)
      this._validation.setMessage('Usuario não informado');
    else if (this.password.length === 0)
      this._validation.setMessage('Senha não informada');
  }
}

import Validation from './Validation';

import { Entity, PrimaryColumn, Column, OneToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Login {
  @PrimaryColumn({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToOne(type => User, user => user.login) 
  user: User;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  isEmpty(validation: Validation): void {
    if (this.username.length === 0)
      validation.setMessage('Usuario não informado');
    else if (this.password.length === 0)
      validation.setMessage('Senha não informada');
  }
}

import {Entity, PrimaryColumn, Column} from 'typeorm';
import Validation from './Validation';

@Entity()
export class Login {
  @PrimaryColumn({unique: true})
  username: string;

  @Column()
  password: string;

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

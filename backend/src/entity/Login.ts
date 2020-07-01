import {
  Entity, PrimaryColumn, Column, OneToOne,
} from 'typeorm';
// eslint-disable-next-line import/no-cycle
import User from './User';

@Entity()
class Login {
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  @PrimaryColumn({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToOne((type) => User, (user) => user.login)
  user: User;
}

export default Login;

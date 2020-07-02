import {
  Entity, PrimaryColumn, Column, OneToOne, JoinColumn,
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

  @OneToOne((type) => User)
  user: User;
}

export default Login;

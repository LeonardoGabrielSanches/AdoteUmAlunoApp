import {
  Entity, PrimaryColumn, Column, OneToOne,
} from 'typeorm';
import User from './User';
import { MinLength, IsNotEmpty } from 'class-validator';

@Entity()
class Login {
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  @PrimaryColumn({ unique: true })
  @IsNotEmpty({message: "O nome de usuário deve estar preenchido."})
  @MinLength(3,{message:"O nome de usuário deve conter pelo menos 3 caracteres."})
  username: string;

  @Column()
  @IsNotEmpty({message:"A senha deve estar preenchida."})
  @MinLength(8,{message : "A senha deve conter pelo menos 8 caracteres."})
  password: string;

  @OneToOne((type) => User, (user) => user.login)
  user: User;
  
}

export default Login;

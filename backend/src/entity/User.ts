import {
  Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn,
} from 'typeorm';
// eslint-disable-next-line import/no-cycle
import Login from './Login';
import Validation from './Validation';

@Entity()
class User {
     validation : Validation;

     constructor(firstName: string,
       lastName: string,
       age: number,
       email: string,
       course: string,
       biography: string,
       phone: string,
       login: Login) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
       this.email = email;
       this.course = course;
       this.biography = biography;
       this.phone = phone;
       this.login = login;

       this.validation = new Validation();

       this.isUserValid();
     }

     isUserValid() {
       if (!this.firstName) { this.validation.setMessage('Nome não informado'); }

       if (this.login.validation.invalid) { this.validation.setMessage(this.login.validation.getErrorMessage()); }
     }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column()
    course: string;

    @Column()
    biography: string;

    @Column()
    phone: string;

    @OneToOne(() => Login, (login) => login.user)
    @JoinColumn()
    login: Login;
}

export default User;

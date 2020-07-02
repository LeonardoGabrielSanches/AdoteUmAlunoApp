import {
  Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn,
} from 'typeorm';
// eslint-disable-next-line import/no-cycle
import Login from './Login';

@Entity()
class User {
  constructor(firstName: string,
    lastName: string,
    age: number,
    email: string,
    course: string,
    biography: string,
    phone: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.course = course;
    this.biography = biography;
    this.phone = phone;
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

    @OneToOne((type) => Login)
    @JoinColumn()
    login : Login;
}

export default User;

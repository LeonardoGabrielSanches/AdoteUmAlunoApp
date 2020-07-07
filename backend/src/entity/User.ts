import {
  Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, JoinTable,
} from 'typeorm';
// eslint-disable-next-line import/no-cycle
import Login from './Login';
import Subject from './Subject';

@Entity()
class User {
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

    @ManyToMany(type => Subject, subject => subject.users)
    @JoinTable()
    subjects: Subject[];
}

export default User;


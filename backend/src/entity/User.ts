import { Login } from "./Login";
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import Validation from "./Validation";

@Entity()
export class User {

    constructor(firstName: string,lastName: string, age: number, email: string, course: string, biography: string, phone: string, login: Login) {
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

    @OneToOne(type => Login, login => login.user) 
    @JoinColumn()
    login: Login;
    
    
}

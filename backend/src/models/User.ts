// eslint-disable-next-line import/no-cycle
import LoginModel from './Login';
import Validation from './Validation';
import Subject from '../entity/Subject';

class UserModel {
       validation : Validation;

       constructor(firstName: string,
         lastName: string,
         age: number,
         email: string,
         course: string,
         biography: string,
         phone: string,
         login: LoginModel) {
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

      id: number;

      firstName: string;

      lastName: string;

      age: number;

      email: string;

      course: string;

      biography: string;

      phone: string;

      login: LoginModel;

      subjects: Subject[];
}

export default UserModel;

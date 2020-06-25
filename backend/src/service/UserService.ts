import { getRepository } from 'typeorm';
import Validation from '../entity/Validation';
import { User } from '../entity/User';
import { Login } from '../entity/Login';
import LoginService from './LoginService';

class UserService {

    async saveUser(user: User): Promise<User> {
        const createdLogin = await getRepository(User).save(user);
        await getRepository(Login).save(user.login);
        return createdLogin;
    }


    async verifyUsernIsEqual(user: User): Promise<Validation> {
        let validation = new Validation();

        const users = await getRepository(User).find();

        let field = '';

        const usernameAlredyExists = users.filter(userFilter => userFilter.login.username === user.login.username);

        if(usernameAlredyExists.length > 0)
          field = 'usuário'

        const emailAlredyExists = users.filter(userFilter => userFilter.login.username === user.login.username);

        if(emailAlredyExists.length > 0)
          field = 'email'

        if(field !== '')
          validation.setMessage(`O campo ${field} já existe.`); 

        if (validation.invalid) {
            return validation;
        }

        return validation;

    }

}

export default new UserService();
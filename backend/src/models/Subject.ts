import User from "../entity/User";
import Validation from "./Validation";

class SubjectModel {

    validation: Validation;

    constructor(name: string) {
        this.name = name;
        
        this.validation = new Validation();
        this.isEmpty();
    }

    name: string;

    users: User[];

    isEmpty() {
        if (this.name.length === 0) 
            this.validation.setMessage('Nome da matéria não informada');
    }

}

export default SubjectModel;
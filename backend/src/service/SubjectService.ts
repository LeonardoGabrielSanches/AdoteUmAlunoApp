import Validation from "../models/Validation";
import SubjectModel from "../models/Subject";

class SubjectService{

    validation: Validation;

    constructor() {
      this.validation = new Validation();
    }

    async getSubject(subject: SubjectModel) {
        this.loginIsValid(login);
    
      }







}
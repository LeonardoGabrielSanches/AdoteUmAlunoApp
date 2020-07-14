import Validation from "../models/Validation";
import Subject from '../entity/Subject';
import SubjectModel from "../models/Subject";
import SubjectRepository from "../repository/SubjectRepository"

class SubjectService {

    validation: Validation;

    constructor() {
        this.validation = new Validation();
    }

    SubjectIsValid(subject: SubjectModel) {
        if (subject.validation.invalid) {
            this.validation.setMessage(subject.validation.getErrorMessage());
        }
    }

    async saveSubject(subject: SubjectModel): Promise<Subject> {

        if (subject.validation.invalid) {
          this.validation.setMessage(subject.validation.getErrorMessage());
          return; 
        }

        const subjectRepository = new SubjectRepository();
        
        const subjectList = await subjectRepository.getSubjects();

        const subjectAlreadyExists = subjectList.filter(subjectFromList => subjectFromList.name === subject.name).length > 0;  
        
        if(subjectAlreadyExists){
            this.validation.setMessage(`A matéria ${subject.name} já existe`);
            return;
        }

        const newSubject = await subjectRepository.saveSubject(subject);

        return newSubject;
      }
}

export default SubjectService;
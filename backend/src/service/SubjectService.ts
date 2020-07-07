import Validation from "../models/Validation";
import SubjectModel from "../models/Subject";
import Subject from "../repository/SubjectRepository"

class SubjectService {

    validation: Validation;

    constructor() {
        this.validation = new Validation();
    }

    async getSubject(subject: SubjectModel) {

        const SubjectRepository = new Subject();


        this.SubjectIsValid(subject);

        if (this.validation.invalid) return;

        const findedSubject = SubjectRepository.getSubject(subject);

        if (!findedSubject) {
            this.validation.setMessage('Matéria não existente');
        }

    }

    SubjectIsValid(subject: SubjectModel) {
        if (subject.validation.invalid) {
            this.validation.setMessage(subject.validation.getErrorMessage());
        }
    }







}

export default SubjectService;
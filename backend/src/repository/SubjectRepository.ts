import { getRepository } from "typeorm";
import Subject from "../entity/Subject";
import SubjectModel from "../models/Subject";


class SubjectRepository {

    async getSubjects() : Promise<Subject[]>{
        return await getRepository(Subject).find();
    }

    async saveSubject(subject: SubjectModel) : Promise<Subject>{
        return await getRepository(Subject).save(subject);
    }
}

export default SubjectRepository;
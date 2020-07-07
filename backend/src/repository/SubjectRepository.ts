import { getRepository } from "typeorm";
import Subject from "../models/Subject";


class SubjectRepository {

    async getSubject(subject: Subject){

    const logged = await getRepository(Subject).findOne({name: subject.name,users: subject.users});

    }
}

export default SubjectRepository;
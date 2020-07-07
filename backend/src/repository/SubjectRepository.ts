import { getRepository } from "typeorm";
import Subject from "../entity/Subject";

class SubjectRepository {

    async getSubject(subject: Subject){

    const logged = await getRepository(Subject).findOne({name: subject.name,users: subject.users});

    }

}


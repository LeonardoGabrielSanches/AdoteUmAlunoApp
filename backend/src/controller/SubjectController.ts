import { Request, Response } from "express";
import SubjectService from "../service/SubjectService";
import SubjectModel from "../models/Subject";

export const CreateSubject = async (request: Request, response: Response) => {
    const { name } = request.body;

    try {
        const subjectService = new SubjectService();
    
        const subject = new SubjectModel(name); 

        const newSubject = await subjectService.saveSubject(subject);
    
        if (subjectService.validation.invalid) { 
            return response.status(400).json({ error: subjectService.validation.getErrorMessage() }); 
        }
    
        return response.status(201).send(newSubject);
      } catch (ex) {
        return response.json({ error: ex });
      }






}
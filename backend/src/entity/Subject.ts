import { PrimaryColumn, Column, ManyToMany } from "typeorm";
import User from "./User";

class Subject {

    constructor(name: string, user: User[]) {
        this.name = name;
    }

    @PrimaryColumn({ unique: true })
    id: number;

    @Column()
    name: string;

    // @ManyToMany(type => User, user => user.subjects)
    // users: User[];

}
export default Subject;
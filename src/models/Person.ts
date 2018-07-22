import { Table, Column, Model } from "sequelize-typescript";

@Table
class Person extends Model<Person> {
    @Column name: string;

    @Column age: number;
}

export default Person;

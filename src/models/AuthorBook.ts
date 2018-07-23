import { Column, ForeignKey, Model, Table } from "sequelize-typescript";

import { Author, Book } from "./";

@Table
class AuthorBook extends Model<AuthorBook> {
    @ForeignKey(() => Book)
    @Column
    public bookId: number;

    @ForeignKey(() => Author)
    @Column
    public authorId: number;
}

export default AuthorBook;

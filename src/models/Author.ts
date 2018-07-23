import { BelongsToMany, Column, Model, Table } from "sequelize-typescript";

import { AuthorBook, Book } from "./";

@Table
class Author extends Model<Author> {
    @Column public firstName: string;

    @Column public lastName: string;

    @BelongsToMany(() => Book, () => AuthorBook)
    public books: Book[];
}

export default Author;

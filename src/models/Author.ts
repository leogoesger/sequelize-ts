import {
    BelongsToMany,
    Column,
    CreatedAt,
    Model,
    Table,
    UpdatedAt,
} from "sequelize-typescript";

import { AuthorBook, Book } from "./";

@Table
class Author extends Model<Author> {
    @Column public firstName: string;

    @Column public lastName: string;

    @Column public email: string;

    @CreatedAt public createdAt: Date;
    @UpdatedAt public updatedAt: Date;

    @BelongsToMany(() => Book, () => AuthorBook)
    public books: Book[];
}

export default Author;

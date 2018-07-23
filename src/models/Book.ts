import { BelongsToMany, Column, Model, Table } from "sequelize-typescript";

// import { Author, AuthorBook } from "./";

@Table
class Book extends Model<Book> {
    @Column public title: string;

    @Column public publishedDate: Date;
}

export default Book;

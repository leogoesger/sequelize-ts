import {
    Column,
    CreatedAt,
    ForeignKey,
    Model,
    Table,
    UpdatedAt,
} from "sequelize-typescript";

import { Book, Climb } from "./";

@Table
class BookClimb extends Model<BookClimb> {
    @CreatedAt public createdAt: Date;
    @UpdatedAt public updatedAt: Date;

    @ForeignKey(() => Book)
    @Column
    public bookId: number;

    @ForeignKey(() => Climb)
    @Column
    public climbId: number;
}

export default BookClimb;

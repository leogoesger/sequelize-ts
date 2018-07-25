import {
    BelongsTo,
    Column,
    CreatedAt,
    ForeignKey,
    Model,
    Table,
    UpdatedAt,
} from "sequelize-typescript";

import { Book, Climb, User } from "./";

@Table
class Comment extends Model<Comment> {
    @Column public comment: string;

    @CreatedAt public createdAt: Date;
    @UpdatedAt public updatedAt: Date;

    @ForeignKey(() => Book)
    @Column
    public bookId: number;

    @ForeignKey(() => Climb)
    @Column
    public climbId: number;

    @ForeignKey(() => User)
    @Column
    public userId: number;

    @BelongsTo(() => Book)
    public book: Book;

    @BelongsTo(() => Climb)
    public climb: Climb;

    @BelongsTo(() => User)
    public user: User;
}

export default Comment;

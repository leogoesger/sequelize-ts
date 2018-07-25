import {
    AllowNull,
    Column,
    CreatedAt,
    DataType,
    ForeignKey,
    Table,
    Model,
    UpdatedAt,
} from "sequelize-typescript";

import { Book, User } from "./";

@Table
class UserBook extends Model<UserBook> {
    @CreatedAt public createdAt: Date;
    @UpdatedAt public updatedAt: Date;

    @ForeignKey(() => Book)
    @Column
    public bookId: number;

    @ForeignKey(() => User)
    @Column
    public userId: number;

    @AllowNull(true)
    @Column(DataType.ENUM(["FAVORITE", "PROGRESS", "PURCHASED"]))
    public status: "FAVORITE" | "PROGRESS" | "PURCHASED";
}

export default UserBook;

import {
    AllowNull,
    BelongsToMany,
    Column,
    CreatedAt,
    DataType,
    HasMany,
    Model,
    Table,
    UpdatedAt,
} from "sequelize-typescript";

import { Book, Climb, Comment, UserBook, UserClimb } from "./";

@Table
class User extends Model<User> {
    @AllowNull(false)
    @Column
    public firstName: string;

    @AllowNull(false)
    @Column
    public lastName: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    public email: string;

    @AllowNull(false)
    @Column
    public password: string;

    @Column(DataType.ENUM("MALE", "FEMAL", "OTHERS"))
    public sex: "MALE" | "FEMAL" | "OTHER";

    @AllowNull(false)
    @Column
    public birth: Date;

    @AllowNull(false)
    @Column
    public height: string;

    @AllowNull(false)
    @Column
    public apIndex: number;

    @AllowNull(false)
    @Column
    public startDate: Date;

    @Column(DataType.ENUM("ADMIN", "CUSTOMER", "SUPER", "USER"))
    public role: "ADMIN" | "CUSTOMER" | "SUPER" | "USER";

    @CreatedAt public createdAt: Date;
    @UpdatedAt public updatedAt: Date;

    @BelongsToMany(() => Book, () => UserBook)
    public books: Book[];

    @BelongsToMany(() => Climb, () => UserClimb)
    public climbs: Climb[];

    @HasMany(() => Comment)
    public comments: Comment[];
}

export default User;

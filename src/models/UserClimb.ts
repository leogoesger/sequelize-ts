import {
    Column,
    CreatedAt,
    DataType,
    ForeignKey,
    Table,
    Model,
    HasMany,
    UpdatedAt,
} from "sequelize-typescript";

import { Attempt, Climb, User } from "./";

@Table
class UserClimb extends Model<UserClimb> {
    @Column(DataType.ENUM(["TODO", "PROGRESS", "COMPLETE"]))
    public status: "TODO" | "PROGRESS" | "COMPLETE";

    @CreatedAt public createdAt: Date;
    @UpdatedAt public updatedAt: Date;

    @ForeignKey(() => Climb)
    @Column
    public climbId: number;

    @ForeignKey(() => User)
    @Column
    public userId: number;

    @HasMany(() => Attempt)
    public attempts: Attempt[];
}

export default UserClimb;

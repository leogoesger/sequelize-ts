import {
    BelongsTo,
    Column,
    CreatedAt,
    DataType,
    ForeignKey,
    Model,
    Table,
    UpdatedAt,
} from "sequelize-typescript";

import { UserClimb } from "./";

@Table
class Attempt extends Model<Attempt> {
    @Column public date: Date;

    @Column(DataType.ENUM(["SUCCESS", "FAIL"]))
    public status: "SUCCESS" | "FAIL";

    @CreatedAt public createdAt: Date;
    @UpdatedAt public updatedAt: Date;

    @ForeignKey(() => UserClimb)
    @Column
    public userClimbId: number;

    @BelongsTo(() => UserClimb)
    public userClimb: UserClimb;
}

export default Attempt;

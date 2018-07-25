import {
    BelongsToMany,
    Column,
    CreatedAt,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
    UpdatedAt,
} from "sequelize-typescript";

import { Book, BookClimb, Comment, Location } from "./";

@Table
class Climb extends Model<Climb> {
    @Column public name: string;

    @Column public grade: string;

    @Column(DataType.ENUM("BOULDER", "SPORTS", "TRAD"))
    public type: "BOULDER" | "SPORTS" | "TRAD";

    @Column public description: string;

    @Column public protection: string;

    @Column(DataType.ARRAY(DataType.STRING))
    public images: string[];

    @Column(DataType.ARRAY(DataType.STRING))
    public styles: string[];

    @Column(DataType.ARRAY(DataType.STRING))
    public labels: string[];

    @CreatedAt public createdAt: Date;
    @UpdatedAt public updatedAt: Date;

    @ForeignKey(() => Location)
    public locationId: Location;

    @BelongsToMany(() => Book, () => BookClimb)
    public books: Book[];

    @HasMany(() => Comment)
    public comments: Comment[];
}

export default Climb;

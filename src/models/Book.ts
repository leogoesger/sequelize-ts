import {
    BelongsToMany,
    Column,
    CreatedAt,
    HasMany,
    Model,
    Table,
    UpdatedAt,
} from "sequelize-typescript";

import { BookClimb, Climb, Comment } from "./";

@Table
class Book extends Model<Book> {
    @Column public title: string;

    @Column public description: string;

    @Column public publishedDate: Date;

    @Column public available: boolean;

    @CreatedAt public createdAt: Date;
    @UpdatedAt public updatedAt: Date;

    @BelongsToMany(() => Climb, () => BookClimb)
    public climbs: Climb[];

    @HasMany(() => Comment)
    public comments: Comment[];
}

export default Book;

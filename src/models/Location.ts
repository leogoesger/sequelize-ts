import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    HasMany,
} from "sequelize-typescript";
import { DataType } from "sequelize-typescript";

@Table
class Location extends Model<Location> {
    @Column name: string;

    @Column({
        type: DataType.TEXT,
    })
    description: string;

    @Column({
        type: DataType.JSONB,
    })
    geoCode?: string;

    @ForeignKey(() => Location)
    @Column
    locationId?: number;

    @BelongsTo(() => Location)
    location?: Location;

    @HasMany(() => Location)
    locations?: Location;
}

export default Location;

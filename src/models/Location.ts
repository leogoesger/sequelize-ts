import {
    BelongsTo,
    Column,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from "sequelize-typescript";
import { DataType } from "sequelize-typescript";

@Table
class Location extends Model<Location> {
    @Column public name: string;

    @Column({
        type: DataType.TEXT,
    })
    public description: string;

    @Column({
        type: DataType.JSONB,
    })
    public geoCode?: string;

    @ForeignKey(() => Location)
    @Column
    public locationId?: number;

    @BelongsTo(() => Location)
    public location?: Location;

    @HasMany(() => Location)
    public locations?: Location;
}

export default Location;

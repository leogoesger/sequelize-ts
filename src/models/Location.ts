import {
    AllowNull,
    BelongsTo,
    Column,
    CreatedAt,
    DataType,
    Default,
    ForeignKey,
    HasMany,
    Model,
    Table,
    UpdatedAt,
} from "sequelize-typescript";

import { Climb } from "./";

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

    @AllowNull(false)
    @Default(true)
    @Column
    public open: boolean;

    @AllowNull(false)
    @Column(
        DataType.ENUM("COUNTRY", "STATE", "REGION", "PLACE", "AREA", "SECTION")
    )
    public type: "COUNTRY" | "STATE" | "REGION" | "PLACE" | "AREA" | "SECTION";

    @CreatedAt public createdAt: Date;
    @UpdatedAt public updatedAt: Date;

    @ForeignKey(() => Location)
    @Column
    public countryId?: number;

    @ForeignKey(() => Location)
    @Column
    public stateId?: number;

    @ForeignKey(() => Location)
    @Column
    public regionId?: number;

    @ForeignKey(() => Location)
    @Column
    public placeId?: number;

    @ForeignKey(() => Location)
    @Column
    public areaId?: number;

    @BelongsTo(() => Location, "countryId")
    public country?: Location;

    @BelongsTo(() => Location, "stateId")
    public state?: Location;

    @BelongsTo(() => Location, "regionId")
    public region?: Location;

    @BelongsTo(() => Location, "placeId")
    public place?: Location;

    @BelongsTo(() => Location, "areaId")
    public area?: Location;

    @HasMany(() => Location, "countryId")
    public states?: Location[];

    @HasMany(() => Location, "stateId")
    public regions?: Location[];

    @HasMany(() => Location, "regionId")
    public places?: Location[];

    @HasMany(() => Location, "placeId")
    public areas?: Location[];

    @HasMany(() => Location, "areaId")
    public sections?: Location[];

    @HasMany(() => Climb)
    public climbs?: Climb[];
}

export default Location;

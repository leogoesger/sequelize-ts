import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from "sequelize-typescript";

import { Location } from "./";

@Table
class Climb extends Model<Climb> {
    @Column public name: string;

    @Column public grade: string;

    @Column(DataType.ENUM("BOULDER", "SPORTS", "TRAD"))
    public style: "BOULDER" | "SPORTS" | "TRAD";

    @Column public description: string;

    @Column public protection: string;

    @ForeignKey(() => Location)
    public locationId: Location;
}

export default Climb;

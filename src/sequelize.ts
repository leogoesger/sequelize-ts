import { Sequelize } from "sequelize-typescript";
import { db } from "./configs/sequelizedb";

const ENV = process.env.ENV || "dev",
    db_config = db[ENV];

export const sequelize = new Sequelize(db_config);

import { Sequelize } from "sequelize-typescript";
import { db } from "./configs/sequelizedb";

const ENV = process.env.ENV || "dev";

export const sequelize = new Sequelize(db[ENV]);

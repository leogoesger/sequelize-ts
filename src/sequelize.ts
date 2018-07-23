/* tslint:disable:no-console */

import { Sequelize } from "sequelize-typescript";
import { db } from "./configs/sequelizedb";

const ENV = process.env.ENV || "dev";

const sequelize = new Sequelize(db[ENV]);
export default sequelize;

/* tslint:disable: no-var-requires */

const db = require("./configs/config");
import { Sequelize } from "sequelize-typescript";

const ENV = process.env.ENV || "development";

const sequelize = new Sequelize(db[ENV]);
export default sequelize;

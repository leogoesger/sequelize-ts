/* tslint:disable: no-var-requires */

import { Sequelize } from "sequelize-typescript";
const db = require("./configs/config");

const ENV = process.env.ENV || "development";

const sequelize = new Sequelize(db[ENV]);
export default sequelize;

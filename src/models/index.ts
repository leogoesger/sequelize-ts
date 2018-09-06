// src/db/models/index.js

import * as Sequelize from "sequelize";
import productFactory from "./Product";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config.json")[env];
const url = config.url || process.env.DATABSE_CONNECTION_URI;

const sequelize = new Sequelize(url, config);

const db = {
    Product: productFactory(sequelize),
    Sequelize,
    sequelize,
};

(<any>Object).values(db).forEach((model: any) => {
    if (model.associate) {
        model.associate(db);
    }
});

export default db;

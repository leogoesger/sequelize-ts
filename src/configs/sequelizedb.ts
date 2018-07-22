const path = require("path");
import { Sequelize } from "sequelize-typescript";

interface Idb {
    [index: string]: any;
}
export const db: Idb = {
    dev: {
        dialect: "postgres",
        operatorsAliases: Sequelize.Op as any,
        host: "127.0.0.1",
        port: 5432,
        database: "gutsy_development_t",
        username: "postgres",
        password: null as any,
        modelPaths: [path.join(__dirname, "../models")],
    },
    prod: {
        dialect: "postgres",
        operatorsAliases: Sequelize.Op as any,
        host: "127.0.0.1",
        port: 5432,
        database: "gutsy_development_t",
        username: "postgres",
        password: null as any,
        modelPaths: [__dirname + "/models"],
    },
    test: {
        dialect: "postgres",
        operatorsAliases: Sequelize.Op as any,
        host: "127.0.0.1",
        port: 5432,
        database: "gutsy_development_t",
        username: "postgres",
        password: null as any,
        modelPaths: [__dirname + "/models"],
    },
};

/* tslint:disable:no-var-requires */

const path = require("path");
const fs = require("fs");
import { Sequelize } from "sequelize-typescript";

interface Idb {
    [index: string]: any;
}

const files = fs
    .readdirSync(path.join(__dirname, "../models"))
    .filter((file: any) => file !== "index.ts");

export const db: Idb = {
    dev: {
        database: "gutsy_development_t",
        dialect: "postgres",
        exclude: ["index.ts"],
        host: "127.0.0.1",
        modelPaths: files,
        operatorsAliases: Sequelize.Op as any,
        password: null as any,
        port: 5432,
        username: "postgres",
    },
    prod: {
        database: "gutsy_development_t",
        dialect: "postgres",
        host: "127.0.0.1",
        modelPaths: files,
        operatorsAliases: Sequelize.Op as any,
        password: null as any,
        port: 5432,
        username: "postgres",
    },
    test: {
        database: "gutsy_development_t",
        dialect: "postgres",
        host: "127.0.0.1",
        modelPaths: files,
        operatorsAliases: Sequelize.Op as any,
        password: null as any,
        port: 5432,
        username: "postgres",
    },
};

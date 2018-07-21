import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
    dialect: "postgres",
    operatorsAliases: Sequelize.Op as any,
    host: "127.0.0.1",
    port: 5432,
    database: "gutsy_development_t",
    username: "postgres",
    password: null,
    modelPaths: [__dirname + "/models"],
});

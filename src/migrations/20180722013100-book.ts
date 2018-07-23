"use strict";

exports.setup = (options: any, seedLink: any) => {
    let dbm;
    let type;
    let seed;
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = (db: any) => {
    return db.createTable("Book", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: "int",
        },
        publishedDate: "date",
        title: "string",
    });
};

exports.down = (db: any) => {
    return db.dropTable("Book");
};

exports._meta = {
    version: 1,
};

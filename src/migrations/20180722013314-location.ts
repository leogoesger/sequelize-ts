"use strict";

let dbm;
let type;
let seed;

exports.setup = (options: any, seedLink: any) => {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = (db: any) => {
    return db.createTable("Location", {
        description: "text",
        geoCode: "jsonb",
        locationId: "int",
        name: "string",
        open: "boolean",
    });
};

exports.down = (db: any) => {
    return db.dropTable("Location");
};

exports._meta = {
    version: 1,
};

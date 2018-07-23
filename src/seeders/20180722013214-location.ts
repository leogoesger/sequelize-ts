"use strict";

import { locations } from "../seederData";
import Location from "../models/Location";

import { sequelize } from "../sequelize";
sequelize.addModels(["../models"]);

let dbm;
let type;
let seed;

exports.setup = (options: any, seedLink: any) => {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = () => {
    return Location.bulkCreate(locations);
};

exports.down = () => {
    return Location.destroy({ where: {} });
};

exports._meta = {
    version: 1,
};

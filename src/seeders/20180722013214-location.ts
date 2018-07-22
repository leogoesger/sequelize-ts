"use strict";
import { sequelize } from "../sequelize";
sequelize.addModels(["../models"]);
import { locations } from "../seederData";
import Location from "../models/Location";

var dbm;
var type;
var seed;

exports.setup = function(options: any, seedLink: any) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function() {
    return Location.bulkCreate(locations);
};

exports.down = function() {
    return Location.destroy({ where: {} });
};

exports._meta = {
    version: 1,
};

"use strict";
import { sequelize } from "../sequelize";
sequelize.addModels(["../models"]);
import { persons } from "../seederData";
import Person from "../models/Person";

var dbm;
var type;
var seed;

exports.setup = function(options: any, seedLink: any) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function() {
    return Person.bulkCreate(persons);
};

exports.down = function() {
    return Person.destroy({ where: {} });
};

exports._meta = {
    version: 1,
};

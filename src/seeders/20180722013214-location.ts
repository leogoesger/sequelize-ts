"use strict";

import { locations } from "../seederData";
import Location from "../models/Location";

import sequelize from "../sequelize";
sequelize.addModels([Location]);

exports.up = () => {
    return Location.bulkCreate(locations);
};

exports.down = () => {
    return Location.destroy({ where: {} });
};

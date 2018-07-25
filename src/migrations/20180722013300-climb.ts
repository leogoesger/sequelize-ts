"use strict";
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface, dataTypes: DataTypes) => {
        return queryInterface.createTable("Climb", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            name: {
                type: dataTypes.TEXT,
                allowNull: false,
            },
            style: {
                type: dataTypes.ENUM,
                values: ["BOULDER", "SPORTS", "TRAD"],
            },
            description: {
                type: dataTypes.TEXT,
            },
            protection: {
                type: dataTypes.TEXT,
            },
            locationId: {
                type: dataTypes.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: dataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: dataTypes.DATE,
            },
        });
    },
    down: (queryInterface: any) => {
        return queryInterface.dropTable("Climb");
    },
};

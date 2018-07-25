"use strict";
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface, dataType: DataTypes) => {
        return queryInterface.createTable("Author", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: dataType.INTEGER,
            },
            firstName: {
                type: dataType.TEXT,
                allowNull: false,
            },
            lastName: {
                type: dataType.TEXT,
            },
            email: {
                type: dataType.TEXT,
            },
            createdAt: {
                allowNull: false,
                type: dataType.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: dataType.DATE,
            },
        });
    },
    down: (queryInterface: any) => {
        return queryInterface.dropTable("Author");
    },
};

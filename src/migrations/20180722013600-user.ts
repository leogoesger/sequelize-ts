"use strict";
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface, dataType: DataTypes) => {
        return queryInterface.createTable("User", {
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
                allowNull: false,
            },
            email: {
                type: dataType.TEXT,
                allowNull: false,
                unique: true,
            },
            password: {
                type: dataType.TEXT,
                allowNull: false,
            },
            sex: {
                type: dataType.ENUM,
                values: ["MALE", "FEMALE", "OTHER"],
                allowNull: true,
            },
            birth: {
                type: dataType.DATE,
                allowNull: false,
            },
            height: {
                type: dataType.TEXT,
                allowNull: false,
            },
            apIndex: {
                type: dataType.FLOAT,
                allowNull: false,
            },
            startDate: {
                type: dataType.DATE,
                allowNull: false,
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
        return queryInterface.dropTable("User");
    },
};

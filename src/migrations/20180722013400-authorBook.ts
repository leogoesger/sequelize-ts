"use strict";
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface, dataTypes: DataTypes) => {
        return queryInterface.createTable("AuthorBook", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            authorId: {
                type: dataTypes.INTEGER,
                allowNull: false,
            },
            bookId: {
                type: dataTypes.INTEGER,
                allowNull: false,
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
        return queryInterface.dropTable("AuthorBook");
    },
};

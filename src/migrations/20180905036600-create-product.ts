import * as Sequelize from "sequelize";
import { QueryInterface } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.createTable("Products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            price: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            archived: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: (queryInterface: QueryInterface) => {
        return queryInterface.dropTable("Products");
    },
};

"use strict";
module.exports = {
    up: (queryInterface: any, Sequelize: any) => {
        return queryInterface.createTable("Location", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            open: {
                type: Sequelize.BOOLEAN,
            },
            description: {
                type: Sequelize.TEXT,
            },
            geoCode: {
                type: Sequelize.TEXT,
            },
            locationId: {
                type: Sequelize.INTEGER,
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
    down: (queryInterface: any) => {
        return queryInterface.dropTable("Location");
    },
};

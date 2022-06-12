'use strict';

const { shopStatus, shopStatusDefault } = require('../src/constant/shopStatus.enum');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Shops', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            ownerId: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            address: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            status: {
                allowNull: false,
                type: Sequelize.ENUM(shopStatus),
                defaultValue: shopStatusDefault,
                onUpdate: 'cascade',
                onDelete: 'cascade'
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Shops');
    }
};
'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Shops', {
            _id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            owner_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Accounts',
                    key: '_id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            address: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            status_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'ShopStatuses',
                    key: '_id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Shops');
    }
};
'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Orders', {
            _id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            total: {
                allowNull: false,
                type: Sequelize.FLOAT,
                validate: {
                    min: 0
                }
            },
            account_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Accounts',
                    key: '_id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            shop_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Shops',
                    key: '_id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },

            orderDate: {
                allowNull: true,
                type: Sequelize.DATE
            },
            shipDate: {
                allowNull: true,
                type: Sequelize.DATE
            },

            status_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'OrderStatuses',
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
        await queryInterface.dropTable('Orders');
    }
};
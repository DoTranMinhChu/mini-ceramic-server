'use strict';

const { orderStatus, orderStatusDefault } = require('../src/constant/orderStatus.enum');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('orders', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            total: {
                allowNull: false,
                type: Sequelize.FLOAT,
                validate: {
                    min: 0
                }
            },
            userId: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            shopId: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: 'shops',
                    key: 'id'
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

            status: {
                allowNull: false,
                type: Sequelize.UUID,
                type: Sequelize.ENUM(orderStatus),
                defaultValue: orderStatusDefault,
                onUpdate: 'cascade',
                onDelete: 'cascade'
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('orders');
    }
};
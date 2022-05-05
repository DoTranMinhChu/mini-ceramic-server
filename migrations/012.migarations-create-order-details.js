'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('OrderDetails', {
            _id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            product_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Products',
                    key: '_id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            quantity: {
                allowNull: false,
                type: Sequelize.INTEGER,
                validate: {
                    min: 1
                }
            },
            order_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Orders',
                    key: '_id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },

            status_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'OrderDetailStatuses',
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
        await queryInterface.dropTable('OrderDetails');
    }
};
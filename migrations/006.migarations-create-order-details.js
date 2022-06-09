'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('OrderDetails', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            productId: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: 'Products',
                    key: 'id'
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
            orderId: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: 'Orders',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },

            status: {
                allowNull: false,
                type: Sequelize.ENUM("Processing", "Done", "Cancelled"),
                defaultValue: "Processing",
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
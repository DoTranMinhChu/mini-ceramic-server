'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Orders', {
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
            accountId: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: 'Accounts',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            shopId: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: 'Shops',
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
                type: Sequelize.ENUM("Processing", "Shipped", "Cancelled"),
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
        await queryInterface.dropTable('Orders');
    }
};
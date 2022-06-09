'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Products', {
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
            price: {
                allowNull: false,
                type: Sequelize.FLOAT,
                validate: {
                    min: 0
                }
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            image: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            categoryId: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: 'ProductCategories',
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
            status: {
                allowNull: false,
                type: Sequelize.ENUM("Active", "Out of stock", "Hidden", "Delete"),
                defaultValue: "Active",
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
        await queryInterface.dropTable('Products');
    }
};
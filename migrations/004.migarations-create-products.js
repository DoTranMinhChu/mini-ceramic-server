'use strict';

const { productStatus, productStatusDefault } = require('../src/constant/productStatus.enum');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('products', {
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
                    model: 'categories',
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
                type: Sequelize.ENUM(productStatus),
                defaultValue: productStatusDefault,
                onUpdate: 'cascade',
                onDelete: 'cascade'
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('products');
    }
};
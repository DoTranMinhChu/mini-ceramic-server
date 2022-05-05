'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Products', {
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


            category_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'ProductCategories',
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
            status_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'ProductStatuses',
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
        await queryInterface.dropTable('Products');
    }
};
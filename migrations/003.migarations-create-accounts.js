'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Accounts', {
            _id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            username: {
                allowNull: false,
                type: Sequelize.STRING
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING
            },
            fullName: {
                allowNull: false,
                type: Sequelize.STRING
            },
            avatar: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            address: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            phone: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            balance: {
                defaultValue: 0,
                allowNull: false,
                type: Sequelize.FLOAT,

                validate: {
                    min: 0
                }
            },
            role_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'AccountRoles',
                    key: '_id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            status_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'AccountStatuses',
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
        await queryInterface.dropTable('Accounts');
    }
};
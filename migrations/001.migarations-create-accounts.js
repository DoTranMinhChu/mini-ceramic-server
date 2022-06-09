'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Accounts', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
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
            role: {
                allowNull: false,
                type: Sequelize.ENUM("Admin", "User"),
                defaultValue: "User",
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            status: {
                allowNull: false,
                type: Sequelize.ENUM("Active", "UnActive", "Delete"),
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
        await queryInterface.dropTable('Accounts');
    }
};
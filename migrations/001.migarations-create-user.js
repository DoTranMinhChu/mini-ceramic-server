'use strict';
const { role, roleDefault } = require('../src/constant/role.enum');
const { userStatus, userStatusDefault } = require('../src/constant/userStatus.enum');


module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
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
                type: Sequelize.ENUM(role),
                defaultValue: roleDefault,
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            status: {
                allowNull: false,
                type: Sequelize.ENUM(userStatus),
                defaultValue: userStatusDefault,
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};
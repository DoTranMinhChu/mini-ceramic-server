'use strict';

const { v4: uuidv4 } = require('uuid');


const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Accounts extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Accounts.belongsTo(models.Orders, { foreignKey: 'id', sourceKey: 'accountid' });


        }
    }
    Accounts.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        fullName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        avatar: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        address: {
            allowNull: true,
            type: DataTypes.TEXT
        },
        phone: {
            allowNull: true,
            type: DataTypes.TEXT
        },
        balance: {
            defaultValue: 0,
            allowNull: false,
            type: DataTypes.FLOAT,

            validate: {
                min: 0
            }
        },
        role: {
            allowNull: false,
            type: DataTypes.ENUM("Admin", "User"),
            defaultValue: "User",
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        status: {
            allowNull: false,
            type: DataTypes.ENUM("Active", "UnActive", "Delete"),
            defaultValue: "Active",
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }

    }, {
        sequelize,
        modelName: 'Accounts',
    });
    Accounts.beforeCreate(user => user.id = uuidv4())
    return Accounts;
};
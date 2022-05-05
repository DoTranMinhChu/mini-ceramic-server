'use strict';
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
            Accounts.hasOne(models.AccountRoles, { foreignKey: '_id', sourceKey: 'role_id' });
            Accounts.hasOne(models.AccountStatuses, { foreignKey: '_id', sourceKey: 'status_id' });


        }
    }
    Accounts.init({
        _id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
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
        role_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'AccountRoles',
                key: '_id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        status_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'AccountStatuses',
                key: '_id'
            },
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
    return Accounts;
};
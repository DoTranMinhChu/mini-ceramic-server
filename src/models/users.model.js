'use strict';

const { v4: uuidv4 } = require('uuid');


const { Model } = require('sequelize');
const { role, roleDefault } = require('../constant/role.enum');
const { userStatus, userStatusDefault } = require('../constant/userStatus.enum');


module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Users.belongsTo(models.Orders, { foreignKey: 'id', sourceKey: 'userid' });


        }
    }
    Users.init({
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
            type: DataTypes.ENUM(role),
            defaultValue: roleDefault,
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        status: {
            allowNull: false,
            type: DataTypes.ENUM(userStatus),
            defaultValue: userStatusDefault,
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
    }, {
        sequelize,
        modelName: 'Users',
        timestamps: false,
        createdAt: false,
        updatedAt: false
    }
    );
    Users.beforeCreate(user => user.id = uuidv4())
    return Users;
};
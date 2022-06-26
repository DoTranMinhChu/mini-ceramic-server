'use strict'

const { v4: uuidv4 } = require('uuid');
const { Model } = require('sequelize');
const { orderStatus, orderStatusDefault } = require('../constant/orderStatus.enum');

module.exports = (sequelize, DataTypes) => {
    class Orders extends Model {
        static associate(models) {
            Orders.hasOne(models.Users, { foreignKey: 'id', sourceKey: 'userId', as: 'users', as: 'user' })
            Orders.hasOne(models.Shops, { foreignKey: 'id', sourceKey: 'shopId', as: 'shops', as: 'shop' })
            Orders.hasMany(models.OrderDetails, { foreignKey: 'orderId', sourceKey: 'id', as: 'details' })
        }
    }
    Orders.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        total: {
            allowNull: false,
            type: DataTypes.FLOAT,
            validate: {
                min: 0
            }
        },
        userId: {
            allowNull: false,
            type: DataTypes.UUID,
            references: {
                model: 'Users',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        shopId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Shops',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },

        orderDate: {
            allowNull: true,
            type: DataTypes.DATE
        },
        shipDate: {
            allowNull: true,
            type: DataTypes.DATE
        },

        status: {
            allowNull: false,
            type: DataTypes.ENUM(orderStatus),
            defaultValue: orderStatusDefault,
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        paid: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            onUpdate: 'cascade',
            onDelete: 'cascade'
        }
    }, {
        sequelize,
        modelName: 'Orders',
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
    Orders.beforeCreate(user => user.id = uuidv4())
    return Orders;
}
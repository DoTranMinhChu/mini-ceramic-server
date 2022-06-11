'use strict'

const { v4: uuidv4 } = require('uuid');
const { Model } = require('sequelize');
const { orderDetailStatus, orderDetailStatusDefault } = require('../constant/orderDetailStatus.enum');

module.exports = (sequelize, DataTypes) => {
    class OrderDetails extends Model {
        static associate(models) {

        }
    }
    OrderDetails.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        productId: {
            allowNull: false,
            type: DataTypes.UUID,
            references: {
                model: 'Products',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        quantity: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
                min: 1
            }
        },
        orderId: {
            allowNull: false,
            type: DataTypes.UUID,
            references: {
                model: 'Orders',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },

        status: {
            allowNull: false,
            type: DataTypes.ENUM(orderDetailStatus),
            defaultValue: orderDetailStatusDefault,
            onUpdate: 'cascade',
            onDelete: 'cascade'
        }
    }, {
        sequelize,
        modelName: 'OrderDetails',
        createdAt: false,
        updatedAt: false
    })
    OrderDetails.beforeCreate(user => user.id = uuidv4())
    return OrderDetails;
}
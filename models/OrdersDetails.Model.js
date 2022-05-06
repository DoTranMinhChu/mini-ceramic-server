'use strict'
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class OrderDetails extends Model {
        static associate(models) {

        }
    }
    OrderDetails.init({
        _id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        product_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Products',
                key: '_id'
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
        order_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Orders',
                key: '_id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },

        status_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'OrderDetailstatuses',
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
        modelName: 'OrderDetails'
    })
    return OrderDetails;
}
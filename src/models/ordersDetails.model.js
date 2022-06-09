'use strict'

const { v4: uuidv4 } = require('uuid');


const {
    Model
} = require('sequelize');

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
            type: DataTypes.ENUM("Processing", "Done", "Cancelled"),
            defaultValue: "Processing",
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
    OrderDetails.beforeCreate(user => user.id = uuidv4())
    return OrderDetails;
}
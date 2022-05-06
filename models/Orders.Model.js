'use strict'
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Orders extends Model {
        static associate(models) {
            Orders.hasOne(models.Accounts,{foreignKey:'_id',sourceKey:'account_id'})
            Orders.hasOne(models.Shops,{foreignKey:'_id',sourceKey:'shop_id'})
            Orders.hasOne(models.OrderStatuses,{foreignKey:'_id',sourceKey:'status_id'})
        }
    }
    Orders.init({
        _id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        total: {
            allowNull: false,
            type: DataTypes.FLOAT,
            validate: {
                min: 0
            }
        },
        account_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Accounts',
                key: '_id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        shop_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Shops',
                key: '_id'
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

        status_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Orderstatuses',
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
        modelName: 'Orders'
    })
    return Orders;
}
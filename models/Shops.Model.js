'use strict'
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Shops extends Model {
        static associate(models) {
            Shops.belongsTo(models.Orders, { foreignKey: '_id' });
            Shops.belongsTo(models.Products, { foreignKey: '_id' });
        }
    }
    Shops.init({
        _id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        owner_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Accounts',
                key: '_id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        address: {
            allowNull: true,
            type: DataTypes.TEXT
        },
        status_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'ShopStatuses',
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
        modelName: 'Shops'
    })
    return Shops;
}
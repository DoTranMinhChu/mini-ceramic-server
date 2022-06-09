'use strict'

const { v4: uuidv4 } = require('uuid');


const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Shops extends Model {
        static associate(models) {
            Shops.belongsTo(models.Orders, { foreignKey: 'id' });
            Shops.belongsTo(models.Products, { foreignKey: 'id' });
        }
    }
    Shops.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        ownerId: {
            allowNull: false,
            type: DataTypes.UUID,
            references: {
                model: 'Accounts',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        address: {
            allowNull: true,
            type: DataTypes.TEXT
        },
        status: {
            allowNull: false,
            type: DataTypes.ENUM("Open", "Close", "Delete"),
            defaultValue: "Open",
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
    Shops.beforeCreate(user => user.id = uuidv4())
    return Shops;
}
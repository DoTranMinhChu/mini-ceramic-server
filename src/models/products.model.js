'use strict'

const { v4: uuidv4 } = require('uuid');


const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
        static associate(models) {
            Products.hasOne(models.ProductCategories, { foreignKey: 'id', sourceKey: 'categoryId' })
            Products.hasOne(models.Shops, { foreignKey: 'id', sourceKey: 'shopId' })
        }
    }
    Products.init({
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
        price: {
            allowNull: false,
            type: DataTypes.FLOAT,
            validate: {
                min: 0
            }
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        image: {
            allowNull: false,
            type: DataTypes.TEXT,
        },


        categoryId: {
            allowNull: false,
            type: DataTypes.UUID,
            references: {
                model: 'ProductCategories',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },

        shopId: {
            allowNull: false,
            type: DataTypes.UUID,
            references: {
                model: 'Shops',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        status: {
            allowNull: false,
            type: DataTypes.ENUM("Active", "Out of stock", "Hidden", "Delete"),
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
        modelName: 'Products'
    })
    Products.beforeCreate(user => user.id = uuidv4())
    return Products;
}
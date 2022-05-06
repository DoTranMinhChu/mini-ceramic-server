'use strict'
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
        static associate(models) {
            Products.hasOne(models.ProductCategories,{foreignKey:'_id',sourceKey:'category_id'})
            Products.hasOne(models.ProductStatuses,{foreignKey:'_id',sourceKey:'status_id'})
            Products.hasOne(models.Shops,{foreignKey:'_id',sourceKey:'shop_id'})
        }
    }
    Products.init({
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


        category_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'ProductCategories',
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
        status_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'ProductStatuses',
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
        modelName: 'Products'
    })
    return Products;
}
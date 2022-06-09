'use strict';

const { v4: uuidv4 } = require('uuid');


const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductCategories extends Model {
        static associate(models) {
            ProductCategories.belongsTo(models.Products, { foreignKey: 'id' });
        }
    }
    ProductCategories.init({
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
        modelName: 'ProductCategories',
    });
    ProductCategories.beforeCreate(user => user.id = uuidv4())
    return ProductCategories;
};
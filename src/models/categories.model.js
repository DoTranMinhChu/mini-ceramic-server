'use strict';

const { v4: uuidv4 } = require('uuid');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Categories extends Model {
        static associate(models) {
            Categories.belongsTo(models.Products, { foreignKey: 'id'});
        }
    }
    Categories.init({
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
        }
    }, {
        sequelize,
        modelName: 'Categories',
        createdAt: false,
        updatedAt: false
    });
    Categories.beforeCreate(user => user.id = uuidv4())
    return Categories;
};
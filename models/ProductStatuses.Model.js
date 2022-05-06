'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductStatuses extends Model {
        static associate(models) {
            ProductStatuses.belongsTo(models.Products, { foreignKey: '_id' });
        }
    }
    ProductStatuses.init({
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
        modelName: 'ProductStatuses',
    });
    return ProductStatuses;
};
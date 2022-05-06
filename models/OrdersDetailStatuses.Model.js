'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OrderDetailStatuses extends Model {
        static associate(models) {

            // OrderDetailStatuses.belongsTo(models.Accounts, { foreignKey: '_id' });
        }
    }
    OrderDetailStatuses.init({
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
        modelName: 'OrderDetailStatuses',
    });
    return OrderDetailStatuses;
};
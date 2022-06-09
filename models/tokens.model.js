'use strict';

const { v4: uuidv4 } = require('uuid');


const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Token extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            Token.belongsTo(models.Products, { foreignKey: '_id' });
        }
    }
    Token.init({
        _id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.UUID
        },
        user_id: {
            allowNull: false,
            type: DataTypes.UUID,
            references: {
                model: 'Accounts',
                key: '_id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        agent: {
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
        modelName: 'Tokens',
    });
    Token.beforeCreate(user => user._id = uuidv4())
    return Token;
};
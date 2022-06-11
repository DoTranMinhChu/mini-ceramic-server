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

            Token.belongsTo(models.Products, { foreignKey: 'id' });
        }
    }
    Token.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.UUID
        },
        userId: {
            allowNull: false,
            type: DataTypes.UUID,
            references: {
                model: 'Accounts',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        agent: {
            allowNull: false,
            type: DataTypes.STRING
        },
        expiresOn: {
            allowNull: false,
            type: DataTypes.BIGINT
        }
    }, {
        sequelize,
        modelName: 'Tokens',
        createdAt: false,
        updatedAt: false
    });
    Token.beforeCreate(user => user.id = uuidv4())
    return Token;
};
const db = require("../models");
const { Op } = require("sequelize");

const issueToken = async (userId, expiresOn, agent) => {
    return (
        await db.Tokens.create({
            userId: userId,
            agent: agent,
            expiresOn: new Date().getTime() + expiresOn,
        })
    )?.dataValues;
}


const getRefreshTokenById = async (id) => {
    return (
        await db.Tokens.findOne({
            where: {
                id: id,
                expiresOn: {
                    [Op.gt]: new Date().getTime()
                }
            }
        })
    )?.dataValues;
}

const deleteRefreshTokenById = async (id, userId, agent) => {
    return (
        await db.Tokens.destroy(
            {
                where: {
                    id: id,
                    userId: userId,
                    agent: agent
                }
            }
        )
    )?.dataValues;
}

const deleteTokenExpireByUserId = async (userId) => {
    return (
        await db.Tokens.destroy(
            {
                where: {
                    userId: userId,
                    expiresOn: {
                        [Op.lt]: new Date().getTime()
                    }
                }
            }
        )
    )?.dataValues;
}

module.exports = {
    issueToken,
    getRefreshTokenById,
    deleteRefreshTokenById,
    deleteTokenExpireByUserId
}
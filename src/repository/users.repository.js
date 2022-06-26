const db = require("../models");

const findOne = async (where) => {
    return (await db.Users.findOne({ where: where }))?.dataValues;
}

const createNewUser = async (user) => {
    return (
        await db.Users.create({
            username: user.username,
            password: user.password,
            fullName: user.fullName,
            avatar: user.avatar,
        })
    )?.dataValues;
}



const getUserByUsername = async (username) => {
    return (
        await db.Users.findOne(
            {
                where:
                {
                    username: username
                }
            }
        )
    )?.dataValues;
}

const getUserByUserId = async (userId) => {
    return (
        await db.Users.findOne(
            {
                where:
                {
                    id: userId
                }
            }
        )
    )?.dataValues;
}

module.exports = {
    findOne,
    createNewUser,
    getUserByUsername,
    getUserByUserId,
}
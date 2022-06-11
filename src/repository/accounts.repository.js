const db = require("../models");

const createNewAccount = async (account) => {
    return (
        await db.Accounts.create({
            username: account.username,
            password: account.password,
            fullName: account.fullName,
            avatar: account.avatar,
        })
    )?.dataValues;
}



const getAccountByUsername = async (username) => {
    return (
        await db.Accounts.findOne(
            {
                where:
                {
                    username: username
                }
            }
        )
    )?.dataValues;
}

const getAccountByUserId = async (userId) => {
    return (
        await db.Accounts.findOne(
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
    createNewAccount,
    getAccountByUsername,
    getAccountByUserId,
}
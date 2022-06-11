const db = require("../models");

const issueToken = async (userId, expiresOn, agent) => {
    return (
        await db.Tokens.create({
            userId: userId,
            agent: agent,
            expiresOn: new Date().getTime() + expiresOn,
        })
    )?.dataValues;
}




module.exports = {
    issueToken
}
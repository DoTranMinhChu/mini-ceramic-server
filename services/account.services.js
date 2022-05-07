const db = require("../models")
const bcrypt = require('bcrypt')

const createNewAccount = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const password = await hasPassword(data.password);
            await db.Accounts.create({
                username: data.username,
                password: password,
                fullName: data.fullName,
                avatar: data.avatar,
                role_id: 1,
                status_id: 1
            })
            resolve('Create successfully')
        } catch (e) {
            reject(e)
        }
    })
}

const hasPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            resolve(hash)
        } catch (err) {
            reject(err);
        }
    })
}

const loginAccount = (username, password) => {
    return new Promise(async (resolve, reject) => {
        getAccountByUsername(username)
            .then(async account => {
                try {
                    const check = await bcrypt.compareSync(password, account.password);
                    if (check) {
                        resolve(account)
                    } else {
                        reject('Err password')
                    }

                } catch (err) {
                    reject(err)
                }
            }).catch(err => {
                reject(err)
            })


    })
}

const getAccountByUsername = (username) => {
    return new Promise(async (resolve, reject) => {
        try {
            const account = await db.Accounts.findOne({ where: { username: username } })
            if (account != null) {
                resolve(account)
            } else {
                reject('err username')
            }

        } catch (err) {
            reject(err)
        }
    })
}

module.exports = {
    createNewAccount,
    loginAccount
}
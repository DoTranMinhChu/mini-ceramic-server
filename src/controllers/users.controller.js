const { httpRespone } = require('../response/http.response');
const userrServices = require('../services/user.service')

const getUserInfo = async (req, res) => {
    const userrResponse = await userrServices.getUserInfomationByUserId(req, res);
    return httpRespone(res, userrResponse);
}

const registerUser = async (req, res) => {
    const newUser = await userrServices.createNewUser(req, res);
    return httpRespone(res, newUser);
}

const loginUser = async (req, res) => {
    const loginResponse = await userrServices.loginUser(req, res);
    return httpRespone(res, loginResponse);
}
const issueNewAccessToken = async (req, res) => {
    const newAccessToken = await userrServices.renewAccessToken(req, res);
    return httpRespone(res, newAccessToken);

}
module.exports = {
    getUserInfo,
    registerUser,
    loginUser,
    issueNewAccessToken
}
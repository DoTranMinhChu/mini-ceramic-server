const { httpRespone } = require('../response/http.response');
const userServices = require('../services/user.service')

const getUserInfo = async (req, res) => {
    const userrResponse = await userServices.getUserInfomationByUserId(req, res);
    return httpRespone(res, userrResponse);
}

const registerUser = async (req, res) => {
    const newUser = await userServices.createNewUser(req, res);
    return httpRespone(res, newUser);
}

const loginUser = async (req, res) => {
    const loginResponse = await userServices.loginUser(req, res);
    return httpRespone(res, loginResponse);
}

const logoutUser = async (req,res)=>{
    const logoutResponse = await userServices.logoutUser(req,res);
    return httpRespone(res,logoutResponse);
}
const issueNewAccessToken = async (req, res) => {
    const newAccessToken = await userServices.renewAccessToken(req, res);
    return httpRespone(res, newAccessToken);

}
module.exports = {
    getUserInfo,
    registerUser,
    loginUser,
    logoutUser,
    issueNewAccessToken
}
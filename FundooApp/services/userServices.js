import axios from 'axios';

const baseURL = 'http://192.168.0.37:3000'

function userRegister(data) {
    return axios(baseURL + '/registration', {
        method: 'POST',
        data: data
    })
}

function userLogin(data) {
    return axios(baseURL + '/login', {
        method: 'POST',
        data: data
    })
}

function userForgotPassword(data){
    return axios(baseURL + '/forgotPassword', {
        method: 'POST',
        data: data
    })
}


export { userRegister, userLogin,userForgotPassword }
import axios from 'axios';

const baseURL = 'http://192.168.0.204:3000'

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

function userForgotPassword(data) {
    return axios(baseURL + '/forgotPassword', {
        method: 'POST',
        data: data
    })
}

function userResetPassword(data) {
    return axios(baseURL + '/resetPassword', {
        method: 'POST',
        data: data
    })
}

function createNote(data) {
    return axios(baseURL + '/createNote', {
        method: 'POST',
        data: data
    })
}

function getNotes(data) {
    return axios(baseURL + '/getAllNotes', {
        method: 'POST',
        data: data
    })
}


function archiveNotes() {
    return axios(baseURL + '/archiveNotes', {
        method: 'GET',
    })
}

export { userRegister, userLogin, userForgotPassword, userResetPassword, createNote, getNotes, archiveNotes }
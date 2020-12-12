import axios from 'axios'
import { Cookies } from 'quasar'

export const register = async ({},data) => {
    let response = await axios.post('http://localhost:5000/api/user/signup', data );
    if(response.data.error === false) {
        Cookies.set('token', response.data.token)
    }
    return {
        error: response.data.error,
        msg: response.data.msg
    }
}

export const login = async ({},data) => {
    let response = await axios.post('http://localhost:5000/api/user/login', data );
    if(response.data.error === false) {
        Cookies.set('token', response.data.token)
    }
    return {
        error: response.data.error,
        msg: response.data.msg
    }
}

export const verify = async ({commit}) => {
    let token = Cookies.get('token')
    let response = await axios.post('http://localhost:5000/api/user/verify-user', {token} )
    if(response.data.error === false) {
        commit('setUser', response.data.data);
        return {
            error: false,
            data: response.data.data
        }
    }
    return {
        error: true
    }
}

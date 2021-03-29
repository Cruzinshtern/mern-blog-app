import * as api from '../api/index';
import jwt_decode from 'jwt-decode';

export class Auth {
    static async login(user) {
        const { data } = await api.loginUser(user);
        localStorage.setItem('token', data.token);
    }
    static decodeTokenWithId() {
        const token = localStorage.getItem('token')
        if(!token) return
        const { data } = jwt_decode(token);
        return data._id;
    }
}

export default new Auth();

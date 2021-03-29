import * as api from '../api/index'

export class Auth {
    static async login(user) {
        const { data } = await api.loginUser(user);
        localStorage.setItem('token', data.token);
    }
}

export default new Auth();

import * as api from '../api/index'

export const getAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getAllUsers();
        dispatch({ type: 'GET_ALL', payload: data.items })
    } catch (e) {
        console.log(e.message)
    }
}

export const registerUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.registerUser(user);
        dispatch({ type: 'REGISTER', payload: data })
    } catch (e) {
        console.log(e.message)
    }
}


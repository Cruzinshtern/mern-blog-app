import * as api from '../api/index'

export const getAllPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getAllPosts();
        // console.log(data.items)
        dispatch({ type: 'GET_ALL', payload: data.items })
    } catch (e) {
        console.log(e.message)
    }

}

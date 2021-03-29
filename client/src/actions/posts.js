import * as api from '../api/index'

export const getAllPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getAllPosts();
        dispatch({ type: 'GET_ALL', payload: data.items })
    } catch (e) {
        console.log(e.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data })
    } catch (e) {
        console.log(e.message)
    }
}

import axios from 'axios';

export const BASIC_POSTS_URL = 'http://localhost:3001/posts';
export const BASIC_USERS_URL = 'http://localhost:3001/users';

export const getAllPosts = () => axios.get(BASIC_POSTS_URL);
export const createPost = (post) => axios.post(BASIC_POSTS_URL, post);


export const getAllUsers = () => axios.get(BASIC_USERS_URL);
export const registerUser = (user) => axios.post(BASIC_USERS_URL + '/register', user)
export const loginUser = (user) => axios.post(BASIC_USERS_URL + '/login', user)
export const getOneUser = (id) => axios.get(BASIC_USERS_URL + `/${id}`)

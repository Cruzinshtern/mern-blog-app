import {useState, useEffect, useCallback} from "react";
import * as api from "../api";
import jwt_decode from "jwt-decode";
// import * as api from "../api";
// import {useLocation} from "react-router";
// import jwt_decode from "jwt-decode";

export const useAuth = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [isAuth, setIsAuth] = useState();

    const login = useCallback(async (user) => {
        const {data} = await api.loginUser(user);
        setToken(data.token);
        localStorage.setItem('token', data.token)
    }, [])

    const logout = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
    }, [])

    const decodeTokenWithId = () => {
        const token = localStorage.getItem('token')
        if(!token) return
        const { data } = jwt_decode(token);
        return data._id;
    };
    // const va = login || logout;

    // useEffect(() => {
    //     const data = localStorage.getItem('token');
    //     if(!data) {
    //         setIsAuth(false);
    //     } else {
    //         setIsAuth(true)
    //     }
    // }, [login])
    // console.log(isAuth)


    return {login, logout, token, isAuth, decodeTokenWithId}
}

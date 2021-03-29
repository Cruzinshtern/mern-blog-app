import {useDispatch, useSelector} from "react-redux";
import {getOneUser} from "../actions/users";
import {useEffect} from "react";
import {useAuth} from "../hooks/useAuth.hook";


function Profile () {

    const {decodeTokenWithId} = useAuth();
    const userId = decodeTokenWithId();
    const user = useSelector((state => state.users))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneUser(userId));
    }, [dispatch, userId]);

    return (
        <div>
            <h2>Hello, {user.name}</h2>
            <p>Your username is: {user.username}</p>
            <p>Your email is: {user.email}</p>
        </div>

    )
}

export default Profile;

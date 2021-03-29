import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../actions/users";
import User from "./User";

function Users () {
    const users = useSelector((state => state.users));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch]);

    return (
        !users.length ? 'Waiting' : (
            users.map(user => (
                <User key={user._id} user={user} />
            ))
        )
    )
}

export default Users;

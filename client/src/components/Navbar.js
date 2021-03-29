import {Link} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.hook";
// import {Auth} from "../services/auth";
// import {useLocation} from "react-router";
// import {useEffect} from "react";

function Navbar() {

    const {logout} = useAuth();

    return (
        <nav>
            <div className="nav-wrapper">
                <li className="left brand-logo"><Link to="/homepage">MyPost</Link></li>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/new-post">New Post</Link></li>
                    <li><Link to="/users">All users</Link></li>
                    <li><Link to="/posts">All posts</Link></li>
                    <li><Link to="/profile">My profile</Link></li>
                    <li onClick={logout}><Link to="/login">Logout</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

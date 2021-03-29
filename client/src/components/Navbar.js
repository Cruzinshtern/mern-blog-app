import {Link} from "react-router-dom";


function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <li className="left brand-logo"><Link to="/homepage">MyPost</Link></li>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/new-post">New Post</Link></li>
                    <li><Link to="/users">All users</Link></li>
                    <li><Link to="/posts">All posts</Link></li>
                    <li><Link to="/test">My posts</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

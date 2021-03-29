import {Link} from "react-router-dom";


function Navbar () {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/new-post'>New post</Link>
                    </li>
                    <li>
                        <Link to='/users'>All users</Link>
                    </li>
                    <li>
                        <Link to='/posts'>All posts</Link>
                    </li>
                    <li>
                        <Link to='/test'>My posts</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;

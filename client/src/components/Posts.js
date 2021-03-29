import {useSelector} from "react-redux";
import Post from "./Post";

function Posts () {

    const posts = useSelector((state) => state.posts);

    return (
            !posts.length ? 'Waiting' : (
                posts.map(post => (
                    <div key={ post._id }>
                        <Post post={ post } />
                    </div>
                ))
            )
    )
}
export default Posts;

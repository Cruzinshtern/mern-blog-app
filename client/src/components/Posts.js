import {useDispatch, useSelector} from "react-redux";
import Post from "./Post";
import {useEffect} from "react";
import {getAllPosts} from "../actions/posts";

function Posts () {

    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    return (
            !posts.length ? 'Waiting' : (
                posts.map(post => (
                    <Post key={post._id} post={post} />
                ))
            )
    )
}
export default Posts;

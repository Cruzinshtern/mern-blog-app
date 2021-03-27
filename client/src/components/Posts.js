import {useSelector} from "react-redux";

function Posts () {

    const posts = useSelector((state) => state.posts)

    return (
            !posts.length ? 'Waiting' : (
                posts.map(post => post.title)
            )
    )
}
export default Posts;

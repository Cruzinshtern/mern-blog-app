function Post ({post}) {

    const handleClick = () => {
        console.log(post._id)
    }
    return (
        <div onClick={handleClick}>
            <h2>{post.title}</h2>
            <small>{post.description}</small>
            <p>{post.body}</p>
        </div>
    )
}

export default Post;

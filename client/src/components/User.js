function User ({user}) {
    return (
        <div>
            <h2>{user.name}</h2>
            <small>{user.username}</small>
            <p>{user.email}</p>
        </div>
    )
}

export default User;

const posts = (posts = [], action) => {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload;
        default:
            return posts;
    }
}
 export default posts;

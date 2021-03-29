const users = (users = [], action) => {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload;
        case 'GET_ONE':
            return action.payload;
        case 'REGISTER':
            return action.payload;
        default:
            return users;
    }
}
export default users;

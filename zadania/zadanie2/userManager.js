function addUser(users, user) {
    users.push(user);
}
function removeUser(users, id) {
    let userTodelete = users.filter(user => user.id !== id);
    users.pop(userTodelete);
}
function findUser(users, id) {
    let userTofind = users.find(user => user.id === id)
    return userTofind.name;
}

export { addUser, removeUser, findUser }
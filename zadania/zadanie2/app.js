import { addUser, removeUser, findUser } from './userManager.js';
let users = [];

users = [];

addUser(users, { id: 1, name: 'John' });
addUser(users, { id: 2, name: 'Phineash' });
addUser(users, { id: 3, name: 'Tom' });
addUser(users, { id: 4, name: 'Patrick' });
addUser(users, { id: 5, name: 'Ferb' });

console.log(findUser(users, 3));
removeUser(users, 2);
console.log(users.length);
console.log(findUser(users, 2));

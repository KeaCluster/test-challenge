// Imports small array of users
// Pretend it's an API request
const users = require('./data');

// Fetches all users
const getUsers = () => {
    return users;
}

// Filters users by specific ID
const getUser = id => {
    const user = users.find(user => user.id === id)
    return user;
}


// test
// console.log(getUser(3));

module.exports = {getUsers , getUser};
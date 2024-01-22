// You already have the methods imported
//const { default: expect } = require('expect');
//const {getUser, getUsers} = require('../users');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation


const user = require('../users.js');
const {getUserById, getUserByUsername, validatePasswod} = require('../users.js')

describe('User function test', () => {
    it('Should get the user by iys id', () => {
        const user = getUserById(1);
        expect(user).toEqual({
            id: 1,
            username: "hpLover4",
            email: "sirious90@gmail.com",
            password: "hArrydotCom"
        })
    })
})


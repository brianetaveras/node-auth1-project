const db = require('../../data/config');




class Users{
    async getAllUsers(){
        return await db('users')
    }
}


module.exports = new Users()
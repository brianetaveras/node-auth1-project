const bcrypt = require("bcryptjs");
const db = require("../../data/config");

class Auth {
  async addUser(info) {
    try {
      const encryptedPass = await bcrypt.hash(info.password, 10);
      return await db.table("users").insert({
        username: info.username,
        password: encryptedPass
      });
    } catch (error) {
      return [0]
    }
  }

  async findByUsername(username){
      return await db('users')
      .select('*')
      .where('username', username)
      .first()
  }

 
}

module.exports = new Auth();

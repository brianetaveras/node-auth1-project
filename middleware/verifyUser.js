const db = require('../models/auth/auth');
const bcrypt = require('bcryptjs');

async function verifyUser(){
    const user = await db.findByUsername()
}


module.exports = verifyUser
const express = require('express');
const db = require('../../models/users/user-model')

const router = express.Router();


router.get('/', async (req, res, next)=>{
    console.log(await db.getAllUsers())
})








module.exports = router;
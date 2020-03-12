const express = require("express");
const db = require("../../models/auth/auth");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Your request was incomplete."
      });
    }

    const user = await db.findByUsername(req.body.username);
    if (user) {
      return res
        .status(401)
        .json({ message: "This username has already been taken!" });
    }
    return res.json(await db.addUser(req.body));
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await db.findByUsername(username);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (passwordIsValid) {
      return res.json({
        message: `Welcome ${username}!`
      });
    }
    return res.status(401).json({ message: "You shall not pass!" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

const express = require("express");
const helmet = require("helmet");

const server = express();
server.use(helmet());
server.use(express.json());

const authRouter = require('./router/auth/index');
const userRouter = require('./router/users/users-router')


server.use('/auth', authRouter);
server.use('/users', userRouter)


server.get('/', (req, res)=>{
    res.json({
        message: "Welcome to my API"
    })
})

const PORT = 4000;

server.listen(PORT, () => {
  console.log(
    `
     --------------------------------------------------------------
     |       ___                                                   |
     |      (^o^) <Server is running on http://localhost:${PORT}      |
     |     ((___))                                                 |
     |       ^ ^                                                   |
     --------------------------------------------------------------
            `
  );
});

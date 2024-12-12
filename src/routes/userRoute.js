const express = require('express');
const userRouter = express.Router();

userRouter.post('/signup', (req,res)=>{
res.status(200).send('SignUp');
});
userRouter.post('/signin', (req,res)=>{

});

module.exports = userRouter;
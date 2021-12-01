const express =require("express")
const userRouter= express.Router();


const{getUser,getAllUser,getPersonInfo,getInfo}=require('../controllers/user');
const { users } = require("../db");

userRouter.get('/',getAllUser);
userRouter.post('/login',getUser);
userRouter.post('/', getPersonInfo);
userRouter.post('/', getInfo);


module.exports={userRouter};
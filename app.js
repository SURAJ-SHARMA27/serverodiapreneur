const express=require('express');
const dotenv=require('dotenv')
const mongoose=require('mongoose');
const app=express();
dotenv.config({path:"./config.env"})
require("./db/conn");
// const User=require("./model/userSchema");
app.use(express.json());
app.use(require('./router/auth'));
const PORT=process.env.PORT || 3000;


app.get('/signup',(req,res)=>{
    res.send("hello signup is server");
});
app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})
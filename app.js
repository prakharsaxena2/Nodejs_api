require("dotenv").config();
const express= require("express");
const app=express();

app.use(express.json());
const userRouter=require("./api/users/user.router");

app.use("/api/users",userRouter);
app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on port :",process.env.APP_PORT);
});
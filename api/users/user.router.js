const { createUser,getUsers,getUsersByUserId,updateUser,deleteUser,login,imageupload }=require("./user.controller");

const router =require("express").Router();
const { checktoken } =require("../../auth/token_validation")
router.post("/",checktoken,createUser);
router.get("/",checktoken,getUsers);
router.get("/getuserbyid",checktoken,getUsersByUserId);
router.patch("/",checktoken,updateUser);
router.delete("/deleteuser",checktoken,deleteUser);
router.post("/login",login);
router.post("/image",imageupload)
module.exports=router;
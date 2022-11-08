const router = require("express").Router();
const user = require("../models/User");
const CryptoJS=require("crypto-js");
const User = require("../models/User");
const jwt =require("jsonwebtoken")
router.post("/register", async (req,res)=>{
    const newUser = new user({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    })
  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
   
});

// LOGIN
router.post('/login',async(req,res)=>{
  try{
    const user =await User.findOne(
      {
        username:req.body.username
      }
      );
     !user&&
     res.status(401).json("Wrong passsword")
    const hashedPassword=CryptoJS.AES.decrypt(
      user.password,process.env.PASS_SEC
    );
    const Originalpassword=hashedPassword.toString(CryptoJS.enc.Utf8)
    // Originalpassword!==req.body.password && res.status(401).json("Wrong passsword")
    const accessToken =jwt.sign({
      id:user._doc,
      isAdmin:user._isAdmin,
    },
    process.env.JWT_SEC,
    {expiresIn:"3d"}
    )
    const {password,...others}=user._doc;
    res.status(200).json({...others,accessToken})
  }catch(err){
    res.status(500).json(err);
  }
});




module.exports = router;
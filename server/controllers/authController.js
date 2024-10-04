const User = require('../model/user')
const bcryptjs = require("bcryptjs")
const generateTokenAndSetCookie = require('../utils/jwt_token')

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }

        generateTokenAndSetCookie(user._id, res);

        return res.status(200).json({
            fullName: user.fullName,
            username: user.username,
            picture:user.profileImg
        });

    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
const logout =  (req,res)=>{
    try{
        res.cookie("jwt","",{maxAage:0})
        res.status(200).json({message:"User Logged out successfully"})
    }catch(err){
        return res.status(500).json({error:err})
    }
}

const signup = async(req,res)=>{
    try{
        const {fullName,username,password,confirmPassword,gender} = req.body

        if(password!==confirmPassword){
            return res.status(400).json({error:"Passwords didn't match"})
        }

        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password,salt)

        const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password:hashPassword,
            gender,
            profileImg: gender === "male" ? boyProfile:girlProfile
        })
        if(newUser){
            generateTokenAndSetCookie(newUser._id,res)
            await newUser.save()
            res.status(200).json({user:newUser})
        }else{
            res.status(400).json({error:"Invalid User Data"})
        }
        
    }catch(err){
        res.status(500).json({"message":err})
    }
}

module.exports={login,logout,signup}
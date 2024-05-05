const User = require('../model/user')

const login = async(req,res)=>{
    res.send("hey")
} 

const logout = async(req,res)=>{

}

const signup = async(req,res)=>{
    try{
        const {name,username,password,confirmPassword} = req.body

        if(password!==confirmPassword){
            return res.status(400).json({error:"Passwords didn't match"})
        }

        const user = User.findOne({username})
        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

        const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`

        const newUser = new User({
            name,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boyProfile:girlProfile
        })
        await newUser.save()

        res.status(200).json({result:newUser})
        
    }catch(err){
        res.status(500).json({"message":err})
    }
}

module.exports={login,logout,signup}
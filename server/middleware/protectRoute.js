const jwt=require('jsonwebtoken')
const User=require('../model/user')

const protectRoute = async(req,res,next)=>{
    try{
        // console.log('Cookies:', req.cookies);
        const token=req.cookies.jwt
        if(!token){
            return res.status(401).json({error:"Unauthorised: token not provided"})
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({error:"Unauthorised: Invalid token"})
        }

        const user=await User.findById(decoded.userId).select("-password")
        if(!user){
            return res.status(401).json({error:"User Not Found"})
        }

        req.user=user
        next()

    
    }catch(err){
        return res.status(500).json({error:err})
    }
}

module.exports=protectRoute
const User = require('../model/user')

const getUsers = async(req,res)=>{
    try{

        const userId = req.user._id
        const allUsers = await User.find({_id:{$ne:userId}}).select("-password")
        return res.status(200).json(allUsers)

    }catch(err){
        return res.status(500).json({error:err})
    }
}

module.exports = {getUsers}
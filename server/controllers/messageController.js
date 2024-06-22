const Conversation = require("../model/conversation")
const Message = require("../model/message")

const sendMessage = async(req,res)=>{
    try{
        const {message}=req.body
        const {id:recieverId}=req.params
        const senderId=req.user._id

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,recieverId]}
        })

        if(!conversation){
            conversation=Conversation.create({
                participants:[senderId,recieverId]
            })
        }

        const newMessage = new Message({
            senderId:senderId,
            recieverId:recieverId,
            message:message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }
        await Promise.all([conversation.save(),newMessage.save()])

        return res.status(201).json({message:"Message Sent Successfully"})

    }catch(err){
        return res.status(500).json({error:err})
    }
}

const getMessages = async(req,res) =>{
    try{

        const {id:recieverId}=req.params
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,recieverId]}
        }).populate("messages")

        if(!conversation) {
            return res.status(200).json([])
        }

        const messages = conversation.messages
        
        return res.status(200).json(messages)

    }catch(err){
        return res.status(500).json({error:err})
    }
}

module.exports={sendMessage,getMessages}
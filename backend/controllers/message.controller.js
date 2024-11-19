import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js'

export const sendMessage= async (req, res) =>{
    try{
        const {message}= req.body;
        const {id:receiverId}= req.params;
        const senderId= req.user._id;

        let conversation = await Conversation.findOne({
            participants:{
                $all:[senderId, receiverId]// find a conversation where participants array includes all these fields
            }
        })

        if(!conversation){
            conversation= await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage= new Message({
            senderId: senderId,
            receiverId: receiverId,
            message: message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        //SOCKET IO FUNCTIONALITY

        // await conversation.save();
        // await newMessage.save()

        await Promise.all([conversation.save(),newMessage.save()]);
        res.status(201).json(newMessage);
    }
    catch(error){
        console.log("Error in sendMessage controller", error.message)
        res.send(500).json({error: "Internal Server Error"})
    }
}

export const getMessages= async (req,res) =>{
    try{
        const {id: userToChatId} = req.params;
        const senderId= req.user._id;

        const conversation= await Conversation.findOne({
            participants: {$all:[senderId, userToChatId]}
        }).populate("messages");

        res.status(200).json(conversation.messages);

    }
    catch(error){
        console.log("Error in getMessages controller", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

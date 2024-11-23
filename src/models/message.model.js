import mongoose from "mongoose";

const msgSchema= new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,// reference 
        ref: "User",
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,// reference 
        ref: "User",
        required: true
    },
    message:{
        type: String,
        required: true
    }
    //created at, updated at
},{timestamps: true})

const Message= mongoose.model("Message",msgSchema )

export default Message;
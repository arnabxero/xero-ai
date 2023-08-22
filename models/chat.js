import mongoose from 'mongoose'

const ChatSchema = new mongoose.Schema({
    username: String,
    message: String,
    timestamp: String,
    status: String
})

const ChatModel = mongoose.models.ChatModel || mongoose.model('ChatModel', ChatSchema);

export default ChatModel;
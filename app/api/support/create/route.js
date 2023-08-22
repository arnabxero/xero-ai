import { connectToDB } from '@/lib/dbConnect'
import ChatModel from '@/models/chat'

export const POST = async (req, res) => {
    const { username, message, timestamp, status } = await req.json();

    try {
        await connectToDB();

        const newChatMessage = new ChatModel({ username: username, message: message, timestamp: timestamp, status: status });

        await newChatMessage.save();

        return new Response(JSON.stringify(newChatMessage), { status: 201 });

    } catch (err) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
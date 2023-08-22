// pages/api/getAllChatData.js
import { connectToDB } from '@/lib/dbConnect';
import ChatModel from '@/models/chat';

export const GET = async (req, res) => {
    try {
        await connectToDB();

        const allChatData = await ChatModel.find({});

        return new Response(JSON.stringify(allChatData), { status: 200 });
    } catch (err) {
        return new Response("Failed to fetch chat data", { status: 500 });
    }
};

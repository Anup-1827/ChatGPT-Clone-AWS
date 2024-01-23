import queryAPI from "@/lib/queryAPI";
import admin from 'firebase-admin'
import { adminDb } from "../../../firebaseAdmin";
async function askQuestion(req , res) {

    const {promt, chatId, model, session} = req.body;

    if(!promt){
        res.status(400).json({answer: "Please provide the prompt!!!"})
        return
    }
    
    if(!chatId){
        res.status(400).json({answer: "Please provide the ChatId!!!"})
        return;
    }

    //ChatGPT Query
    const response = await queryAPI(promt, chatId, model);

    const message = {
        text: response,
        createdAt : admin.firestore.Timestamp.now(),
        user:{
            _id: "ChatGPT",
            name: "ChatGPT",
        }
    }

    await adminDb.collection("users")
    .doc(session?.user.email)
    .collection('chats')
    .doc(chatId)
    .collection("messages")
    .doc(message)

    res.status(200).json({answer: message.text})
}

export default askQuestion
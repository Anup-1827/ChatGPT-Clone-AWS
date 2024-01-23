import queryAPI from '@/lib/queryAPI';
import admin from 'firebase-admin';
import adminDb from '../../../firebaseAdmin';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase';
async function askQuestion(req , res) {

    try{


    const {promt, chatId, model, session} = req.body;

    console.log(model);

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
        // createdAt : admin.firestore.Timestamp.now(),
        createdAt : serverTimestamp(),
        user:{
            _id: "ChatGPT",
            name: "ChatGPT",
        }
    }

    // adminDb.collection("users").doc(session?.user?.email).collection("chats").doc(chatId).collection("messages").add(message)
    // await addDoc(
    //     collection(db, "users", session?.user.email, "chats"),
    //     {
    //       userId: session?.user.email,
    //       createdAt: serverTimestamp(),
    //     }
    //   );

    await addDoc(
        collection(db, "users", session?.user?.email, "chats", chatId, "messages"),
        message
    )   

    res.status(200).json({answer: message.text})
    }
    catch(err){
        console.log(err);
    }
}

export default askQuestion
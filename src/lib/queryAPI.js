import openai from "./chatgpt";

export default async function queryAPI(promt, chatId, model){

    try{
        const res = await openai.chat.completions.create({
            model : "gpt-3.5-turbo",
            messages :[
                {
                    "content":  promt,
                    "role": "user"
                }
            ],
            temperature: 0.9,
            top_p: 1,
            frequency_penalty:0,
            presence_penalty:0
        })
        return res.choices[0].message.content
    }
    catch(err){
        return `ChatGPT unable to find an answer for that! (Error: ${err.message})`
    }

}
import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OpenAI_Key
})

export default openai
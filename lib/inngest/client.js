import {Inngest} from "inngest";

// create a client to send and recieve events
export const inngest = new Inngest({id: "sensai", name:"SensAI", credentials:{ gemini:{
    apiKey: process.env.GEMINI_API_KEY,
}}})
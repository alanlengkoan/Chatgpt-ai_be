import { Configuration, OpenAIApi } from "openai";
import dotEnv from "dotenv";

dotEnv.config({
    path: './.env',
});

const openaiConfig = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(openaiConfig);

export { openai }
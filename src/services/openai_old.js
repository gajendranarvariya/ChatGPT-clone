

// This is my code
/*import OpenAI from "openai";

const API_KEY = "";

// const openai = new OpenAI({apiKey:API_KEY});
const openai = new OpenAI({
	apiKey:process.env.OPENAI_API_KEY,
});


async function chatGPTClone(msg=""){
	try {
		const response = await openai.chat.completions.create({
		model: "gpt-4o",
		messages:[
			{ role: "system", content: "Your are a helpful a assistant" },
			{ role: "user", content: "explain node js in one santence" }
			],
		});

		console.log(response.choices[0].message.content)
		return "";

	} catch(e) {
		console.log("Error connecting to  OpenAI:", e.message);
	}
	

}

export default chatGPTClone;*/



// Your developer code

// const { Configuration, OpenAIApi } = require('openai');
import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({apiKey:process.env.OPENAI_API_KEY});
const openai = new OpenAIApi(configuration);


async function sendMagToOpenAI(message){
	try {
		// const response = await openai.chat.completions.create({
		const response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: message,
			temperature: 0.7,
			max_tokens: 256,
			frequency_penalty: 0,
			presense_penalty: 0,
		});

		return response.data.choices[0].text

	} catch(e) {
		console.log("Error connecting to  OpenAI:", e.message);
	}
}

export default sendMagToOpenAI;
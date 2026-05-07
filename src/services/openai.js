

// This is my code
import OpenAI from "openai";

const API_KEY = "";

// const openai = new OpenAI({apiKey:API_KEY});
const openai = new OpenAI({
	// apiKey:process.env.OPENAI_API_KEY,
	apiKey:API_KEY,
});


async function sendMagToOpenAI(message){
	try {
		const response = await openai.chat.completions.create({
		model: "gpt-4o",
		messages:message
		});

		console.log(response.choices[0].message.content)
		return "";

	} catch(e) {
		console.log("Error connecting to  OpenAI:", e.message);
	}
}

export default sendMagToOpenAI;


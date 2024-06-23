import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 0.4,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function getResponse(message) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: 'Act as a chatbot for an app we designed called "OnBoard".',
            },
            {
              text: "INSTRUCTIONS FOR RESPONSE: Type text in normal plain text please.",
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "Okay, I'm ready! Tell me, what can I do for you in the OnBoard app? I'm here to help you get OnBoarded and answer any questions you might have. 😊 \n",
            },
          ],
        },
      ],
    });

    const result = await chatSession.sendMessage(message);
    return result.response.text();
  } catch (error) {
    console.error("Error fetching response:", error);
    return "There was an error processing your request. Please try again.";
  }
}

export default getResponse;

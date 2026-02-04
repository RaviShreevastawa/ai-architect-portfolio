import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getAIResponse(prompt: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // free tier eligible
      messages: [
        { role: "system", content: "You are a helpful AI assistant for a portfolio website." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    // Return the AI text
    return response.choices[0].message?.content || "No response";
  } catch (err) {
    console.error("OpenAI API Error:", err);
    return "Error fetching AI response.";
  }
}

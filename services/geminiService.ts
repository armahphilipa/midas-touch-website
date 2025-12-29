
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the AI assistant for Midas Touch Consult Group. 
Your tone is professional, innovative, and helpful. 
You provide information about Midas Touch services: Web/Graphic Design, Project Management, Data Analytics, Content Writing, Software Development, and System Integration.
Midas Touch is based in Takoradi, Ghana. 
Founder: Ishmael Abakah. Lead Developer: Philipa Armah.
Keep responses concise and direct users to the 'Contact' section for quotes or detailed inquiries.`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Correctly initialize with process.env.API_KEY directly as per guidelines.
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async generateResponse(history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
    try {
      // Inlining model name directly in generateContent call as per guidelines.
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: history,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      // Use the .text property directly instead of text() method.
      return response.text || "I'm sorry, I couldn't process that. Please try again.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm currently undergoing maintenance. Please reach out via our contact form!";
    }
  }
}

export const geminiService = new GeminiService();

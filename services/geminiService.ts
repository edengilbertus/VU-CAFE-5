
import { GoogleGenAI, Type } from "@google/genai";
import { FoodItem } from '../types';

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export async function getMealSuggestion(menu: FoodItem[]): Promise<string[]> {
    const menuDescription = menu.map(item =>
        `- ${item.name} (ID: ${item.id}, Category: ${item.category}, Price: $${item.price}): ${item.description}`
    ).join('\n');

    const prompt = `
        From the following menu, please suggest a balanced and delicious meal for one person.
        A balanced meal should ideally contain a main course (like a Pizza or Burger), a side (like a Salad), and a drink. A dessert is optional but nice.
        Prioritize variety. Please respond ONLY with a JSON object containing a single key "suggested_ids" which is an array of the recommended food item IDs.
        
        Menu:
        ${menuDescription}
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        suggested_ids: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING
                            },
                            description: 'An array of IDs for the suggested food items.'
                        }
                    },
                },
            },
        });

        const jsonString = response.text.trim();
        const result = JSON.parse(jsonString);

        if (result && Array.isArray(result.suggested_ids)) {
            return result.suggested_ids;
        } else {
            console.error("Invalid JSON structure in AI response:", result);
            throw new Error("Received an invalid suggestion format from the AI.");
        }
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to fetch suggestion from Gemini API.");
    }
}

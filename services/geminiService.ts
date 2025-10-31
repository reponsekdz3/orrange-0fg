import { GoogleGenAI, Type } from "@google/genai";
import { SearchParams, Bus } from '../types';

// FIX: Initialize GoogleGenAI with API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

// FIX: Define response schema for finding buses to ensure structured JSON output.
const findBusesSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            id: { type: Type.STRING, description: "Unique identifier for the bus trip" },
            company: { type: Type.STRING, description: "Name of the bus company" },
            companyLogoUrl: { type: Type.STRING, description: "URL of the bus company's logo" },
            departureTime: { type: Type.STRING, description: "Departure time, e.g., 08:00 AM" },
            arrivalTime: { type: Type.STRING, description: "Estimated arrival time, e.g., 11:30 AM" },
            duration: { type: Type.STRING, description: "Total travel duration, e.g., 3h 30m" },
            price: { type: Type.NUMBER, description: "Price of the ticket in RWF" },
            availableSeats: { type: Type.NUMBER, description: "Number of available seats" },
            rating: { type: Type.NUMBER, description: "Company rating out of 5" },
        },
        required: ["id", "company", "departureTime", "arrivalTime", "duration", "price", "availableSeats"]
    }
};


export const findBuses = async (params: SearchParams): Promise<Bus[]> => {
    const prompt = `Find available buses from ${params.from} to ${params.to} on ${params.date} for ${params.passengers} passenger(s). Provide at least 5-10 realistic options from various Rwandan bus companies like Volcano Express, Ritco, Horizon Express, etc. The price should be in Rwandan Francs (RWF). Ensure the generated data is diverse.`;

    try {
        // FIX: Use ai.models.generateContent instead of deprecated methods.
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: findBusesSchema,
            },
        });

        // FIX: Directly access response.text and parse it.
        const jsonText = response.text.trim();
        const buses = JSON.parse(jsonText);
        // Add a small delay to simulate network latency for a better UX
        await new Promise(resolve => setTimeout(resolve, 1500));
        return buses as Bus[];
    } catch (error) {
        console.error("Error finding buses:", error);
        // FIX: Return an empty array on error to prevent app crash.
        return [];
    }
};


export const getTripAdvice = async (destination: string): Promise<string> => {
    const prompt = `Provide travel advice for a trip to ${destination}, Rwanda. Include tips on what to see, where to eat, local customs, and safety. The advice should be encouraging and helpful for a tourist. Format the response in Markdown.`;

    try {
        // FIX: Use ai.models.generateContent for generating text content.
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        
        // FIX: Directly access response.text.
        return response.text;
    } catch (error) {
        console.error("Error getting trip advice:", error);
        return "We couldn't fetch travel advice at the moment. Please try again later.";
    }
};

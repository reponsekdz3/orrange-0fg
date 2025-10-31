

import { GoogleGenAI, Type } from "@google/genai";
import { Bus, SearchParams } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const busSchema = {
    type: Type.OBJECT,
    properties: {
        id: { type: Type.STRING },
        company: { type: Type.STRING },
        departureTime: { type: Type.STRING, description: "Mu isaha ya HH:MM (urugero: 08:30)" },
        arrivalTime: { type: Type.STRING, description: "Mu isaha ya HH:MM (urugero: 14:45)" },
        duration: { type: Type.STRING, description: "Urugero: 6h 15m" },
        price: { type: Type.NUMBER, description: "Igiciro mu RWF" },
        rating: { type: Type.NUMBER, description: "Amanota kuri 5, urugero: 4.5" },
        availableSeats: { type: Type.INTEGER },
        busType: { type: Type.STRING, description: "Ubwoko bwa bisi, Urugero: 'Sleeper', 'AC Seater'" },
        amenities: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
        },
    },
    required: ["id", "company", "departureTime", "arrivalTime", "duration", "price", "rating", "availableSeats", "busType", "amenities"]
};


export const findBuses = async (params: SearchParams): Promise<Bus[]> => {
    const { from, to, date } = params;
    const prompt = `Shaka ingendo za bisi ziva ${from} zijya ${to} ku itariki ya ${date}. Tanga nibura ingendo eshanu zitandukanye, z'amasosiyete n'amasaha atandukanye. Ibiciro bigomba kuba mu RWF.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: busSchema,
                },
            },
        });

        const jsonStr = response.text.trim();
        const results = JSON.parse(jsonStr);
        return results as Bus[];
    } catch (error) {
        console.error("Ikosa mu gushaka bisi:", error);
        // Tanga ingero mu gihe habaye ikibazo
        return Promise.resolve([
            { id: '1', company: 'Volcano Express', departureTime: '08:00', arrivalTime: '10:30', duration: '2h 30m', price: 2500, rating: 4.8, availableSeats: 20, busType: 'AC Seater', amenities: ['WiFi', 'USB Port'] },
            { id: '2', company: 'Trinity Express', departureTime: '09:30', arrivalTime: '12:15', duration: '2h 45m', price: 2300, rating: 4.6, availableSeats: 15, busType: 'AC Seater', amenities: ['WiFi'] },
            { id: '3', company: 'Virunga Express', departureTime: '11:00', arrivalTime: '13:30', duration: '2h 30m', price: 2400, rating: 4.5, availableSeats: 30, busType: 'Non-AC Seater', amenities: [] },
        ]);
    }
};

export const getTripAdvice = async (destination: string): Promise<string> => {
    const prompt = `Nsobanurira muri make iby'urugendo rwo gusura ${destination} mu Rwanda. Tanga ahantu 3 nyaburanga ho gusura, amoko 2 y'ibiryo byaho by'umwimerere, n'inama imwe ku muco waho. Ubikore mu buryo bwa markdown.`;
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });
        return response.text;
    } catch (error) {
        console.error("Ikosa mu kubona inama z'urugendo:", error);
        return "Ntabwo bibashije kuboneka amakuru y'urugendo kuri ubu. Mwongere mugerageze mukanya.";
    }
};
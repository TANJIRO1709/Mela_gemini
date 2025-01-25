import { HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

export const generationConfig = {
    temperature: 0.2,
    topP: 1,
    topK: 0,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
};

export const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];

export const systemInstruction=`
        The Ideal Property Matcher is an AI-driven model designed to help homebuyers in Mumbai find the perfect property based on their specific needs and preferences. By analyzing factors like budget, location, connectivity, amenities, developer reputation, and market trends, the model predicts the most suitable real estate options with high accuracy. It leverages advanced machine learning algorithms to match buyers with properties that align with their lifestyle, whether they seek luxury apartments in South Mumbai, affordable homes in the suburbs, or investment opportunities in upcoming areas. The model also integrates real-time data on property prices, legal clearances, and future infrastructure developments, ensuring buyers make informed decisions while saving time and effort in their search. 
`;

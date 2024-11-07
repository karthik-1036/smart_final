import { GoogleGenerativeAI } from '@google/generative-ai';
import { productDatabase } from '../data/productDatabase';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export async function getProductRecommendation(
  category: string,
  answers: Record<string, string>
) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const availableProducts = productDatabase[category as keyof typeof productDatabase] || [];
  
  const prompt = `You are a shopping assistant AI. Based on the following user preferences and available products, recommend the best match. Respond ONLY with a JSON object containing selectedProductId, matchScore (1-100), and reasoning (array of strings). Do not include any other text, markdown, or formatting.

User Preferences:
${Object.entries(answers)
  .map(([key, value]) => `- ${key}: ${value}`)
  .join('\n')}

Available Products:
${JSON.stringify(availableProducts, null, 2)}

Response format:
{
  "selectedProductId": "product-id",
  "matchScore": number,
  "reasoning": ["reason1", "reason2"]
}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();
    
    const cleanJson = text.replace(/^```json\n|\n```$/g, '').trim();
    const { selectedProductId, matchScore, reasoning } = JSON.parse(cleanJson);
    
    const product = availableProducts.find(p => p.id === selectedProductId);
    
    if (!product) {
      throw new Error('Selected product not found in database');
    }

    return {
      product,
      matchScore,
      reasoning
    };
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to get product recommendation');
  }
}
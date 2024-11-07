import { useState } from 'react';
import type { Recommendation } from '../types';
import { getProductRecommendation } from '../lib/gemini';

export function useRecommendation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const getRecommendation = async (
    categoryId: string,
    answers: Record<string, string>
  ) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await getProductRecommendation(categoryId, answers);
      setRecommendation(result);
    } catch (err) {
      setError('Failed to get recommendation. Please try again.');
      console.error('Recommendation Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return { recommendation, loading, error, getRecommendation };
}
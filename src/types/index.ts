export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  amazonPrice: number;
  flipkartPrice: number;
  amazonLink: string;
  flipkartLink: string;
  features: string[];
  specs: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
}

export interface Recommendation {
  product: Product;
  matchScore: number;
  reasoning: string[];
}
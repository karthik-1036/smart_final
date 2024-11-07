import React, { useState } from 'react';
import { Bot, Sparkles, Wrench } from 'lucide-react';
import ProductSelector from './components/ProductSelector';
import QuestionFlow from './components/QuestionFlow';
import ProductRecommendation from './components/ProductRecommendation';
import LoadingState from './components/LoadingState';
import { useRecommendation } from './hooks/useRecommendation';
import Header from './components/Header';
import ToolsSection from './components/ToolsSection';
import Footer from './components/Footer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const { recommendation, loading, error, getRecommendation } = useRecommendation();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setAnswers({});
  };

  const handleAnswerQuestion = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleGetRecommendation = () => {
    getRecommendation(selectedCategory, answers);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-full mb-4">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Smartphone Recommendations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
           Let Smartpiece's AI guide you to the perfect smartphone based on your needs and preferences.
          </p>
        </div>

        {/* Main Product Tool */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Sparkles className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-900">
               Find Your Ideal Smartphone
              </h2>
            </div>
            <ProductSelector
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>

          {/* Questions */}
          {selectedCategory && (
            <div className="transition-all duration-300">
              <QuestionFlow
                categoryId={selectedCategory}
                answers={answers}
                onAnswerQuestion={handleAnswerQuestion}
              />
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-red-800 mb-8">
              {error}
            </div>
          )}

          {/* Get Recommendation Button */}
          {selectedCategory && Object.keys(answers).length >= 3 && !loading && !recommendation && (
            <div className="flex justify-center mb-8">
              <button
                onClick={handleGetRecommendation}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
              >
                Get Personalized Recommendations
              </button>
            </div>
          )}

          {/* Loading State */}
          {loading && <LoadingState />}

          {/* Recommendation */}
          {recommendation && <ProductRecommendation recommendation={recommendation} />}
        </div>

        {/* Tools Section */}
        <ToolsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
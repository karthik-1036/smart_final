import React from 'react';
import { HelpCircle } from 'lucide-react';
import { categories } from '../data/products';

interface Props {
  categoryId: string;
  answers: Record<string, string>;
  onAnswerQuestion: (questionId: string, answer: string) => void;
}

export default function QuestionFlow({ categoryId, answers, onAnswerQuestion }: Props) {
  const category = categories.find((c) => c.id === categoryId);
  if (!category) return null;

  return (
    <div className="space-y-6">
      {category.questions.map((question) => (
        <div key={question.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-medium text-gray-900">{question.text}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => onAnswerQuestion(question.id, option)}
                className={`
                  w-full px-4 py-3 rounded-lg text-left transition-all duration-200
                  ${
                    answers[question.id] === option
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }
                  flex items-center justify-between group
                `}
              >
                <span className="font-medium">{option}</span>
                {answers[question.id] === option && (
                  <span className="text-white text-sm">Selected</span>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
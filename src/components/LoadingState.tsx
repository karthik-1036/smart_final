
import { Bot, Search, Sparkles } from 'lucide-react';

export default function LoadingState() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-4">
        <div className="animate-pulse flex items-center justify-center">
          <div className="h-2 w-24 bg-white/50 rounded"></div>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Bot className="w-16 h-16 text-blue-500" />
            <div className="absolute -right-2 -top-2">
              <div className="animate-spin">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <h3 className="mt-6 text-xl font-semibold text-gray-900">Finding Your Perfect Match</h3>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600">Analyzing preferences...</span>
            </div>
            <div className="flex items-center space-x-2">
              <Search className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600">Searching best deals...</span>
            </div>
          </div>
          
          <div className="mt-8 w-full max-w-xs">
            <div className="h-2 bg-blue-200 rounded">
              <div className="h-2 bg-blue-500 rounded animate-progress" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
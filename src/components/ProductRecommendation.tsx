import React from 'react';
import { ShoppingCart, ExternalLink, ThumbsUp, Package, Star, Check, Info } from 'lucide-react';
import type { Recommendation } from '../types';

interface Props {
  recommendation: Recommendation;
}

export default function ProductRecommendation({ recommendation }: Props) {
  const { product, matchScore, reasoning } = recommendation;
  // const bestPrice = Math.min(product.amazonPrice, product.flipkartPrice);
  // const priceDiff = Math.abs(product.amazonPrice - product.flipkartPrice);
  
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full">
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="w-6 h-6 mr-2" fill="white" />
            <span className="text-xl font-bold">{matchScore}% Match</span>
          </div>
          <div className="text-sm opacity-90">Based on your preferences</div>
        </div>
      </div>
      
      <div className="lg:flex">
        <div className="lg:w-1/3 relative aspect-[4/3] lg:aspect-auto">
          <img
            className="w-full h-full object-cover"
            src={product.image}
            alt={product.title}
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">Best Value</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
            <div className="grid grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6 bg-indigo-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <ThumbsUp className="w-5 h-5 text-indigo-500 mr-2" />
              Why We Recommend This
            </h3>
            <ul className="space-y-2">
              {reasoning.map((reason, index) => (
                <li key={index} className="flex items-start space-x-2 text-gray-700">
                  <Info className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-1" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              {/* <div>
                <p className="text-sm text-gray-600 mb-1">Best Available Price</p>
                <p className="text-3xl font-bold text-gray-900">₹{bestPrice.toLocaleString()}</p>
              </div>
              {priceDiff > 0 && (
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  Save ₹{priceDiff.toLocaleString()}
                </div> */}
            </div>
            
            <div className="space-y-3">
              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg hover:from-orange-600 hover:to-orange-500 transition-all duration-200"
              >
                <div className="flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  <span className="font-medium">Buy on Amazon</span>
                </div>
                <div className="flex items-center">
                  {/* <span className="font-medium">₹{product.amazonPrice.toLocaleString()}</span> */}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </a>
              
              <a
                href={product.flipkartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-400 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-500 transition-all duration-200"
              >
                <div className="flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  <span className="font-medium">Buy on Flipkart</span>
                </div>
                <div className="flex items-center">
                  {/* <span className="font-medium">₹{product.flipkartPrice.toLocaleString()}</span> */}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
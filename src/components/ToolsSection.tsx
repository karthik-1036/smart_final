import { Brain, Target, Sparkles, Scale } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart Analysis',
    description: 'Our AI analyzes your preferences and requirements to find products that perfectly match your needs.'
  },
  {
    icon: Target,
    title: 'Personalized Matching',
    description: 'Get recommendations tailored to your specific requirements, budget, and usage patterns.'
  },
  {
    icon: Scale,
    title: 'Detailed Comparison',
    description: 'Compare features, specifications, and prices across multiple products to make informed decisions.'
  },
  {
    icon: Sparkles,
    title: 'Smart Scoring',
    description: 'Each recommendation comes with a match score and detailed reasoning for complete transparency.'
  }
];

export default function ToolsSection() {
  return (
    <section id="tools" className="py-16 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
      <div className="text-center mb-12">
        <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Smart Recommendation System</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our AI-powered system helps you find the perfect products through intelligent analysis and matching.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-indigo-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
import React from 'react';
import { Edit, Sparkles, Download } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Edit,
      title: 'Describe Your Vision',
      description: 'Simply type what you want to see. Our AI understands natural language and complex scene descriptions.'
    },
    {
      icon: Sparkles,
      title: 'AI Magic Happens',
      description: 'Our advanced models process your prompt and generate high-quality images in seconds, not hours.'
    },
    {
      icon: Download,
      title: 'Download & Use',
      description: 'Get your perfect image instantly. Download in high resolution and use it anywhere you need.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating stunning images with AI has never been easier. Just three simple steps to get the perfect visual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-30"></div>
                )}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:-translate-y-1 transform">
            Try It Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
import React, { useState, useEffect } from 'react';
import { Sparkles, Play } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const exampleImages = [
    {
      url: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      prompt: "A futuristic cityscape at sunset with flying cars"
    },
    {
      url: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      prompt: "Abstract digital art with flowing colors"
    },
    {
      url: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      prompt: "Minimalist landscape with geometric shapes"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % exampleImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-cyan-50 to-green-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Image Generation</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Generate{' '}
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Professional Images
            </span>{' '}
            with AI
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Transform your ideas into stunning visuals in seconds. Our advanced AI creates 
            high-quality images perfect for content creators, designers, and marketers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:-translate-y-1 transform">
              Start Generating
            </button>
            <button className="border-2 border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center gap-2 justify-center">
              <Play className="w-5 h-5" />
              View Examples
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 mt-12 justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-gray-900">1M+</div>
              <div className="text-gray-600">Images Generated</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>

        {/* Live Demo Window */}
        <div className="flex-1 max-w-lg">
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-500 ml-4">Live Generation Preview</span>
            </div>
            
            <div className="relative">
              <img
                src={exampleImages[currentImageIndex].url}
                alt="AI Generated Preview"
                className="w-full h-80 object-cover rounded-lg transition-opacity duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded-lg backdrop-blur-sm">
                <p className="text-sm font-mono">{exampleImages[currentImageIndex].prompt}</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-4">
              {exampleImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
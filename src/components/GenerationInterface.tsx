import React, { useState } from 'react';
import { Wand2, Download, RefreshCw, Share2, Save, Settings } from 'lucide-react';

const GenerationInterface = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('photorealistic');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const styles = [
    { id: 'photorealistic', label: 'Photorealistic' },
    { id: 'artistic', label: 'Artistic' },
    { id: 'abstract', label: 'Abstract' },
    { id: 'cartoon', label: 'Cartoon' },
    { id: 'digital-art', label: 'Digital Art' }
  ];

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setProgress(0);
    
    // Simulate generation progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          // Set a demo generated image
          setGeneratedImage("https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600&h=600");
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <section id="generate" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Create Your Perfect Image
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Describe what you want to see and watch our AI bring it to life in seconds
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Generation Controls</h3>
            
            {/* Prompt Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Describe your image
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A majestic mountain landscape at sunrise with fog rolling through the valleys..."
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Style Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Style
              </label>
              <div className="flex flex-wrap gap-2">
                {styles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      selectedStyle === style.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {style.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Advanced Options */}
            <div className="mb-6">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span>Advanced Options</span>
              </button>
              
              {showAdvanced && (
                <div className="mt-4 space-y-4 p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Dimensions
                      </label>
                      <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>1024x1024</option>
                        <option>1024x768</option>
                        <option>768x1024</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Steps
                      </label>
                      <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>20</option>
                        <option>30</option>
                        <option>50</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white py-4 rounded-lg font-semibold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5" />
                  <span>Generate Image</span>
                </>
              )}
            </button>

            {/* Progress Bar */}
            {isGenerating && (
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-cyan-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Output Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Generated Image</h3>
            
            <div className="aspect-square bg-gray-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
              {generatedImage ? (
                <img
                  src={generatedImage}
                  alt="Generated"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-gray-400">
                  <Wand2 className="w-16 h-16 mx-auto mb-4" />
                  <p>Your generated image will appear here</p>
                </div>
              )}
            </div>

            {generatedImage && (
              <>
                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg transition-colors">
                    <RefreshCw className="w-4 h-4" />
                    <span>Regenerate</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg transition-colors">
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                </div>

                {/* Meta Information */}
                <div className="text-sm text-gray-500 font-mono bg-gray-50 p-4 rounded-lg">
                  <div className="mb-2">Generation time: 3.2s</div>
                  <div className="mb-2">Model: Flux Pro</div>
                  <div>Settings: {selectedStyle}, 1024x1024, 20 steps</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerationInterface;
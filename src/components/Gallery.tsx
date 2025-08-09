import React, { useState } from 'react';
import { Filter, Search, Eye, Heart, Download } from 'lucide-react';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'photorealistic', label: 'Photorealistic' },
    { id: 'artistic', label: 'Artistic' },
    { id: 'abstract', label: 'Abstract' },
    { id: 'digital-art', label: 'Digital Art' }
  ];

  const images = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      prompt: "Futuristic cityscape with neon lights",
      category: "photorealistic",
      likes: 342,
      downloads: 89
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      prompt: "Abstract flowing colors and shapes",
      category: "abstract",
      likes: 256,
      downloads: 67
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      prompt: "Minimalist mountain landscape",
      category: "artistic",
      likes: 198,
      downloads: 45
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      prompt: "Digital fantasy forest scene",
      category: "digital-art",
      likes: 412,
      downloads: 123
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/1557238/pexels-photo-1557238.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      prompt: "Photorealistic portrait study",
      category: "photorealistic",
      likes: 567,
      downloads: 234
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      prompt: "Abstract geometric composition",
      category: "abstract",
      likes: 289,
      downloads: 78
    }
  ];

  const filteredImages = selectedFilter === 'all' 
    ? images 
    : images.filter(img => img.category === selectedFilter);

  const openModal = (image: any) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Community Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore amazing images created by our community. Get inspired and see what's possible with AI.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedFilter === filter.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.prompt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-700 font-medium mb-3 line-clamp-2">
                  {image.prompt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{image.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{image.downloads}</span>
                    </div>
                  </div>
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Load More
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-full overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {selectedImage.prompt}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <img
                src={selectedImage.url}
                alt={selectedImage.prompt}
                className="w-full rounded-lg mb-4"
              />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-5 h-5" />
                    <span>{selectedImage.likes} likes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-5 h-5" />
                    <span>{selectedImage.downloads} downloads</span>
                  </div>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Share2, Heart } from 'lucide-react';
import Link from 'next/link';

// Gallery will be populated with user-generated images
const galleryImages: Array<{
  id: number;
  src: string;
  title: string;
  category: string;
  likes: number;
  downloads: number;
}> = [];

const categories = ['All', 'AI Enhancement', 'Style Transfer', 'Background Edit'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedImage, setSelectedImage] = React.useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-[#ff5757] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AI Gallery
            </h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#ff5757] to-white bg-clip-text text-transparent">
                Community Gallery
              </h2>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#ff5757] to-[#ff8a8a] rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -left-4 w-6 h-6 bg-gradient-to-r from-[#ff8a8a] to-[#ff5757] rounded-full opacity-30"></div>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover amazing AI-generated images created by our community. 
              Get inspired and see the endless possibilities of AI image transformation.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#ff5757] to-[#ff8a8a] text-white shadow-lg shadow-[#ff5757]/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10 hover:border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="group relative bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{image.category}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{image.likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{image.downloads.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              {/* Modern Empty State */}
              <div className="relative mb-12">
                <div className="w-32 h-32 bg-gradient-to-br from-[#ff5757]/20 to-[#ff8a8a]/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff5757]/30 to-[#ff8a8a]/20 rounded-full blur-xl"></div>
                  <svg className="w-16 h-16 text-[#ff5757] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">Gallery is Empty</h3>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg">
                  No images have been generated yet. Be the first to create amazing AI images and see them featured here!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/app"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#ff5757] to-[#ff8a8a] text-white font-semibold rounded-full hover:from-[#ff6b6b] hover:to-[#ff9a9a] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#ff5757]/25"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Start Creating Now
                  </Link>
                  
                  <Link
                    href="/pricing"
                    className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>

            </div>
          )}
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-white/10 rounded-2xl overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              ×
            </button>
            
            <div className="p-6">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[60vh] object-contain rounded-lg mb-4"
              />
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-400 mb-4">{selectedImage.category}</p>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>{selectedImage.likes.toLocaleString()} likes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>{selectedImage.downloads.toLocaleString()} downloads</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4 mt-6">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-[#ff5757] text-white rounded-full hover:bg-[#ff6b6b] transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button className="flex items-center space-x-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

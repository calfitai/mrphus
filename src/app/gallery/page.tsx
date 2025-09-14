'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Share2, Heart } from 'lucide-react';
import Link from 'next/link';

const galleryImages = [
  {
    id: 1,
    src: '/images/Age Progression.jpeg',
    title: 'Age Progression',
    category: 'AI Enhancement',
    likes: 1247,
    downloads: 892
  },
  {
    id: 2,
    src: '/images/Artistic Portrait.jpeg',
    title: 'Artistic Portrait',
    category: 'Style Transfer',
    likes: 2156,
    downloads: 1456
  },
  {
    id: 3,
    src: '/images/Baby version.jpeg',
    title: 'Baby Version',
    category: 'AI Enhancement',
    likes: 1890,
    downloads: 1234
  },
  {
    id: 4,
    src: '/images/Background Change.jpeg',
    title: 'Background Change',
    category: 'Background Edit',
    likes: 3421,
    downloads: 2789
  },
  {
    id: 5,
    src: '/images/Cartoon Style.jpeg',
    title: 'Cartoon Style',
    category: 'Style Transfer',
    likes: 4567,
    downloads: 3456
  },
  {
    id: 6,
    src: '/images/Expression Change.png',
    title: 'Expression Change',
    category: 'AI Enhancement',
    likes: 2345,
    downloads: 1789
  },
  {
    id: 7,
    src: '/images/Fantasy World.jpeg',
    title: 'Fantasy World',
    category: 'Style Transfer',
    likes: 5678,
    downloads: 4234
  },
  {
    id: 8,
    src: '/images/Glamorous Makeup.png',
    title: 'Glamorous Makeup',
    category: 'AI Enhancement',
    likes: 3456,
    downloads: 2567
  },
  {
    id: 9,
    src: '/images/Professional Look.jpeg',
    title: 'Professional Look',
    category: 'AI Enhancement',
    likes: 2789,
    downloads: 1987
  },
  {
    id: 10,
    src: '/images/Style Transfer.jpeg',
    title: 'Style Transfer',
    category: 'Style Transfer',
    likes: 4123,
    downloads: 3123
  },
  {
    id: 11,
    src: '/images/Vintage.jpeg',
    title: 'Vintage Style',
    category: 'Style Transfer',
    likes: 2987,
    downloads: 2134
  },
  {
    id: 12,
    src: '/images/colorize.png',
    title: 'Colorize',
    category: 'AI Enhancement',
    likes: 1876,
    downloads: 1456
  }
];

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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#ff5757] to-white bg-clip-text text-transparent">
              AI Gallery
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore stunning AI-generated images created by our community. 
              Get inspired and see the endless possibilities of AI image transformation.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#ff5757] text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
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

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Own?</h3>
            <p className="text-gray-400 mb-8">Join thousands of creators using MRPHUS AI</p>
            <Link
              href="/app"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#ff5757] to-[#ff8a8a] text-white font-semibold rounded-full hover:from-[#ff6b6b] hover:to-[#ff9a9a] transition-all duration-300 transform hover:scale-105"
            >
              Start Creating Now
            </Link>
          </div>
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

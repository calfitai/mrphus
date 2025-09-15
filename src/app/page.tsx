'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Sparkles, 
  GalleryVertical,
  Menu,
  X,
  User,
  ArrowRight,
  ChevronRight,
  Image as ImageIcon
} from 'lucide-react';
import { categories } from '@/data/categories';
import { useCredits } from '@/context/CreditContext';
import { aiService } from '@/services/aiService';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [chatInput, setChatInput] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { credits, deductCredit } = useCredits();

  const handleChatSubmit = async () => {
    if (!chatInput.trim() || isProcessing) return;
    
    setIsProcessing(true);
    
    try {
      // Check if user has credits
      if (!deductCredit(1)) {
        alert('Yeterli krediniz yok!');
        setIsProcessing(false);
        return;
      }

      // Process text input for AI generation
      const result = await aiService.generateImage(chatInput, 'general');
      
      if (result.success) {
        // Show success message and redirect to app page
        alert('AI işleme başarılı! App sayfasına yönlendiriliyorsunuz...');
        window.location.href = `/app?prompt=${encodeURIComponent(chatInput)}&category=general`;
      } else {
        alert('AI işleme sırasında hata oluştu: ' + result.error);
        // Refund credit on error
        deductCredit(-1);
      }
    } catch (error) {
      console.error('Chat processing error:', error);
      alert('Bir hata oluştu, lütfen tekrar deneyin.');
      // Refund credit on error
      deductCredit(-1);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Redirect to app page for image processing
      window.location.href = '/app?mode=upload';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleChatSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/MRPHUS-web-logo.png" 
                alt="Mrphus AI" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#categories" className="text-white hover:text-gray-200 transition-colors">Categories</a>
              <a href="/gallery" className="text-white hover:text-gray-200 transition-colors">Gallery</a>
              <a href="/pricing" className="text-white hover:text-gray-200 transition-colors">Pricing</a>
            </nav>

            {/* Credits Display */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-[#ff5757]/20 border border-[#ff5757]/30 px-4 py-2 rounded-full">
                <Sparkles className="h-4 w-4 text-[#ff5757]" />
                <span className="text-sm font-semibold text-white">{credits} Credits</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#categories" className="block text-gray-300 hover:text-white transition-colors">Categories</a>
              <a href="#gallery" className="block text-gray-300 hover:text-white transition-colors">Gallery</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
              <div className="pt-4 border-t border-gray-800 space-y-3">
                <button className="block w-full text-left text-gray-300 hover:text-white transition-colors">Login</button>
                <button className="block w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg transition-all">
                  Get Started
                </button>
              </div>
        </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden min-h-[700px]">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-background.png"
            alt="Hero Background"
            className="hero-bg w-full h-full object-cover object-bottom opacity-60"
            loading="eager"
            fetchPriority="high"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Create Stunning AI Images
              <br />
              in Seconds
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
            >
              Transform your photos with professional AI technology. Age progression, 
              style transfer, background changes, and much more.
            </motion.p>


            {/* Chat Input Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 max-w-2xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <div className="flex items-center space-x-3">
                  <label className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <ImageIcon className="h-5 w-5" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={chatInput || ''}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Describe what you want to create..."
                      className="w-full bg-transparent border-none outline-none text-white placeholder-gray-400 text-base"
                      disabled={isProcessing}
                    />
                  </div>
                  <button 
                    onClick={handleChatSubmit}
                    disabled={isProcessing || !chatInput.trim()}
                    className="bg-[#ff5757] hover:bg-[#ff4444] disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-2 rounded-xl transition-all transform hover:scale-105"
                  >
                    {isProcessing ? (
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Feature Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-2xl mx-auto"
            >
              <button 
                onClick={() => window.location.href = '/app?mode=generate'}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#ff5757]/50 text-white px-4 py-3 rounded-lg transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <Sparkles className="h-4 w-4 text-[#ff5757]" />
                <span className="font-medium text-sm">AI Image Generator</span>
              </button>
              <button 
                onClick={() => window.location.href = '/app?mode=blur'}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#ff5757]/50 text-white px-4 py-3 rounded-lg transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <Camera className="h-4 w-4 text-[#ff5757]" />
                <span className="font-medium text-sm">Blur Photo Fix</span>
              </button>
              <button 
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#ff5757]/50 text-white px-4 py-3 rounded-lg transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <GalleryVertical className="h-4 w-4 text-[#ff5757]" />
                <span className="font-medium text-sm">Categories</span>
              </button>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Categories Section */}
      <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="categories-heading" className="text-4xl font-bold mb-4">AI Transformation Categories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose from our wide range of professional AI transformations
            </p>
          </div>

          {/* Featured Blur Category */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-r from-[#ff5757]/20 to-[#ff5757]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#ff5757]/30 hover:border-[#ff5757]/50 transition-all group cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img 
                      src="/images/blur-gorsel.png" 
                      alt="Blur Photo Fix"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </div>
                </div>
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-[#ff5757] transition-colors">
                    Fix Blurry Photos Instantly
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Transform your blurry, out-of-focus photos into crystal clear images with our advanced AI technology. Perfect for restoring precious memories and professional photos.
                  </p>
                  <button 
                    onClick={() => window.location.href = '/app?mode=blur'}
                    className="flex items-center justify-center lg:justify-start text-[#ff5757] text-lg font-semibold hover:text-white transition-colors"
                  >
                    <span>Fix My Blurry Photo</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.filter(cat => cat.id !== '26' && cat.id !== '27' && cat.id !== '28' && cat.id !== '29' && cat.id !== '30' && cat.id !== '31' && cat.id !== '32').map((category) => (
              <div
                key={category.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-[#ff5757]/50 transition-all group cursor-pointer"
              >
                  <div className="aspect-square mb-3 rounded-lg overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={`${category.title} - AI image transformation example`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#ff5757] transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-3 text-sm">{category.description}</p>
                <div className="flex items-center text-[#ff5757] text-xs font-medium">
                  <span>Try Now</span>
                  <ArrowRight className="h-3 w-3 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Modern Footer */}
      <footer className="relative bg-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff5757]/20 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff5757' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {/* Main Content */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/MRPHUS-web-logo.png" 
                alt="Mrphus AI" 
                className="h-16 w-auto"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Transform Your Reality with AI
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Professional AI image transformations that bring your creative vision to life. 
              Join thousands of creators worldwide.
            </p>
            
            {/* Mobile App Download */}
            <div className="flex justify-center mb-8">
              <a href="#" className="group">
                <img 
                  src="/apple-store.png" 
                  alt="Download on the App Store" 
                  className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity group-hover:scale-105 transform duration-300"
                />
              </a>
            </div>
          </div>
          
          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4 text-[#ff5757]">Product</h4>
              <ul className="space-y-3">
                <li><a href="/app" className="text-gray-400 hover:text-white transition-colors">AI Generator</a></li>
                <li><a href="/app?mode=blur" className="text-gray-400 hover:text-white transition-colors">Blur Photo Fix</a></li>
                <li><a href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
                <li><a href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4 text-[#ff5757]">Support</h4>
              <ul className="space-y-3">
                <li><a href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4 text-[#ff5757]">Legal</h4>
              <ul className="space-y-3">
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <div className="flex flex-col items-center md:items-start space-y-4 mt-6">
                {/* Program Logos */}
                <div className="flex items-center space-x-6">
                  <img 
                    src="/Inception_Social_Ima.png" 
                    alt="NVIDIA Inception Startup Program" 
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <img 
                    src="/google-startup-program.png" 
                    alt="Google Startup Program" 
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                
                {/* Separator Line */}
                <div className="w-full h-px bg-white/10"></div>
                
                {/* Social Media Links */}
                <div className="flex items-center space-x-4">
                  <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#ff5757]/20 transition-all group">
                    <svg className="w-5 h-5 text-white group-hover:text-[#ff5757]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#ff5757]/20 transition-all group">
                    <svg className="w-5 h-5 text-white group-hover:text-[#ff5757]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#ff5757]/20 transition-all group">
                    <svg className="w-5 h-5 text-white group-hover:text-[#ff5757]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-2 pb-2">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 Mrphus AI. All rights reserved. Made with passion for creators.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Powered by Searcly Teknoloji A.Ş.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata(
  'AI Image Generator - Create & Transform Images with AI',
  'Use MRPHUS AI image generator to create stunning images, transform photos, fix blurry images, and apply various AI effects. Professional AI image processing in seconds.',
  ['AI image generator', 'image transformation', 'photo editing', 'AI effects', 'image processing', 'photo enhancement']
);

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Sparkles, 
  Download, 
  Share2, 
  ArrowLeft,
  Send,
  Image as ImageIcon,
  X,
  Loader2
} from 'lucide-react';
import { categories } from '@/data/categories';
import { Category } from '@/types';
import { aiService } from '@/services/aiService';
import Link from 'next/link';

interface Message {
  id: string;
  type: 'user' | 'ai' | 'system';
  content: string;
  image?: string;
  timestamp: Date;
}

export default function AppPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check URL parameters for pre-selected category
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    
    if (mode === 'blur') {
      const blurCategory = categories.find(cat => cat.id === '26');
      if (blurCategory) {
        setSelectedCategory(blurCategory);
        setShowCategories(false);
      }
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setSelectedImage(result);
        
        // Add user message
        const newMessage: Message = {
          id: Date.now().toString(),
          type: 'user',
          content: 'Resim yüklendi',
          image: result,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, newMessage]);
        
        // If blur category is pre-selected, start processing directly
        if (selectedCategory && selectedCategory.id === '26') {
          handleAIProcessing(selectedCategory);
        } else {
          // Show categories for other modes
          setShowCategories(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setShowCategories(false);
    
    // Add system message with prompt
    const systemMessage: Message = {
      id: Date.now().toString(),
      type: 'system',
      content: `Kategori seçildi: ${category.title}`,
      timestamp: new Date()
    };
    
    const promptMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'system',
      content: `Prompt hazırlandı: ${category.prompt}`,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, systemMessage, promptMessage]);
    
    // Start AI processing
    handleAIProcessing(category);
  };

  const handleAIProcessing = async (category: Category) => {
    if (!selectedImage) return;
    
    setIsProcessing(true);
    
    // Add processing message
    const processingMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content: 'AI işleme başladı...',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, processingMessage]);
    
    try {
      // Call AI service
      const result = await aiService.processImage({
        imageData: selectedImage,
        category: category,
        prompt: category.prompt
      });
      
      if (result.success && result.resultImage) {
        const resultMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: 'İşlem tamamlandı! Sonucunuz hazır.',
          image: result.resultImage,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, resultMessage]);
      } else {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: `Hata: ${result.error || 'Bilinmeyen hata oluştu'}`,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'AI işleme sırasında hata oluştu. Lütfen tekrar deneyin.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (selectedImage) {
      const link = document.createElement('a');
      link.href = selectedImage;
      link.download = 'mrphus-result.jpg';
      link.click();
    }
  };

  const handleShare = async () => {
    if (navigator.share && selectedImage) {
      try {
        await navigator.share({
          title: 'Mrphus AI Result',
          text: 'Check out my AI transformation!',
          url: window.location.href
        });
      } catch (error) {
        console.log('Share failed:', error);
      }
    }
  };

  const resetApp = () => {
    setSelectedImage(null);
    setSelectedCategory(null);
    setMessages([]);
    setShowCategories(false);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-5 w-5" />
                <span>Geri</span>
              </Link>
              <div className="h-6 w-px bg-gray-600"></div>
              <img 
                src="/MRPHUS-web-logo.png" 
                alt="Mrphus AI" 
                className="h-8 w-auto"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              {selectedImage && (
                <>
                  <button
                    onClick={handleDownload}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    title="İndir"
                  >
                    <Download className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    title="Paylaş"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </>
              )}
              <button
                onClick={resetApp}
                className="px-4 py-2 bg-[#ff5757] hover:bg-[#ff4444] rounded-lg transition-colors"
              >
                Yeni Başla
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 h-screen flex flex-col">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-4xl mx-auto">
            {messages.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="h-12 w-12 text-[#ff5757]" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Resim Yükleyin</h2>
                <p className="text-gray-400 mb-8">
                  Dönüştürmek istediğiniz resmi yükleyin ve AI ile büyülü sonuçlar elde edin
                </p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-[#ff5757] hover:bg-[#ff4444] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto"
                >
                  <Camera className="h-5 w-5" />
                  <span>Resim Seç</span>
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md ${
                      message.type === 'user' 
                        ? 'bg-[#ff5757] text-white' 
                        : message.type === 'ai'
                        ? 'bg-white/10 text-white'
                        : 'bg-gray-800 text-gray-300'
                    } rounded-2xl p-4`}>
                      {message.image && (
                        <div className="mb-3">
                          <img
                            src={message.image}
                            alt="Uploaded"
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {isProcessing && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/10 rounded-2xl p-4 flex items-center space-x-3">
                      <Loader2 className="h-5 w-5 animate-spin text-[#ff5757]" />
                      <span>AI işleme devam ediyor...</span>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </div>

        {/* Categories Modal */}
        <AnimatePresence>
          {showCategories && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Kategori Seçin</h3>
                  <button
                    onClick={() => setShowCategories(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => handleCategorySelect(category)}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-[#ff5757]/50 transition-all group cursor-pointer text-left"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="aspect-square mb-3 rounded-lg overflow-hidden">
                        <img 
                          src={category.image} 
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-semibold mb-2 group-hover:text-[#ff5757] transition-colors">
                        {category.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </main>
    </div>
  );
}

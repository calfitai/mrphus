'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, MessageCircle, BookOpen, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center">
              <img 
                src="/MRPHUS-web-logo.png" 
                alt="Mrphus AI" 
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Help Center
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Find answers to common questions and get support for your AI image generation needs.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-md mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#ff5757]/50"
                />
              </div>
            </motion.div>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {/* Getting Started */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="h-6 w-6 text-[#ff5757] mr-3" />
                Getting Started
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-2">How do I create my first AI image?</h3>
                  <p className="text-gray-400">Simply type a description of what you want to create in the chat input area on our homepage, then press Enter or click the send button. Our AI will generate a unique image based on your prompt.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-2">How many credits do I get?</h3>
                  <p className="text-gray-400">Every new user receives 10 free credits to get started. Each AI image generation costs 1 credit. You can purchase additional credits as needed.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-2">How do I fix blurry photos?</h3>
                  <p className="text-gray-400">Click on &quot;Blur Photo Fix&quot; or upload an image using the upload button. Our AI will automatically enhance and sharpen your blurry photos.</p>
                </div>
              </div>
            </motion.section>

            {/* Categories */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <HelpCircle className="h-6 w-6 text-[#ff5757] mr-3" />
                Categories & Features
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-2">What categories are available?</h3>
                  <p className="text-gray-400">We offer 25+ categories including Age Progression, Baby Version, Artistic Portrait, Style Transfer, Background Changes, and many more. Each category has specialized prompts for the best results.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-2">Can I upload my own images?</h3>
                  <p className="text-gray-400">Yes! You can upload your own images and use them with any of our categories. Simply click &quot;Upload Image&quot; and select your photo, then choose a category for transformation.</p>
                </div>
              </div>
            </motion.section>

            {/* Support */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 text-[#ff5757] mr-3" />
                Need More Help?
              </h2>
              <div className="bg-gradient-to-r from-[#ff5757]/20 to-[#ff5757]/10 backdrop-blur-sm rounded-xl p-8 border border-[#ff5757]/30">
                <h3 className="text-xl font-bold mb-4">Contact Our Support Team</h3>
                <p className="text-gray-300 mb-6">Can&apos;t find what you&apos;re looking for? Our support team is here to help you with any questions or issues.</p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center bg-[#ff5757] hover:bg-[#ff4444] text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Contact Support
                </Link>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
}

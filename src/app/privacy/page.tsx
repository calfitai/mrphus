'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
              className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center"
            >
              <Shield className="h-10 w-10 text-[#ff5757] mr-4" />
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-500 mt-4"
            >
              Last updated: September 14, 2024
            </motion.p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Information We Collect */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Database className="h-6 w-6 text-[#ff5757] mr-3" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">Personal Information</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Email address (when you contact us)</li>
                    <li>• Name (when you contact us)</li>
                    <li>• Any information you voluntarily provide in support requests</li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">Usage Information</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Images you upload for processing</li>
                    <li>• Text prompts you enter</li>
                    <li>• Generated images and results</li>
                    <li>• Credit usage and transaction history</li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">Technical Information</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Browser type and version</li>
                    <li>• IP address and general location</li>
                    <li>• Device information</li>
                    <li>• Usage patterns and preferences</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* How We Use Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Eye className="h-6 w-6 text-[#ff5757] mr-3" />
                How We Use Your Information
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">Service Provision</h3>
                  <p className="text-gray-400">We use your information to provide AI image generation services, process your requests, and deliver results.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">Communication</h3>
                  <p className="text-gray-400">We may use your contact information to respond to your inquiries, provide support, and send important service updates.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">Service Improvement</h3>
                  <p className="text-gray-400">We analyze usage patterns to improve our AI models, enhance user experience, and develop new features.</p>
                </div>
              </div>
            </motion.section>

            {/* Data Protection */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Lock className="h-6 w-6 text-[#ff5757] mr-3" />
                Data Protection & Security
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">Security Measures</h3>
                  <p className="text-gray-400">We implement industry-standard security measures to protect your data, including encryption, secure servers, and access controls.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">Data Retention</h3>
                  <p className="text-gray-400">We retain your data only as long as necessary to provide our services and comply with legal obligations. Generated images may be stored temporarily for service delivery.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">Third-Party Services</h3>
                  <p className="text-gray-400">We may use trusted third-party services for AI processing and infrastructure. These services are bound by strict data protection agreements.</p>
                </div>
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Your Rights</h2>
              <div className="bg-gradient-to-r from-[#ff5757]/20 to-[#ff5757]/10 backdrop-blur-sm rounded-xl p-8 border border-[#ff5757]/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Access & Portability</h3>
                    <p className="text-gray-300 text-sm">Request access to your data and receive it in a portable format.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Correction</h3>
                    <p className="text-gray-300 text-sm">Request correction of inaccurate or incomplete information.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Deletion</h3>
                    <p className="text-gray-300 text-sm">Request deletion of your personal data under certain circumstances.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Objection</h3>
                    <p className="text-gray-300 text-sm">Object to processing of your data for certain purposes.</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center bg-[#ff5757] hover:bg-[#ff4444] text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Contact Us About Your Data
                  </Link>
                </div>
              </div>
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold mb-4">Questions About This Policy?</h2>
              <p className="text-gray-400 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all border border-white/20"
              >
                Contact Us
              </Link>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
}
